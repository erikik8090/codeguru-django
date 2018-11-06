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
        assertEquals(22, a.getOpcode());
    }

    @Test
    public void testInstructionI()
    {
        InstructionI a = new InstructionI(0);
        assertEquals(0,a.getRd());
        assertEquals(0,a.getFunct3());
        assertEquals(0,a.getRs1());
        assertEquals(0,a.getImmediate());

        a = new InstructionI(0x123456);
        assertEquals(22, a.getOpcode());
        assertEquals(17,a.getRd());
        assertEquals(6,a.getFunct3());
        assertEquals(8,a.getRs1());
        assertEquals(2,a.getImmediate());
    }

    @Test
    public void testInstructionIConstructor()
    {
        InstructionI a = new InstructionI((byte)0,(byte)0,(byte)0,(byte)0,(byte)0);
        assertEquals(0,a.getRaw());

        a = new InstructionI(22, 17, 6, 8, 2);
        assertEquals(0x123456, a.getRaw());
    }
}
