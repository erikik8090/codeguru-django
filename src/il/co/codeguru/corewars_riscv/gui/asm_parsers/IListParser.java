package il.co.codeguru.corewars_riscv.gui.asm_parsers;

import elemental2.dom.DocumentFragment;
import il.co.codeguru.corewars_riscv.gui.code_editor.CodeEditor;

import java.util.ArrayList;

public interface IListParser {
    boolean parseLst(String lsttext, StringBuilder opcodesText, ArrayList<CodeEditor.LstLine> m_currentListing);
    char[] parseStdout(String stdoutText, DocumentFragment asmElem, StringBuilder stdoutShorten, ArrayList<Integer> m_lineOffsets);
}