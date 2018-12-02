package il.co.codeguru.corewars8086.gui;


import com.google.gwt.typedarrays.client.Uint8ArrayNative;
import elemental2.dom.*;
import elemental2.dom.EventListener;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.jsadd.Format;
import il.co.codeguru.corewars8086.memory.MemoryEventListener;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Disassembler;
import il.co.codeguru.corewars8086.war.*;


import java.util.*;

public class CodeEditor implements CompetitionEventListener, MemoryEventListener, IBreakpointCheck
{
    private final LstParser lstParser = new LstParser(this);
    private EditorBreakpointManager breakpointManager = new EditorBreakpointManager(this);
    private HTMLElement asm_output, opcodes_edit, asm_linenums, asm_show, debug_area, editor_bottom;
    private HTMLInputElement editor_title;
    private HTMLTextAreaElement asm_edit;

    private boolean m_isDebugMode = false;
    private MemoryEventListener.EWriteState m_memWriteState = MemoryEventListener.EWriteState.INIT;


    public static final int CODE_ARENA_OFFSET = 0x10000;

    private RealModeMemoryImpl m_mem = null;
    @Override
    public void onWarPreStartClear() {}
    @Override
    public void onWarStart() {
        m_mem = m_competition.getCurrentWar().getMemory();
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
        updateDebugLine();
    }

    DbgLine getSingleByteLine(byte bval) {
        int val = bval & 0xff; // to unsigned int
        DbgLine byteline = m_singleByte[val];
        if (byteline == null) {
            byteline = new DbgLine();
            String hexVal = Format.hex2(val);
            byteline.text = "<span class='dbg_opcodes'>" + hexVal + "</span>db " + hexVal + "h";
            byteline.flags = FLAG_UNPARSED;
        }
        m_singleByte[val] = byteline;
        return byteline;
    }

    private void setByte(int address, byte value) {
        DbgLine dbgline = getSingleByteLine(value);
        m_dbglines[address] = dbgline;
        renderLineIfInView(address, dbgline);
    }

    private void renderLineIfInView(int address, DbgLine dbgline) {
        int page = address / PAGE_SIZE;
        if (page == m_atScrollP1 || page == m_atScrollP2) {
            renderLine(address, dbgline);
        }
    }

    // MemoryEventListener
    @Override
    public void onMemoryWrite(RealModeAddress address, byte value)
    {
        // don't rewrite lines if we're in the stage of putting warriors in memory
        if (m_memWriteState != EWriteState.RUN)
            return;
        int absAddr = address.getLinearAddress();
        if (absAddr < War.ARENA_SEGMENT*RealModeAddress.PARAGRAPH_SIZE || absAddr >= War.ARENA_SEGMENT*RealModeAddress.PARAGRAPH_SIZE + War.ARENA_SIZE)
            return;
        int ipInsideArena = absAddr - 0x1000 *0x10; // arena * paragraph
        final int cIpInsideArea = ipInsideArena;

        int page = ipInsideArena / PAGE_SIZE;
        if (page < 0 || page >= m_pages.length)
            return;

        m_pages[page].isDirty = true;

        DbgLine existing = m_dbglines[ipInsideArena];

        if (existing == m_fillCmd) {
            setByte(ipInsideArena, value);
        }
        else  {
            // find where this Opcode starts
            while (m_dbglines[ipInsideArena] == null)
                --ipInsideArena;

            do {
                // rewriting only a single Opcode so its not possible to cross to a new Opcode which will need reparsing
                setByte(ipInsideArena, m_mem.readByte(ipInsideArena + CODE_ARENA_OFFSET));
                ++ipInsideArena;
            } while (ipInsideArena < 0x10000 && m_dbglines[ipInsideArena] == null);
        }

        // if we just edited the byte under the debugger, need to reparse it
        if (cIpInsideArea >= m_lastDbgAddr && cIpInsideArea < m_lastDbgAddrEnd) {
            m_lastDbgAddr = -1; // make it go inside the next function
            updateDebugLine();
        }


    }

