package il.co.codeguru.corewars8086.gui.code_editor;

import com.google.gwt.typedarrays.client.Uint8ArrayNative;
import elemental2.dom.*;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.gui.IBreakpointCheck;
import il.co.codeguru.corewars8086.gui.PlayersPanel;
import il.co.codeguru.corewars8086.gui.asm_parsers.GasListParser;
import il.co.codeguru.corewars8086.gui.asm_parsers.IListParser;
import il.co.codeguru.corewars8086.gui.asm_parsers.NasmListParser;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.utils.disassembler.DisassemblerRiscV;
import il.co.codeguru.corewars8086.utils.disassembler.IDisassembler;
import il.co.codeguru.corewars8086.war.*;

import java.util.ArrayList;

import static elemental2.dom.DomGlobal.document;
import static il.co.codeguru.corewars8086.memory.RealModeAddress.PARAGRAPH_SIZE;
import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

public class CodeEditor implements CompetitionEventListener, MemoryEventListener, IBreakpointCheck
{
    private final LstParser lstParser = new LstParser(this);
    private final Debugger debugger = new Debugger(this);
    private EditorBreakpointManager breakpointManager = new EditorBreakpointManager(this);
    private HTMLElement asm_output;
    private HTMLElement opcodes_edit;
    private HTMLElement asm_linenums;
    private HTMLElement asm_show;
    private HTMLElement editor_bottom;
    private HTMLInputElement editor_title;
    private HTMLTextAreaElement asm_edit;

    private boolean m_isDebugMode = false;


    static final int CODE_ARENA_OFFSET = ARENA_SEGMENT * PARAGRAPH_SIZE;

    @Override
    public void onWarPreStartClear() {}
    @Override
    public void onWarStart() {
        debugger.setMemory(m_competition.getCurrentWar().getMemory());
    }
    @Override
    public void onWarEnd(int reason, String winners, boolean inDebug) {
    }
    @Override
    public void onRound(int round) {}
    @Override
    public void onWarriorBirth(Warrior w) {}
    @Override
    public void onWarriorDeath(Warrior warrior, String reason) {

    }
    @Override
    public void onCompetitionStart() {}
    @Override
    public void onCompetitionEnd() {}
    @Override
    public void onPaused() {}
    @Override
    public void onNoneAlive() {}
    @Override
    public void onEndRound() {
        debugger.updateDebugLine();
    }

    // MemoryEventListener
    @Override
    public void onMemoryWrite(RealModeAddress address, byte value) {
        debugger.getMemoryListener().onMemoryWrite(address, value);
    }

    @Override
    public void onWriteState(EWriteState state) {
        debugger.getMemoryListener().onWriteState(state);
    }

    public static class LstLine {
        public int lineNum = -1;
        public int address = -1;
        public String addressStr = "";
        public String opcode = "";  // for display
        public String fullOpcode = ""; // for knowing the real length
        public String code = "";
        public int opcodesCount = 0; // number of bytes in my Opcode, without brackets and spaces
        public PlayersPanel.Breakpoint tmp_br = null; // used when initializing debug view (doesn't hold info when editing)
    }

    public static class PageInfo {
        boolean isDirty;
        int startAddr;
        int endAddr;
    }

    public PageInfo[] getPages()
    {
        return m_pages;
    }

    private PageInfo[] m_pages; // marks when a page of 500 addresses should be redrawn in the next required time


    PlayersPanel getPlayerPanel()
    {
        return m_playersPanel;
    }

    Competition getCurrentCompetition()
    {
        return m_competition;
    }

    ArrayList<LstLine> getCurrentListing() {
        return m_currentListing;
    }

    void setCurrentListing(ArrayList<LstLine> m_currentListing) {
        this.m_currentListing = m_currentListing;
    }

    private ArrayList<LstLine> m_currentListing;
    public PlayersPanel m_playersPanel = null;
    private Competition m_competition;
    final int PAGE_SIZE = _PAGE_SIZE();
    private IListParser m_listParser;


    private static native int _PAGE_SIZE() /*-{
        return (typeof $wnd.PAGE_SIZE === "undefined" ? 512 : $wnd.PAGE_SIZE)
    }-*/;

