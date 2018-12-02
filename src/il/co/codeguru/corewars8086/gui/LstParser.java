package il.co.codeguru.corewars8086.gui;

import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.war.WarriorRepository;

import java.util.ArrayList;

public class LstParser {
    private final CodeEditor codeEditor;

    enum Field {
        START_SPACE,
        INDEX,
        SINGLE_SPACE_AFTER_INDEX,
        SPACE_BEFORE_CODE,
        ADDRESS,
        SPACE_AFTER_ADDRESS,
        OPCODE,
        WARNING,
        CODE,
        PARSE_ERR
    }
    
    public static final char SPACE_FOR_HEX_CHAR = '\u202f';
    public static final String SPACE_FOR_HEX = "&#x202f;";
    
    public LstParser(CodeEditor codeEditor) {
        this.codeEditor = codeEditor;
    }// runs a state machine that parses the .lst files

    private static boolean isDigit(char c) {
        return c >= '0' && c <= '9';
    }

    private static boolean isHexDigit(char c) {
        return (c >= '0' && c <= '9') || (c >= 'A' && c <= 'F'); // lst output only has upcase hex digits
    }

    boolean parseLst(String lsttext, StringBuilder opcodesText) {
        String[] lines = lsttext.split("\\n");
        codeEditor.setCurrentListing(new ArrayList<>());

        int lineIndex = 1; // does not increment in warning lines that appear in the listing file
        CodeEditor.LstLine prevLine = null;
        int totalOpcodeCount = 0;
        for (String line : lines) {
            Field state = Field.START_SPACE;
            CodeEditor.LstLine l = new CodeEditor.LstLine();

            int indexStart = 0, addressStart = 0, opcodeStart = 0;
            int charsBeforeCode = 0; // number of characters after the space after address and before the code. used fo not missing indentation
            for (int j = 0; j < line.length(); ++j) {
                char c = line.charAt(j);
                switch (state) {
                    case START_SPACE:
                        if (isDigit(c)) {
                            indexStart = j;
                            state = Field.INDEX;
                        } else if (c != ' ')
                            state = Field.PARSE_ERR;
                        break;
                    case INDEX:
                        if (c == ' ') {
                            state = Field.SINGLE_SPACE_AFTER_INDEX;
                            l.lineNum = Integer.parseInt(line.substring(indexStart, j));
                            // check the line number only at the end in order to sip warnings
                        } else if (!isDigit(c))
                            state = Field.PARSE_ERR;
                        break;
                    case SINGLE_SPACE_AFTER_INDEX:
                        if (c == ' ') {
                            state = Field.SPACE_BEFORE_CODE;
                            charsBeforeCode = -9; // account for not having an address
                        } else if (isHexDigit(c)) {
                            addressStart = j;
                            state = Field.ADDRESS;
                        } else
                            state = Field.PARSE_ERR;
                        break;
                    case ADDRESS:
                        if (c == ' ') {
                            state = Field.SPACE_AFTER_ADDRESS;
                            l.addressStr = line.substring(addressStart, j);
                            l.address = Integer.parseInt(l.addressStr, 16);
                        } else if (!isHexDigit(c))
                            state = Field.PARSE_ERR;
                        break;
                    case SPACE_AFTER_ADDRESS:
                        state = Field.OPCODE;
                        opcodeStart = j;
                        break;
                    case OPCODE:
                        boolean islast = (j == line.length() - 1);
                        if (c == '*') {
                            state = Field.WARNING;
                        } else if (!islast && charsBeforeCode < 22)
                            ++charsBeforeCode; // take anything as long as its in the field size of the Opcode. need this sinc resb adds spaces
                        else if (c == ' ' || islast) { // continuation lines of a string definition end in the middle of the Opcode field.
                            l.fullOpcode = line.substring(opcodeStart, j);
                            l.opcode = spacedHex(l.fullOpcode);
                            l.opcodesCount = countDigits(l.fullOpcode) / 2;
                            totalOpcodeCount += l.opcodesCount;
                            if (totalOpcodeCount > WarriorRepository.MAX_WARRIOR_SIZE)
                                return true; // is going to fail later in setText we check here just for not getting stuch in a long loop
                            state = Field.SPACE_BEFORE_CODE;
                            ++charsBeforeCode;
                        } else
                            ++charsBeforeCode;
                        break;
                    case SPACE_BEFORE_CODE:
                        if (c == '*') {
                            state = Field.WARNING;
                        } else if (c != ' ' || charsBeforeCode == 23) {
                            state = Field.CODE;
                            l.code = line.substring(j);
                        } else
                            ++charsBeforeCode;
                        break;
                    case CODE:
                        break; // don't care about the code part, we already have that from the input
                    case PARSE_ERR:
                        Console.log("ERROR: parsing list file!\n" + lsttext);
                        return false;
                } // switch
                if (state == Field.WARNING)
                    break; // stop parsing line
            } // for j in line chars
            if (state == Field.WARNING)
                continue; // skip this line
            if (l.lineNum > lineIndex) {  // this can happen if there is a \ at the end of a line, extending it to the next line
                // so the next line doesn't exist in the line count, we need to just skit it in the output
                // this can happe for multiple consecutive lines
                while (l.lineNum != lineIndex) {
                    opcodesText.append("\n");
                    ++lineIndex;
                }
            } else if (prevLine != null && l.lineNum == prevLine.lineNum) {
                // it's a continuation line of the previous line. we need to concatenate to get the full Opcode in order to know its size
                // happens with string definition db "abcdefgh"
                prevLine.fullOpcode += l.fullOpcode;
                prevLine.opcodesCount = countDigits(prevLine.fullOpcode) / 2;
                // no need to update the display Opcode because its already too long
                continue;
            } else if (l.lineNum != lineIndex) {
                Console.log("wrong line number " + Integer.toString(l.lineNum) + " at " + Integer.toString(lineIndex));
                return false;
            }

            ++lineIndex;

            codeEditor.getCurrentListing().add(l);
            opcodesText.append(l.opcode);
            opcodesText.append("\n");

            prevLine = l;
        }

        return true;
    }

