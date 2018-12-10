package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCI;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCIW;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCR;
import static org.junit.Assert.*;

import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCSS;
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

    @Test
    public void testCss()
    {
        CInstructionFormatCSS css = new CInstructionFormatCSS((short)0);
        assertEquals(0, css.getRs2());
        assertEquals(0, css.getImmediate());
        assertEquals(0,css.getFunct3());

        css = new CInstructionFormatCSS((short)0xCA16); //c.swsp x5, 20(x2)
        assertEquals(2,css.getOpcode());
        assertEquals(5, css.getRs2());
        assertEquals(6, css.getFunct3());
        assertEquals(20, css.getImmediate());
    }

    @Test
    public void testCssConstructor()
    {
        CInstructionFormatCSS css = new CInstructionFormatCSS((byte)0,(byte)0,(byte)0,(byte)0);
        assertEquals((short)0, css.getRaw());

        css = new CInstructionFormatCSS((byte)2, (byte)6, (byte)5, (byte)20);
        assertEquals((short)0xCA16, css.getRaw());
    }

    @Test
    public void testCiw()
    {
        CInstructionFormatCIW ciw = new CInstructionFormatCIW((short)0);
        assertEquals(8, ciw.getRd());
        assertEquals(0, ciw.getImmediate());
        assertEquals(0,ciw.getFunct3());

        ciw = new CInstructionFormatCIW((short)0x1004); //c.addi4spn x9, x2, 0x20
        assertEquals(0,ciw.getOpcode());
        assertEquals(9, ciw.getRd());
        assertEquals(0, ciw.getFunct3());
        assertEquals(0x80, ciw.getImmediate() & 0xFF);
    }

    @Test
    public void testCiwConstructor()
    {
        CInstructionFormatCIW ciw = new CInstructionFormatCIW((byte)0, (byte)0, (byte)9, (byte)0x80);
        assertEquals((short)0x1004, ciw.getRaw());
    }

}
