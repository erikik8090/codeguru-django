package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCI;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCR;
import static org.junit.Assert.*;
import org.junit.Test;

public class InstructionFormatTest {
    @Test
    public void testCr()
    {
        CInstructionFormatCR cr = new CInstructionFormatCR((short)0);
        assertEquals(0, cr.getRs1());
        assertEquals(0, cr.getRs2());
        assertEquals(0,cr.getFunct4());

        cr = new CInstructionFormatCR((short)0x908a); //c.add x1, x2
        assertEquals(2,cr.getOpcode());
        assertEquals(1, cr.getRs1());
        assertEquals(2, cr.getRs2());
        assertEquals(4, cr.getFunct3());
        assertEquals(9, cr.getFunct4());
    }

    @Test
    public void testCrConstructor()
    {
        CInstructionFormatCR cr = new CInstructionFormatCR((byte)0,(byte)0,(byte)0,(byte)0);
        assertEquals((short)0, cr.getRaw());

        cr = new CInstructionFormatCR((byte)2, (byte)1, (byte)2, (byte)9);
        assertEquals((short)0x908a, cr.getRaw());
    }

    @Test
    public void testCi()
    {
        CInstructionFormatCI cr = new CInstructionFormatCI((short)0);
        assertEquals(0, cr.getRs1());
        assertEquals(0, cr.getImmediate());
        assertEquals(0,cr.getFunct3());

        cr = new CInstructionFormatCI((short)0x019D); //c.add x1, x2
        assertEquals(1,cr.getOpcode());
        assertEquals(3, cr.getRs1());
        assertEquals(0, cr.getFunct3());
        assertEquals(7, cr.getImmediate());
    }

    @Test
    public void testCiConstructor()
    {
        CInstructionFormatCI cr = new CInstructionFormatCI((byte)0,(byte)0,(byte)0,(byte)0);
        assertEquals((short)0, cr.getRaw());

        cr = new CInstructionFormatCI((byte)1, (byte)0, (byte)3, (byte)7);
        assertEquals((short)0x19D, cr.getRaw());
    }

}