    @Override
    public void onWriteState(EWriteState state) {
        m_memWriteState = state;
    }

    public static class LstLine {
        int lineNum = -1;
        int address = -1;
        String addressStr = "";
        String opcode = "";  // for display
        String fullOpcode = ""; // for knowing the real length
        String code = "";
        int opcodesCount = 0; // number of bytes in my Opcode, without brackets and spaces
        PlayersPanel.Breakpoint tmp_br = null; // used when initializing debug view (doesn't hold info when editing)
    }

    public static final int FLAG_UNPARSED = 1;  // means this is a DbgLine of a value written by a warrior and not yet parsed by the disassembler
    public static final int FLAG_DEFINE_CODE = 2; // line that came from the user typed text that defines a number (db 123)
    public static final int FLAG_HAS_COMMENT = 4; // This DbgLine has comment lines after the first code line so when highlighting this line, need to highlight dfXXXXX instead of dXXXXX

    public static final int FLAG_LSTLINE_MAX = 0x7ff;
    public static final int FLAG_LSTLINE_SHIFT = 16;
    public static final int FLAG_LSTLINE = 0x07ff0000; // 5 - upper 12 bits of the flat is a 1-based line number of the LstLine that created this DbgLine or 0 if there isn't one
    public static final int FLAG_PLAYER_NUM_SHIFT = 27;
    public static final int FLAG_PLAYER_NUM = 0xf8000000; // upper 5 bits is the player number, valid only if there is a non-zero LstLine

    // one such object can appear in multiple addresses for instance the comment int3 line
    public static class DbgLine {
        String text; // includes the command and any comment lines after it
        int flags = 0;
    }
    private DbgLine[] m_dbglines;  // for every address, the line of display in the debugger panel or null if line is not displayed
    private PlayersPanel.Breakpoint[] m_dbgBreakpoints; // for every address, reference to a Breakpoint object if one exists
                                                        // this is initialized a new every debug session

    public static class PageInfo {
        boolean isDirty;
        int startAddr;
        int endAddr;
    }
    private PageInfo[] m_pages; // marks when a page of 500 addresses should be redrawn in the next required time
    private int m_atScrollP1 = -1, m_atScrollP2 = -1;
    private DbgLine[] m_singleByte = new DbgLine[256]; // hold lines with db XXh for memory write events

    public ArrayList<LstLine> getCurrentListing() {
        return m_currentListing;
    }

    public void setCurrentListing(ArrayList<LstLine> m_currentListing) {
        this.m_currentListing = m_currentListing;
    }

    private ArrayList<LstLine> m_currentListing;
    public PlayersPanel m_playersPanel = null;
    private Competition m_competition = null;
    private int PAGE_SIZE = _PAGE_SIZE();

    private static native int _PAGE_SIZE() /*-{
        return $wnd.PAGE_SIZE
    }-*/;

    public CodeEditor(Competition competition)
    {
        m_competition = competition;
        m_competition.addCompetitionEventListener(this);
        m_competition.addMemoryEventLister(this);

        asm_edit = (HTMLTextAreaElement)DomGlobal.document.getElementById("asm_edit");
        asm_show = (HTMLElement)DomGlobal.document.getElementById("asm_show");
        asm_output = (HTMLElement)DomGlobal.document.getElementById("asm_output");
        editor_bottom = (HTMLElement)DomGlobal.document.getElementById("editor_bottom");
        opcodes_edit = (HTMLElement)DomGlobal.document.getElementById("opcodes_edit");
        asm_linenums = (HTMLElement)DomGlobal.document.getElementById("asm_linenums");
        editor_title = (HTMLInputElement)DomGlobal.document.getElementById("editor_title");

        asm_edit.addEventListener("input", (event) -> assemblyEditorChanged());

        editor_title.addEventListener("input", (event) -> {
            m_playersPanel.updateTitle(editor_title.value);
        });

        m_dbglines = new DbgLine[War.ARENA_SIZE];

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
        var that = this
        $wnd.j_renderIfDirty = $entry(function(i) { that.@il.co.codeguru.corewars8086.gui.CodeEditor::j_renderIfDirty(I)(i) });
        $wnd.j_setScrollAt = $entry(function(i,j) { that.@il.co.codeguru.corewars8086.gui.CodeEditor::j_setScrollAt(II)(i,j) });
        $wnd.j_asm_edit_changed = $entry(function() { that.@il.co.codeguru.corewars8086.gui.CodeEditor::assemblyEditorChanged()() });
    }-*/;

