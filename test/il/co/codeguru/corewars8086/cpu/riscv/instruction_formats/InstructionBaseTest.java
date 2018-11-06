package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

import org.junit.Test;

import static org.junit.Assert.*;

public class InstructionBaseTest {
    @Test
    public void testBase()
    {
        InstructionBase a = new InstructionBase(    0);
        assertEquals(0,a.getOpcode());

        a = new InstructionBase((short) 0x123456);
        assertEquals(86, a.getOpcode());
    }

    @Test
    public void testInstructionI()
    {
        InstructionI a = new InstructionI(0);
        assertEquals(0,a.getRd());
        assertEquals(0,a.getFunct3());
        assertEquals(0,a.getRs1());
        assertEquals(0,a.getImmediate());

        // '0b1 00100 011 01000 1010110'

        a = new InstructionI(0x123456);
        assertEquals(86, a.getOpcode());
        assertEquals(8,a.getRd());
        assertEquals(3,a.getFunct3());
        assertEquals(4,a.getRs1());
        assertEquals(1,a.getImmediate());
    }

    @Test
    public void testInstructionIConstructor()
    {
        InstructionI a = new InstructionI((byte)0,(byte)0,(byte)0,(byte)0,(byte)0);
        assertEquals(0,a.getRaw());

        a = new InstructionI(86, 8, 3, 4, 1);
        assertEquals(0x123456, a.getRaw());

        a = new InstructionI(-1,-1,-1,-1,-1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }
}