    public CodeEditor(Competition competition)
    {
        m_competition = competition;
        m_competition.addCompetitionEventListener(this);
        m_competition.addMemoryEventLister(this);

        asm_edit = (HTMLTextAreaElement) document.getElementById("asm_edit");
        asm_show = (HTMLElement) document.getElementById("asm_show");
        asm_output = (HTMLElement) document.getElementById("asm_output");
        editor_bottom = (HTMLElement) document.getElementById("editor_bottom");
        opcodes_edit = (HTMLElement) document.getElementById("opcodes_edit");
        asm_linenums = (HTMLElement) document.getElementById("asm_linenums");
        editor_title = (HTMLInputElement) document.getElementById("editor_title");

        asm_edit.addEventListener("input", (event) -> assemblyEditorChanged());
        editor_title.addEventListener("input", (event) -> m_playersPanel.updateTitle(editor_title.value));

        m_pages = new PageInfo[ (War.ARENA_SIZE / PAGE_SIZE) + 1 ];
        for(int i = 0; i < m_pages.length; ++i) {
            PageInfo pi = new PageInfo();
            m_pages[i] = pi;
            pi.isDirty = true;
            pi.startAddr = i * PAGE_SIZE;
            pi.endAddr = Math.min( (i + 1) * PAGE_SIZE, War.ARENA_SIZE);
        }

        exportMethods();
    }

    public native void exportMethods() /*-{
        var that = this;
        var debug = this.@il.co.codeguru.corewars8086.gui.code_editor.CodeEditor::debugger;
        $wnd.j_renderIfDirty = $entry(function(i) { debug.@il.co.codeguru.corewars8086.gui.code_editor.Debugger::j_renderIfDirty(I)(i) });
        $wnd.j_setScrollAt = $entry(function(i,j) { debug.@il.co.codeguru.corewars8086.gui.code_editor.Debugger::j_setScrollAt(II)(i,j) });
        $wnd.j_asm_edit_changed = $entry(function() { that.@il.co.codeguru.corewars8086.gui.code_editor.CodeEditor::assemblyEditorChanged()() });
    }-*/;

    private static native int run_assembler(String asmname, String text, String lstname)     /*-{
        $wnd.FS.writeFile(asmname, text, { encoding:'utf8' })
        $wnd.g_outputText = ''
        $wnd.reinitMem()
        var ret_code = $wnd.run_assembler(asmname, lstname)
        return ret_code
    }-*/;
    private static native String read_file(String name) /*-{
        return $wnd.FS.readFile(name, { encoding: 'utf8' })
    }-*/;

    private static native Uint8ArrayNative read_file_bin(String name) /*-{
        return $wnd.FS.readFile(name, { encoding: 'binary' })
    }-*/;

    private static byte[] read_file_bin_arr(String name) {
        Uint8ArrayNative arr = read_file_bin(name);
        byte[] buf = new byte[arr.length()];
        for(int i = 0; i < arr.length(); ++i)
            buf[i] = (byte)arr.get(i);
        return buf;
    }

    private static native String get_stdout() /*-{
        return $wnd.g_outputText
    }-*/;


    private static native String js_setPlatform(String plat) /*-{
        if (plat == "8086") {
            $wnd.run_assembler = $wnd.run_nasm
        }
        else if (plat == "riscv") {
            $wnd.run_assembler = $wnd.run_gas
        }
    }-*/;

    public void setPlatform(String plat) {
        if (plat == "8086") {
            m_listParser = new NasmListParser();
        }
        else if (plat == "riscv") {
            m_listParser = new GasListParser();
        }
        js_setPlatform(plat);

    }

    public static final char SPACE_FOR_HEX_CHAR = '\u202f';
    static final String SPACE_FOR_HEX = "&#x202f;";

    private static native Element DocumentFragment_getElementById(DocumentFragment df, String id) /*-{
        return df.getElementById(id)
    }-*/;


    // given a line number (starting 0), give the offset in the input text the line ends
    // this is a member in order to avoid reallocating it every time
    // this is used for knowing how many lines there are and placing double click cursor
    private ArrayList<Integer> m_lineOffsets = null;

    // for each line, if there's an error 'e' or warning 'w' on it
    // referenced later when we add more warnings
    private char[] m_errLines = null;