    private static native int run_nasm(String asmname, String text, String lstname)     /*-{
        $wnd.FS.writeFile(asmname, text, { encoding:'utf8' })
        $wnd.g_outputText = ''
        var ret_code = $wnd.run_nasm(asmname, lstname)
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


    public static final char SPACE_FOR_HEX_CHAR = '\u202f';
    public static final String SPACE_FOR_HEX = "&#x202f;";

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
        DocumentFragment lndf = DomGlobal.document.createDocumentFragment();
        // make a new one each time since the old one is kept around for breakpoints line reference
        m_lineOffsets = new ArrayList<>();

        int lineCount = 1;
        for (int i = 0; i <= intext.length(); ++i)
        {
            // need line number after with each new line and at the end
            if (i == intext.length() || intext.charAt(i) == '\n')
            {
                Element e = DomGlobal.document.createElement("div");
                e.addEventListener("click", m_editBrClickHandler);
                e.setAttribute("id", "ln" + Integer.toString(lineCount));
                e.appendChild(DomGlobal.document.createTextNode(Integer.toString(lineCount)));
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

    public void removeCurrentBreakpoints() {
        breakpointManager.removeCurrentBreakpoints();
    }

    // from PlayersPanel
    public void playerSelectionChanged(PlayersPanel.Code incode, PlayersPanel callback)
    {
        // remove the prev code breakpoints before it's lines will be erased by setText
        removeCurrentBreakpoints();

        asm_edit.value = incode.asmText;
        editor_title.value = incode.player.title;
        setText(incode.asmText, callback);

        // add breakpoints of current one
        // set them in the editor even if we're in debug mode
        breakpointManager.changePlayer(incode.breakpoints);

        if (m_isDebugMode) {
            updateDebugLine();
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

        removeCurrentBreakpoints();

        StringBuilder sb = new StringBuilder();
        Disassembler dis = new Disassembler.ArrDisassembler(incode.bin, 0, incode.bin.length);
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
        catch(Disassembler.DisassemblerException e) {
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
        // setting the text will redo the bin according to the disassemler. due to disassembler bugs this may be different
        // than the original, check it
        setText(incode.asmText, callback);

        int neq = bin_equal(setbin, incode.bin);
        if (neq != 0) {
            Console.error("Disassembled code is different from original code at " + Integer.toString(neq));
        }


        // when setting breakpoints, set to this
        breakpointManager.setBreakpoints(incode.breakpoints);
    }


    private DocumentFragment htmlizeText(String intext)
    {
        DocumentFragment df = DomGlobal.document.createDocumentFragment();
        int lastFound = -1;
        int found = intext.indexOf('\n');
        int lineNum = 1;
        while (found != -1) {
            if (found != lastFound + 1) { // not an empty line
                Element e = DomGlobal.document.createElement("span");
                e.setAttribute("id", "mline_" + Integer.toString(lineNum));
                String ss = intext.substring(lastFound + 1, found + 1);  // +1 to include the NL that is there
                Text t = DomGlobal.document.createTextNode(ss);
                e.appendChild(t);
                df.appendChild(e);
            }
            else {
                Text t = DomGlobal.document.createTextNode("\n");
                df.appendChild(t);
            }
            lastFound = found;
            found = intext.indexOf('\n', found+1);
            ++lineNum;
        }

        // take care of the last line that might not end with NL
        if (lastFound != intext.length() - 1)  // if it does end with NL, don't bother with the last empty line
        {
            Element e = DomGlobal.document.createElement("span");
            e.setAttribute("id", "mline_" + Integer.toString(lineNum));
            String ss = intext.substring(lastFound + 1);
            Text t = DomGlobal.document.createTextNode(ss);
            e.appendChild(t);
            df.appendChild(e);
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


    public int getLineCount() {
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
        int retcode = run_nasm("player.asm", nasm_intext, "player.lst");
        String stdout = get_stdout();

        // this updates m_lineOffsets and m_lineCount
        DocumentFragment lineNumDf = makeLineNumberFragment(intext);
        asm_linenums.innerHTML = "";
        asm_linenums.appendChild(lineNumDf);


        DocumentFragment df = null;
        if (!stdout.isEmpty())
        {   // add coloring to the text
            df = htmlizeText(intext);
            String errorString = parseStdout(stdout, df);

            asm_show.innerHTML = "";
            asm_show.appendChild(df);

            asm_output.innerHTML = errorString;
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
        boolean ok = lstParser.parseLst(output, opcodesText);
        if (!ok) {
            opcodes_edit.innerHTML = "[listing parsing error]";
            Console.error("listing parsing error"); // should not happen
            m_playersPanel.updateAsmResult(false, null, null);
            return;
        }
        opcodes_edit.innerHTML = opcodesText.toString();

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
    private boolean isDefineCode(String code) {
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
        Disassembler dis = new Disassembler.ArrDisassembler(binbuf, 0, binbuf.length);

        // process each line independently
        for(int lineNum = 0; lineNum < listing.size(); ++lineNum)
        {
            LstLine line = listing.get(lineNum);
            if (line.address == -1)
                continue; // not a code line
            if (isDefineCode(line.code)) {  // don't want to check disassembled opcodes on lines that just define data
                continue;
            }

            String msg = getDisassemblerErrorMessage(binbuf, dis, lineNum, line);

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
                    Element e = DomGlobal.document.getElementById("mline_" + Integer.toString(lineNum+1));
                    if (e == null) {
                        Console.error("did not find line?");
                        return;
                    }
                    e.classList.add("edit_warning");

                    Element omsgdiv = DomGlobal.document.createElement("div");
                    omsgdiv.classList.add("stdout_line_w");

                    if (lineNum < m_lineOffsets.size()) {
                        omsgdiv.setAttribute("ondblclick","asm_cursorToLine(" + Integer.toString(m_lineOffsets.get(lineNum)) + ")");
                    }
                    Text omsgtxt = DomGlobal.document.createTextNode(msg);
                    omsgdiv.appendChild(omsgtxt);

                    asm_output.appendChild(omsgdiv);
                }
            }
        }
    }

    private String getDisassemblerErrorMessage(byte[] binbuf, Disassembler dis, int lineNum, LstLine line) {
        String msg = null;
        try {
            dis.reset(line.address, line.address + line.opcodesCount);
            dis.nextOpcode();
            dis.lastOpcodeSize();
        }
        catch(Disassembler.DisassemblerLengthException e) {
            msg = Integer.toString(lineNum+1) + ": not enough bytes to parse"; // can happen if we db 09h for example, or just 'rep'
        }
        catch(Disassembler.DisassemblerException e) {
            msg = Integer.toString(lineNum+1) + ": Although this is a legal x86 Opcode, codewars8086 does not support it";
            int eptr = dis.getPointer() - 1;
            if (eptr >= 0 && eptr < binbuf.length)
                msg += ", Opcode = 0x" + Format.hex2(binbuf[eptr] & 0xff);
        }
        catch(RuntimeException e) {
            Console.error("failed parsing binbuf RuntimeException"); // this should not happen. only happens for missing cases
        }
        return msg;
    }


    // defer if we're inside setDebugMode
    private static native void scrollToAddr(int addr, boolean defer) /*-{
        if (defer)
            $wnd.deferredEditorToAddress = addr
        else {
            $wnd.scrollToAddr(addr)
        }
    }-*/;

