package il.co.codeguru;

import org.junit.*;
import static org.junit.Assert.*;
import java.util.*;

public class SimpleTestSuite {

    private Collection<Object> collection;

    @Before
    public void setUp() {
        collection = new ArrayList<Object>();
    }

    @Test
    public void testEmptyCollection() {
        assertTrue(collection.isEmpty());
    }


    @Test
    public void testOneItemCollection() {
        collection.add("itemA");
        assertEquals(1, collection.size());
    }


    public static void main(String args[]) {
        org.junit.runner.JUnitCore.main("il.co.codeguru.SimpleTest");
    }
}