    // returns the input asm text, with added formatting for error and warning lines
    private String parseStdout(String stdoutText, DocumentFragment asmElem)
    {
        StringBuilder errorHtml = new StringBuilder();
        String[] lines = stdoutText.split("\\n");
        // warning come before errors so we can't assume the line numbers are ascending
        // so we need to save all the line nums, sort and then go over from start to end of the text

        int countAllNL = m_lineOffsets.size();

        // have a potential char for every line in the asm text. this way there's no need to sort
        // and there is only one entry per line, error trumps warning
        // used for determining the color of a line
        m_errLines = new char[countAllNL]; // for every line in the asmText, 0,'e' or 'w'

        // go over stdout, find out which lines need marking
        for (String line : lines) {
            int firstColon = -1;
            int lineNum = -1; // this would be zero based
            char lineType = 0;
            // find first and second columns chars
            for (int j = 0; j < line.length(); ++j) {
                if (line.charAt(j) == ':') {
                    if (firstColon == -1)
                        firstColon = j;
                    else {
                        lineNum = Integer.parseInt(line.substring(firstColon + 1, j));
                        lineNum -= 1; // read numbers are 1 based
                        if (j + 2 < line.length()) { // sanity check on the line length
                            assert lineNum < countAllNL : "unexpected lineNum";
                            lineType = line.charAt(j + 2); // +2 for a space and then the first letter of 'error' or 'warning'
                            if (!(lineType == 'w' && m_errLines[lineNum] == 'e')) // not the case where an 'w' overwrites a 'e'
                                m_errLines[lineNum] = lineType;
                        }
                        break;
                    }
                }
            }
            if (lineNum == -1) {
                Console.log("Failed parsing error stdout");
                return  "";
            }

            errorHtml.append("<div class='stdout_line_" + lineType + "' ondblclick='asm_cursorToLine(" +
                    Integer.toString(m_lineOffsets.get(lineNum)) + ")'>");
            errorHtml.append(line.substring(firstColon + 1));
            errorHtml.append("</div>");
        }


        for(int lineNum = 0; lineNum < m_errLines.length; ++lineNum)
        {
            char ec = m_errLines[lineNum];
            if (ec == 0)
                continue;

            Element e = DocumentFragment_getElementById(asmElem, "mline_" + Integer.toString(lineNum+1));
            if (e == null)
                continue; // can happen with some strange case of dz... ? could not reproduce but it happened
            if (ec == 'e')
                e.classList.add("edit_error");
            else
                e.classList.add("edit_warning");

        }
        return errorHtml.toString();

    }

    static native int asm_edit_selectionStart() /*-{
        return $wnd.asm_edit.selectionStart
    }-*/;
    static native int asm_edit_selectionEnd() /*-{
        return $wnd.asm_edit.selectionEnd
    }-*/;
    static native int asm_edit_setSelection(int start, int end) /*-{
        $wnd.asm_edit.selectionStart = start
        $wnd.asm_edit.selectionEnd = end
    }-*/;

    private void toggleBreakpointEdit(int atline)
    {
        int atindex = atline - 1; // 0 base index
        if (atindex < 0 || atindex >= m_currentListing.size()) {
            Console.error("addBreakpointEdit invalid line " + Integer.toString(atline));
            return;
        }
        breakpointManager.toggleBreakpointEdit(atline);
    }

    private final EventListener m_editBrClickHandler = event -> {
        Element e = (Element)event.target;
        toggleBreakpointEdit(Integer.parseInt(e.innerHTML));
    };


    private DocumentFragment makeLineNumberFragment(String intext)
    {
        DocumentFragment lndf = document.createDocumentFragment();
        // make a new one each time since the old one is kept around for breakpoints line reference
        m_lineOffsets = new ArrayList<>();

        int lineCount = 1;
        for (int i = 0; i <= intext.length(); ++i)
        {
            // need line number after with each new line and at the end
            if (i == intext.length() || intext.charAt(i) == '\n')
            {
                Element e = document.createElement("div");
                e.addEventListener("click", m_editBrClickHandler);
                e.setAttribute("id", "ln" + Integer.toString(lineCount));
                e.appendChild(document.createTextNode(Integer.toString(lineCount)));
                lndf.appendChild(e);

                ++lineCount;
                m_lineOffsets.add(i);
            }
        }
        m_lineCount = lineCount - 1; // we started from 1

        return lndf;
    }



    private boolean entered = false;
    private String m_prevInText = null; // used for breakpoint move analysis

    private void assemblyEditorChanged()
    {
        if (entered) // edit recursion should not happen because we're not making changes to asm_edit.value;
            return;  // so this probably does nothing but just to be safe...
        entered = true;

        int prevLineCount = m_lineCount; // next line is going to change this
        ArrayList<Integer> prevLiveOffsets = m_lineOffsets;

        String intext = asm_edit.value;
        setText(intext, m_playersPanel);
        // update breakpoints only if there was an editing change (and not when switching displayed code)
        updateBreakpoints(prevLiveOffsets, prevLineCount, m_prevInText);
        m_playersPanel.updateText(intext); // tell the players database that this player has a new text
        m_prevInText = intext;

        entered = false;
    }