    public void setTitle(String s) {
        editor_title.value = s;
    }


    private void setDbgAddrBreakpoint(int addr, boolean     v) {
        Element e = DomGlobal.document.getElementById("da" + Integer.toString(addr));
        if (v)
            e.classList.add("dbg_breakpoint");
        else
            e.classList.remove("dbg_breakpoint");
    }


    DbgLine m_fillCmd;

    private void initDebugAreaLines()
    {
        War war = m_competition.getCurrentWar();

        if (m_fillCmd == null) {
            m_fillCmd = new DbgLine();
            m_fillCmd.text = "<span class='dbg_backfill'><span class='dbg_opcodes'>CC</span>int 3</span>";
        }

        for(int addr = 0; addr < War.ARENA_SIZE; ++addr) {
            m_dbglines[addr] = m_fillCmd;
        }
        for(PageInfo p: m_pages)
            p.isDirty = true;

        m_dbgBreakpoints = new PlayersPanel.Breakpoint[War.ARENA_SIZE];

        for(int i = 0; i < war.getNumWarriors(); ++i)
        {
            Warrior w = war.getWarrior(i);
            int playerLoadOffset = w.getLoadOffsetInt(); // in the area segment

            PlayersPanel.Code code = m_playersPanel.findCode(w.getLabel());

            // transfer breakpoints
            assert code.lines != null: "unexpected null lines for code " + code.label + " of player" + code.player.getName();
            for(LstLine lstline : code.lines)
                lstline.tmp_br = null;
            for(PlayersPanel.Breakpoint br : code.breakpoints) {
                assert br.lineNum - 1 < code.lines.size() : "unexpected lineNum in breakpoint";
                code.lines.get(br.lineNum - 1).tmp_br = br;
            }


            DbgLine last_dbgline = null;

            // comment or label on the first line, need to belong to the address before first
            if (code.lines.get(0).address == -1)
            {
                int befFirst = playerLoadOffset - 1;
                if (m_dbglines[befFirst] != null) {
                    last_dbgline = m_dbglines[befFirst];
                    if (last_dbgline == m_fillCmd) { // it's the shared DbgLine from above, make a copy of it since we don't want to change it
                        DbgLine copy = new DbgLine();
                        copy.text = last_dbgline.text;
                        last_dbgline = copy;
                        m_dbglines[befFirst] = last_dbgline;
                    }
                }
                else {
                    last_dbgline = new DbgLine();
                    last_dbgline.text = "";
                    m_dbglines[befFirst] = last_dbgline;
                }
            }

            for(int lsti = 0; lsti < code.lines.size(); ++lsti)
            {
                LstLine lstline = code.lines.get(lsti);
                if (lstline.address == -1) {
                    assert last_dbgline != null: "Unexpected blank prev line";
                    last_dbgline.flags |= FLAG_HAS_COMMENT;
                    last_dbgline.text += "</div><div class='dbg_comment_line'>      <span class='dbg_opcodes'></span>" + lstline.code + "</div>";
                }
                else {
                    int loadAddr = lstline.address + playerLoadOffset;
                    DbgLine dbgline = new DbgLine();
                    String opcode = lstline.opcode;

                    dbgline.text = "<span class='dbg_opcodes'>" + opcode + "</span>" + lstline.code;
                    if (isDefineCode(lstline.code))
                        dbgline.flags = FLAG_DEFINE_CODE;

                    if (lsti <= FLAG_LSTLINE_MAX) {// lines above 2^16 are not tracked... should not come to this but just to be safe
                        dbgline.flags |= ((lsti+1) << FLAG_LSTLINE_SHIFT);
                        dbgline.flags |= (i << FLAG_PLAYER_NUM_SHIFT);
                    }
                    m_dbglines[loadAddr] = dbgline;

                    last_dbgline = dbgline;

                    for(int j = 1; j < lstline.opcodesCount; ++j) {
                        m_dbglines[loadAddr + j] = null;
                    }

                    if (lstline.tmp_br != null)
                        m_dbgBreakpoints[loadAddr] = lstline.tmp_br;

                }

            }


        }


    }

