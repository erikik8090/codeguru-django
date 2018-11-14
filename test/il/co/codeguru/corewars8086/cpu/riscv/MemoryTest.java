package il.co.codeguru.corewars8086.cpu.riscv;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class MemoryTest {

    private Memory memory;

    @Before
    public void setUp()
    {
        memory = new Memory(1024);
    }


    @Test
    public void loadByteTest()
    {
        memory.storeByte(0, (byte)0x12);
        assertEquals(0x12, memory.loadByte(0));
    }

    @Test
    public void loadHalfWordTest()
    {
        memory.storeHalfWord(0, (short)0x1234);
        assertEquals(0x1234, memory.loadHalfWord(0));
        assertEquals(0x12, memory.loadByte(1));
        assertEquals(0x34, memory.loadByte(0));
    }

    @Test
    public void loadWordTest()
    {
        memory.storeWord(0, 0x12345678);
        assertEquals(0x12345678, memory.loadWord(0));
        assertEquals(0x1234, memory.loadHalfWord(2));
        assertEquals(0x5678, memory.loadHalfWord(0));
        assertEquals(0x3456, memory.loadHalfWord(1));
    }

    @Test
    public void loadDoubleWordTest()
    {
        memory.storeDoubleWord(0, 0x1234567812345678L);
        assertEquals(0x1234567812345678L, memory.loadDoubleWord(0));
        assertEquals(0x12345678, memory.loadWord(0));
        assertEquals(0x56781234, memory.loadWord(2));
        assertEquals(0x12345678, memory.loadWord(4));
    }

}