    // return new lines the same number as the input text
    private String linesAsInput(String text)
    {
        StringBuilder opcodesText = new StringBuilder();
        for(int i = 0; i < text.length(); ++i)
        {
            char c = text.charAt(i);
            if (c == '\n')
                opcodesText.append("<br>");
        }
        return opcodesText.toString();
    }

    // from PlayersPanel
    public void playerSelectionChanged(PlayersPanel.Code incode, PlayersPanel callback)
    {
        // remove the prev code breakpoints before it's lines will be erased by setText
        breakpointManager.removeCurrentBreakpoints();

        asm_edit.value = incode.asmText;
        editor_title.value = incode.player.title;
        setText(incode.asmText, callback);

        // add breakpoints of current one
        // set them in the editor even if we're in debug mode
        breakpointManager.changePlayer(incode.breakpoints);

        if (m_isDebugMode) {
            debugger.updateDebugLine();
        }
    }

    private int bin_equal(byte[] a, byte[] b) {
        if (a.length != b.length)
            return -1;
        for(int i = 0; i < a.length; ++i)
            if (a[i] != b[i])
                return i;
        return 0;
    }

    // when the user uploads a new binary file
    public void loadedNewBinary(PlayersPanel.Code incode, PlayersPanel callback)
    {
        if (m_isDebugMode)
            return; // should not happen. can't load new code in debug

        breakpointManager.removeCurrentBreakpoints();

        StringBuilder sb = new StringBuilder();
        IDisassembler dis = new DisassemblerRiscV(incode.bin, 0, incode.bin.length);
        int offset = 0;
        try {
            while (offset < incode.bin.length) {
                String text = dis.nextOpcode();
                sb.append(text)
                  .append("\n");
                int len = dis.lastOpcodeSize();
                offset += len;
            }
        }
        catch(IDisassembler.DisassemblerException e) {
            // do nothing
        }

        // if there's anything left at the end that we didn't eat above
        for(;offset < incode.bin.length; ++offset) {
            byte b = incode.bin[offset];
            sb.append("db 0x")
              .append(Format.hex2(b & 0xff))
              .append("\n");
        }
        String text = sb.toString();
        incode.asmText = text;
        asm_edit.value = text;
        byte[] setbin = incode.bin;
        // setting the text will redo the bin according to the disassembler. due to disassembler bugs this may be different
        // than the original, check it
        setText(incode.asmText, callback);

        int neq = bin_equal(setbin, incode.bin);
        if (neq != 0) {
            Console.error("Disassembled code is different from original code at " + Integer.toString(neq));
        }


        // when setting breakpoints, set to this
        breakpointManager.setBreakpoints(incode.breakpoints);
    }


    /**
     * Converts the code editor text into html tags
     * @param intext The code editor text
     * @return A DocumentFragment containing all of the html tags
     */
    private DocumentFragment htmlizeText(String intext)
    {
        DocumentFragment df = document.createDocumentFragment();
        int lineNum = 1;
        String[] lines = intext.split("\\n");

        for(String line : lines)
        {
            if(!line.equals(""))
            {
                Element e = document.createElement("span");
                e.setAttribute("id", "mline_" + Integer.toString(lineNum));
                Text t = document.createTextNode(line + "\n");
                e.appendChild(t);
                df.appendChild(e);
            }
            lineNum++;
        }
        return df;
    }


    private static native int saved_selectionStart() /*-{
        var v = $wnd.saved_selectionStart
        // reset it so that we'll know something happened next time
        //$wnd.saved_selectionStart = -1
        return v
    }-*/;
    private static native int saved_selectionEnd() /*-{
        var v = $wnd.saved_selectionEnd
        //$wnd.saved_selectionEnd = -1
        return v
    }-*/;
    private static native String saved_keydown() /*-{
        return $wnd.saved_keydown
    }-*/;


    int getLineCount() {
        return m_lineCount;
    }

    // used for dececting if lines were added or removed
    private int m_lineCount = 0;

    // this function analyzes the change made by knowing what was selected or where the caret was
    // and how many lines were removed or added in order to move around breakpoints
    // - it doesn't support dragging text that has NL in it (breakpoint doesn't move)
    private void updateBreakpoints(ArrayList<Integer> prevLineOffsets, int prevLineCount, String prevInText)
    {
        int selStart = saved_selectionStart();
        int selEnd = saved_selectionEnd();
        String keydown = saved_keydown();
        breakpointManager.updateBreakpoints(prevLineOffsets, prevLineCount, prevInText, selStart, selEnd, keydown);
    }