    public void j_setScrollAt(int p1, int p2) {
        j_renderIfDirty(p1);
        j_renderIfDirty(p2);

        m_atScrollP1 = p1;
        m_atScrollP2 = p2;
    }



    // dbgline should already be in m_dgblines
    // dXXXXX is the whole line, possible containing the following comment lines
    // dfXXXXX is just the first line that is not a comment - markable by debugger when stepping
    // daXXXXX is the address of the line (not preset in comment lines)
    public void renderLine(int addr, DbgLine dbgline) {
        String addrstr = Integer.toString(addr);
        HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById("d" + addrstr);
        if (dbgline == null) {
            dline.style.display = "none";
            return;
        }

        String addrhex = Format.hex4(addr);
        if ((dbgline.flags & FLAG_HAS_COMMENT) != 0) // this div tag is closed inside dbgline.text before the comment starts
            dline.innerHTML = "<div id='df" + addrstr + "'><span id='da" + addrstr + "'>" + addrhex + "</span>  " + dbgline.text;
        else
            dline.innerHTML = "<span id='da" + addrstr + "'>" + addrhex + "</span>  " + dbgline.text;
        dline.removeAttribute("style");

        HTMLElement da = (HTMLElement)DomGlobal.document.getElementById("da" + addrstr);
        da.addEventListener("click", m_dbgBrClickHandler);

        // mark breakpoint?
        PlayersPanel.Breakpoint br = m_dbgBreakpoints[addr];
        if (br != null) {
            setDbgAddrBreakpoint(addr, true);
        }
    }