    public String spacedHex(String s)
    {
        // find how many spaces from the end should be trimmed
        // spaces appear at the end since we take everything in the code area of the lst
        int upto = s.length() - 1;
        for(; upto >= 0; --upto) {
            if (s.charAt(upto) != ' ')
                break;
        }
        StringBuilder bs = new StringBuilder();
        int digitCount = 0;
        boolean doingDigits = s.length() > 0 && isHexDigit(s.charAt(0)); // if it's not a hex number thing, don't do any spacing (resb 4)

        for(int i = 0; i <= upto; ++i) {
            char c = s.charAt(i);
            if (digitCount == 7*2) {
                // don't add more than 7 bytes of Opcode to not overflow the field size
                bs.append(SPACE_FOR_HEX); // ellipsis
                break;
            }
            if (doingDigits && isHexDigit(c)) {
                bs.append(c);
                ++digitCount;
                if ((digitCount % 2) == 0 && digitCount > 0)
                    bs.append("&#x202f;"); // thin space
                continue;
            }
            else if (c == '<') {
                bs.append("&lt;");
                continue;
            }
            else if (c == '>') {
                bs.append("&gt;");
                continue;
            }
            else if ( (c == ')' || c == ']') && bs.length() > 8 && bs.substring(bs.length()-8) == "&#x202f;") {
                // if we see an end brace but we just added a space
                // put the end brace before the space so it would look good
                bs.insert(bs.length() - 8, c);
                continue;
            }
            bs.append(c);
        }
        return bs.toString();
    }

    public int countDigits(String s) {
        boolean doingDigits = s.length() > 0 && isHexDigit(s.charAt(0)); // see below 'nesb 4'
        if (!doingDigits)
            return 0; // not supported yet
        int count = 0;
        for(int i = 0; i < s.length(); ++i) {
            char c = s.charAt(i);
            if (isHexDigit(c)) {
                ++count;
            }
        }
        return count;
    }
}