    // inspired by https://github.com/kazzkiq/CodeFlask.js#usage which also writes all the dome in every key press
    public void setText(String intext, PlayersPanel playersPanel)
    {
        if (intext.isEmpty()) {
            asm_output.innerHTML = "";
            opcodes_edit.innerHTML = "";
            asm_show.innerHTML = "";
            asm_linenums.innerHTML = "1";
            if (playersPanel != null)
                playersPanel.updateAsmResult(true, null, null);
            return;
        }


        intext = intext.replace('\u00A0', ' ') // no-break-space coming from html
                       .replace("&", "&amp;")  // other stuff coming from textarea we don't want to pass to html
                       .replace("<", "&lt;")
                       .replace(">", "&gt;");
        // we want the marks to appear in the html for debugging but not in the nasm input
        String nasm_intext = intext;
        // assemble
        int retcode = run_assembler("player.asm", nasm_intext, "player.lst");
        String stdout = get_stdout();

        // this updates m_lineOffsets and m_lineCount
        DocumentFragment lineNumDf = makeLineNumberFragment(intext);
        asm_linenums.innerHTML = "";
        asm_linenums.appendChild(lineNumDf);


        DocumentFragment df = null;
        if (!stdout.isEmpty())
        {
            StringBuilder stdoutShorten = new StringBuilder(); // removes the file name from the start of the lines

            // add coloring to the text
            df = htmlizeText(intext);
            m_errLines = m_listParser.parseStdout(stdout, df, stdoutShorten, m_lineOffsets);

            asm_show.innerHTML = "";
            asm_show.appendChild(df);

            asm_output.innerHTML = stdoutShorten.toString();
        }
        else {
            asm_show.innerHTML = intext; // clear all line marking
            asm_output.innerHTML = "";

            m_errLines = null;
        }


        if (retcode != 0) { // error
            // TBD- compile just till the error line? or just the last good result?
            opcodes_edit.innerHTML = linesAsInput(intext); // this is needed because x-scroll hiding relies on the Opcode pane to be full
            Console.error("~Assembler error");
            if (playersPanel != null)
                playersPanel.updateAsmResult(false, null, null);
            return;
        }

        String output = read_file("player.lst");
        if (output.isEmpty()) {
            m_currentListing.clear();
            opcodes_edit.innerHTML = linesAsInput(intext);
            Console.log("~Empty output");
            if (playersPanel != null)
                playersPanel.updateAsmResult(true, null, null);
            return;
        }

        StringBuilder opcodesText = new StringBuilder();
        m_currentListing = new ArrayList<CodeEditor.LstLine>();

        boolean ok = m_listParser.parseLst(output, opcodesText, m_currentListing);
        if (!ok) {
            opcodes_edit.innerHTML = "[listing parsing error]";
            Console.error("listing parsing error"); // should not happen
            m_playersPanel.updateAsmResult(false, null, null);
            return;
        }
        opcodes_edit.innerHTML = opcodesText.toString();

        //TODO: Check if file returns things little-endian or big-endian
        byte[] buf = read_file_bin_arr("player");
        if (buf.length > WarriorRepository.MAX_WARRIOR_SIZE) {
            String msg = "Code is longer than the maximum allowed " + Integer.toString(WarriorRepository.MAX_WARRIOR_SIZE) + " bytes";
            Console.error(msg);
            asm_output.innerHTML = "<div class='stdout_line_e'>" + msg + "</div>";
            if (playersPanel != null)
                playersPanel.updateAsmResult(false, buf, null);
            return;
        }

        checkDisasmLines(buf, m_currentListing, df, intext);


        if (playersPanel != null)
            playersPanel.updateAsmResult(true, buf, m_currentListing);

    }

    // check if code text is db ..
    public boolean isDefineCode(String code) {
        int start = -1, end = -1;
        for(int i = 0; i < code.length(); ++i) {
            char c = code.charAt(i);
            if (start == -1) {
                if (c > 32) // what about entering nbsp from keyboard? (persian?)
                    start = i;
            }
            else {
                if (c <= 32) {
                    end = i;
                    break;
                }
            }
        }
        if (start == -1 || end == -1)
            return false; // didn't find the command it may be an argument less command
        String cmd = code.substring(start, end).toLowerCase();
        char s = 0;
        if (cmd.length() == 2 && cmd.charAt(0) == 'd')
            s = cmd.charAt(1);
        if (cmd.length() == 4 && cmd.charAt(0) == 'r' && cmd.charAt(1) == 'e' && cmd.charAt(2) == 's')
            s = cmd.charAt(3);

        return s == 'b' || s == 'w' || s == 'd' || s == 'q' || s == 't' || s == 'o' || s == 'y' || s == 'z';

    }