    // from javascript scroll of debug area
    public void j_renderIfDirty(int pagenum)
    {
        if (pagenum == -1)
            return;
        PageInfo page = m_pages[pagenum];
        if (!page.isDirty)
             return;
        for(int addr = page.startAddr; addr < page.endAddr; ++addr)
        {
            DbgLine dbgline = m_dbglines[addr];
            renderLine(addr, dbgline);
        }
        page.isDirty = false;
    }

    public boolean shouldBreak(CpuStateRiscV state)
    {
        int absAddr = RealModeAddress.linearAddress(state.getCS(), (short)state.getPc());
        int arenaAddr = absAddr - CODE_ARENA_OFFSET;
        return m_dbgBreakpoints[arenaAddr] != null;
    }

    // called when an address is clicked to add a breakpoint for a line
    // all breakpoints of all players are visible and active
    // breakpoints in the debug view that are in addresses that don't correspond to code lines are transient.
    // they disappear once the debug session is over. They are not saved in the players m_breakpoints since it's unknown what players are they of
    private void toggleBreakpointDbg(int addr)
    {
        PlayersPanel.Breakpoint br = null;
        boolean wasAdded = false;

        if (m_dbgBreakpoints[addr] == null) {
            br = new PlayersPanel.Breakpoint(-1);
            m_dbgBreakpoints[addr] = br;
            wasAdded = true;
        }
        else {
            br = m_dbgBreakpoints[addr];
            m_dbgBreakpoints[addr] = null;
            wasAdded = false;
        }

        War war = m_competition.getCurrentWar();

        DbgLine dbgline = m_dbglines[addr];
        int lsti = (dbgline.flags & FLAG_LSTLINE) >> FLAG_LSTLINE_SHIFT;
        if (lsti >= 1) {
            int playeri = (dbgline.flags & FLAG_PLAYER_NUM) >> FLAG_PLAYER_NUM_SHIFT;
            Warrior warrior = war.getWarrior(playeri);

            PlayersPanel.Code codeObj = m_playersPanel.findCode(warrior.getLabel());

            if (wasAdded) {
                br.lineNum = lsti;
                // check sanity that there isn't a breakpoint in this line
                for(PlayersPanel.Breakpoint exist_br : codeObj.breakpoints)
                    assert exist_br.lineNum != br.lineNum : "Breakpoint of this line already exists! " + Integer.toString(br.lineNum);
                codeObj.breakpoints.add(br);
            }
            else {
                boolean removed = codeObj.breakpoints.remove(br);
                if (!removed)
                    Console.error("removed a breakpoint that did not exist?");
            }

            // add it to the editor as well if needed so it will be visible there when debugging is done
            if (codeObj == m_playersPanel.getCodeInEditor())
                setLineNumBreakpoint(lsti, wasAdded);
        }


        renderLine(addr, dbgline);
    }

