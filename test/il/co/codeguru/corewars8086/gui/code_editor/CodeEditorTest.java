package il.co.codeguru.corewars8086.gui.code_editor;

import com.google.gwt.junit.client.GWTTestCase;
import elemental2.dom.DocumentFragment;
import il.co.codeguru.corewars8086.utils.Logger;
import il.co.codeguru.corewars8086.war.Competition;

public class CodeEditorTest extends GWTTestCase {

    private CodeEditor editor;

    /*
    TODO: This test crashes every time when the code tries to run something from Elemental2 lib
          Need to find some way to mock it/ run it, as CodeEditor has a lot of DOM manipulation
     */

    @Override
    public String getModuleName() {
        return "il.co.codeguru.corewars8086JUnit";
    }

    public void gwtSetUp()
    {
        Logger.setTestingMode();
        Logger.log("Alive");
    }


    public void testSimple()
    {
        assertTrue(true);
    }
}