    // check opcodes that are emitten are supported by codewars8086 and issue warnings if not
    private void checkDisasmLines(byte[] binbuf, ArrayList<LstLine> listing, DocumentFragment asmElem, String intext)
    {
        IDisassembler dis = new DisassemblerRiscV(binbuf, 0, binbuf.length);

        // process each line independently
        for(int lineNum = 0; lineNum < listing.size(); ++lineNum)
        {
            LstLine line = listing.get(lineNum);
            if (line.address == -1)
                continue; // not a code line
            if (isDefineCode(line.code)) {  // don't want to check disassembled opcodes on lines that just define data
                continue;
            }

            String msg = getDisassemblerErrorMessage(dis, lineNum, line);

            if (msg != null)
            {
                // if m_errLines is null it means there are no errors or warnings so we're good
                if (m_errLines == null || (lineNum < m_errLines.length && m_errLines[lineNum] == 0)) // it exists and there isn't an something already there
                {
                    if (asmElem == null) {
                        asmElem = htmlizeText(intext);
                        asm_show.innerHTML = "";
                        asm_show.appendChild(asmElem); // this is somewhat replicated code from above that there's no easy way to avoid it
                    }
                    Element e = document.getElementById("mline_" + Integer.toString(lineNum+1));
                    assert e!=null : "did not find line?";

                    e.classList.add("edit_warning");

                    Element omsgdiv = document.createElement("div");
                    omsgdiv.classList.add("stdout_line_w");

                    if (lineNum < m_lineOffsets.size()) {
                        omsgdiv.setAttribute("ondblclick","asm_cursorToLine(" + Integer.toString(m_lineOffsets.get(lineNum)) + ")");
                    }
                    Text omsgtxt = document.createTextNode(msg);
                    omsgdiv.appendChild(omsgtxt);

                    asm_output.appendChild(omsgdiv);
                }
            }
        }
    }

    private String getDisassemblerErrorMessage(IDisassembler dis, int lineNum, LstLine line) {
        String msg = null;
        try {
            dis.reset(line.address, line.address + line.opcodesCount);
            dis.nextOpcode();
            dis.lastOpcodeSize();
        }
        catch(IDisassembler.DisassemblerLengthException e) {
            msg = Integer.toString(lineNum+1) + ": not enough bytes to parse"; // can happen if we db 09h for example, or just 'rep'
        }
        //TODO: Change this to its own exception type
        catch(IDisassembler.DisassemblerException e) {
            msg = Integer.toString(lineNum+1) + ": Although this is a legal RISC-V Opcode, codewars-risc-v does not support it";
        }
        catch(RuntimeException e) {
            Console.error("failed parsing binbuf RuntimeException"); // this should not happen. only happens for missing cases
        }
        return msg;
    }


    // defer if we're inside setDebugMode
    public static native void scrollToAddr(int addr, boolean defer) /*-{
        if (defer)
            $wnd.deferredEditorToAddress = addr
        else {
            $wnd.scrollToAddr(addr)
        }
    }-*/;

    public void setTitle(String s) {
        editor_title.value = s;
    }

    public boolean shouldBreak(CpuStateRiscV state)
    {
        int absAddr = RealModeAddress.linearAddress(ARENA_SEGMENT, (short)state.getPc());
        int arenaAddr = absAddr - CODE_ARENA_OFFSET;
        return debugger.getDbgBreakpoint(arenaAddr) != null;
    }

    public void setDebugMode(boolean v) {
        if (v) {
            editor_bottom.style.display = "none";
            asm_edit.style.display= "none"; // just the textarea
            editor_title.readOnly = true;

            debugger.initDebugAreaLines();
        }
        else {
            editor_bottom.style.display = "";
            asm_edit.style.display = "";
            editor_title.readOnly = false;
        }
        debugger.setDebugMode(v);
        m_isDebugMode = v;
    }

    public void setLineNumBreakpoint(int lineNum, boolean v) {
        Element e = document.getElementById("ln" + Integer.toString(lineNum));
        if (v)
            e.classList.add("edit_breakpoint");
        else
            e.classList.remove("edit_breakpoint");
    }
}