    private final EventListener m_dbgBrClickHandler = event -> {
        Element e = (Element)event.target;
        //Console.log(e.innerHTML);
        toggleBreakpointDbg( Integer.parseInt(e.innerHTML, 16));
    };

    private int m_lastDbgAddr = -1; // for knowing if we need to move it
    private int m_lastDbgAddrEnd = -1; // end (one after last) of the debugged Opcode (for edit handling)
    private HTMLElement m_lastDbgElement;
    private boolean m_lastIsAlive = false;

    private Warrior getCurrentWarrior() {
        War war = m_competition.getCurrentWar();
        if (war == null)
            return null;
        String label = m_playersPanel.getCodeInEditor().getLabel();
        return war.getWarriorByLabel(label);
    }
    private static int getWarrirorIp(Warrior w) {
        if (w == null)
            return -1;
        CpuStateRiscV state = w.getCpuState();

        short ip = (short) state.getPc();
        short cs = state.getCS();

        int ipInsideArena = RealModeAddress.linearAddress(cs, ip) - CODE_ARENA_OFFSET;
        return ipInsideArena;
    }

    private int getCurrentWarriorIp() {
        return getWarrirorIp(getCurrentWarrior());
    }

    private void setByteFromMem(int addrInArea) {
        int value = m_mem.readByte(addrInArea + CODE_ARENA_OFFSET);
        setByte(addrInArea, (byte)(value & 0xff) );
    }

    public void updateDebugLine() {
        Warrior currentWarrior = getCurrentWarrior();
        if (currentWarrior == null)
            return;
        final int ipInsideArena = getWarrirorIp(currentWarrior);
        final boolean isAlive = currentWarrior.isAlive();

        scrollToAddr(ipInsideArena, false); // make sure to scroll to it even the current line marker is on it
        if (ipInsideArena == m_lastDbgAddr && isAlive == m_lastIsAlive) {
            return; // nothing to do, the line is what we want it to be
        }
        if (m_lastDbgElement != null) // remove the last thing we put there
            m_lastDbgElement.classList.remove(m_lastIsAlive ? "current_dbg" : "current_dbg_dead");

        // the first call to this is before debugMode is started to set the first debug line.
        // in this case we don't want to disassemble since the dbglines have not even been inited yet. sort of a hack.
        if (m_dbglines[ipInsideArena] == null)
        {
            // got to a null line, means this address is hidden and is part of a preceding Opcode, first find that
            int opcodeAddr = ipInsideArena;
            while (m_dbglines[opcodeAddr] == null)
                --opcodeAddr;
            // fill the size of this Opcode with db lines,
            // do this before disassembly of the IP line to make sure we've erased the old Opcode correctly
            do {
                setByteFromMem(opcodeAddr);
                ++opcodeAddr;
            } while (m_dbglines[opcodeAddr] == null);
            // disassemble may eat at any of the db's after it, and might also each Opcode after that
            disassembleAddress(ipInsideArena + CODE_ARENA_OFFSET, ipInsideArena);
        }
        else {
            DbgLine ipline = m_dbglines[ipInsideArena];
            int flags = m_dbglines[ipInsideArena].flags;
            if ((flags & FLAG_UNPARSED) != 0 || (flags & FLAG_DEFINE_CODE) != 0 ) {
                disassembleAddress(ipInsideArena + CODE_ARENA_OFFSET, ipInsideArena);
            }
        }

        String ider = "d";
        if ( (m_dbglines[ipInsideArena].flags & FLAG_HAS_COMMENT) != 0)
            ider = "df"; // a line with a comment after, don't highlight the entire line, just the first line. df is assured to exist if we have this flag

        HTMLElement dline = (HTMLElement)DomGlobal.document.getElementById(ider + Integer.toString(ipInsideArena));
        dline.classList.add( isAlive ? "current_dbg" : "current_dbg_dead");
        m_lastDbgElement = dline;
        m_lastDbgAddr = ipInsideArena;
        m_lastDbgAddrEnd = m_lastDbgAddr + 1;
        m_lastIsAlive = isAlive;
        while (m_lastDbgAddrEnd < 0x10000 && m_dbglines[m_lastDbgAddrEnd] == null)
            ++m_lastDbgAddrEnd;

    }

