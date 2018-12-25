package il.co.codeguru.corewars8086.memory;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class RealModeMemoryImplTest {

    private RealModeMemory memory;

    @Before
    public void setUp()
    {
        memory = new RealModeMemoryImpl();
    }

    @Test
    public void testReadByte() throws MemoryException {
        memory.writeByte(new RealModeAddress((short)0,(short)0), (byte)0x12);
        assertEquals(0x12, memory.readByte(0));
    }

    @Test
    public void testRead16Bit() throws MemoryException {
        memory.write16Bit(new RealModeAddress((short)0,(short)0), (short)0x1234);
        assertEquals(0x1234, memory.read16Bit(new RealModeAddress((short)0,(short)0)));
        assertEquals(0x12, memory.readByte(1));
        assertEquals(0x34, memory.readByte(0));
    }

    @Test
    public void testRead32Bit() throws MemoryException {
        memory.write32Bit(new RealModeAddress((short)0,(short)0), 0x12345678);
        assertEquals(0x1234, memory.read16Bit(new RealModeAddress((short)0,(short)2)));
        assertEquals(0x5678, memory.read16Bit(new RealModeAddress((short)0,(short)0)));
        assertEquals(0x3456, memory.read16Bit(new RealModeAddress((short)0,(short)1)));
        assertEquals(0x12345678, memory.read32Bit(new RealModeAddress((short)0,(short)0)));

    }
}