    private void disassembleAddress(int absaddr, int addrInArea)
    {
        byte[] memory_bytes = m_mem.getMemory();
        Disassembler dis = new Disassembler.ArrDisassembler(memory_bytes , absaddr, m_mem.length()); // TBDTBD
        String text;
        try {
            text = dis.nextOpcode();
        }
        catch(Disassembler.DisassemblerException e) {
            return;
        }
        eraseOpcode(addrInArea); // for example replacing at the start of a long db "ABC"
        int len = dis.lastOpcodeSize();

        DbgLine opline = new DbgLine();
        StringBuilder bs = new StringBuilder();
        for(int i = 0; i < len; ++i) {
            bs.append( Format.hex2(m_mem.readByte(absaddr + i) & 0xff));
            bs.append(SPACE_FOR_HEX);
        }

        opline.text = "<span class='dbg_opcodes'>" + bs.toString() + "</span>" + text;
        m_dbglines[addrInArea] = opline;
        renderLineIfInView(addrInArea, opline);
        for(int i = 1; i < len; ++i) {
            // remove the lines of the bytes after it
            // don't know what opcodes I'm writing so need to make sure it remains consistent
            eraseOpcode(addrInArea + i);
            // this erases one line and possible adds db in the lines after it, this is simple good although it can write several times in the same place
        }
    }

    // erase the Opcode in addr, and take care to setByte the bytes after it that are affected
    private void eraseOpcode(int addrInArea) {
        m_dbglines[addrInArea] = null;
        renderLineIfInView(addrInArea, null);
        ++addrInArea;
        while(m_dbglines[addrInArea] == null) {
            setByteFromMem(addrInArea);
            ++addrInArea;
        }
    }


    public void scrollToCodeInEditor(boolean defer) {
        int ipInsideArena = getCurrentWarriorIp();
        if (ipInsideArena == -1) // not in competition
            return;

        scrollToAddr(ipInsideArena, defer);

    }

    public void setDebugMode(boolean v) {
        if (v) {
            editor_bottom.style.display = "none";
            asm_edit.style.display= "none"; // just the textarea
            editor_title.readOnly = true;

            initDebugAreaLines();
            scrollToCodeInEditor(true); // defer scrolling since we want to do this only after all sizes are correct and everything shown
        }
        else {
            editor_bottom.style.display = "";
            asm_edit.style.display = "";
            editor_title.readOnly = false;
        }
        m_isDebugMode = v;

    }

    public void setLineNumBreakpoint(int lineNum, boolean v) {
        Element e = DomGlobal.document.getElementById("ln" + Integer.toString(lineNum));
        if (v)
            e.classList.add("edit_breakpoint");
        else
            e.classList.remove("edit_breakpoint");
    }

}