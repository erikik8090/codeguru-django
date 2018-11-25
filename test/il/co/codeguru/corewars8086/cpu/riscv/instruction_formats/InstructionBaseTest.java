package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

import org.junit.Test;

import static org.junit.Assert.*;

public class InstructionBaseTest {
    @Test
    public void testBase() {
        InstructionBase a = new InstructionBase(0);
        assertEquals(0, a.getOpcode());

        a = new InstructionBase((short) 0x123456);
        assertEquals(86, a.getOpcode());
    }

    @Test
    public void testInstructionI() {
        InstructionI a = new InstructionI(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getFunct3());
        assertEquals(0, a.getRs1());
        assertEquals(0, a.getImmediate());

        // '0b1 00100 011 01000 1010110'

        a = new InstructionI(0x123456);
        assertEquals(86, a.getOpcode());
        assertEquals(8, a.getRd());
        assertEquals(3, a.getFunct3());
        assertEquals(4, a.getRs1());
        assertEquals(1, a.getImmediate());
    }

    @Test
    public void testInstructionIConstructor() {
        InstructionI a = new InstructionI((byte) 0, (byte) 0, (byte) 0, (byte) 0, (byte) 0);
        assertEquals(0, a.getRaw());

        a = new InstructionI(86, 8, 3, 4, 1);
        assertEquals(0x123456, a.getRaw());

        a = new InstructionI(-1, -1, -1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionU() {
        InstructionU a = new InstructionU(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getImmediate());

        a = new InstructionU(0x123456);
        assertEquals(86, a.getOpcode());
        assertEquals(8, a.getRd());
        assertEquals(291, a.getImmediate());
    }

    @Test
    public void testInstructionUConstructor() {
        InstructionU a = new InstructionU((byte) 0, (byte) 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionU(86, 8, 291);
        assertEquals(0x123456, a.getRaw());

        a = new InstructionU(-1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionR() {
        InstructionR a = new InstructionR(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getFunct3());
        assertEquals(0, a.getRs1());
        assertEquals(0, a.getRs2());
        assertEquals(0, a.getFunct7());

        a = new InstructionR(0x123456);
        assertEquals(86, a.getOpcode());
        assertEquals(8, a.getRd());
        assertEquals(3, a.getFunct3());
        assertEquals(4, a.getRs1());
        assertEquals(1, a.getRs2());
        assertEquals(0, a.getFunct7());
    }

    @Test
    public void testInstructionRConstructor() {
        InstructionR a = new InstructionR((byte) 0, (byte) 0, 0, 0, 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionR(86, 8, 3, 4, 1, 0);
        assertEquals(0x123456, a.getRaw());

        a = new InstructionR(-1, -1, -1, -1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionS() {
        InstructionS a = new InstructionS(0);
        assertEquals(0, a.getFunct3());
        assertEquals(0, a.getRs1());
        assertEquals(0, a.getRs2());
        assertEquals(0, a.getImm());

        a = new InstructionS(0x0020A023);
        assertEquals(35, a.getOpcode());
        assertEquals(2, a.getFunct3());
        assertEquals(1, a.getRs1());
        assertEquals(2, a.getRs2());
        assertEquals(0, a.getImm());
    }

    @Test
    public void testInstructionSConstructor() {
        InstructionS a = new InstructionS((byte) 0, (byte) 0, 0, 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionS(35, 2, 1, 2, 0);
        assertEquals(0x0020A023, a.getRaw());

        a = new InstructionS(-1, -1, -1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionUJ() {
        InstructionUJ a = new InstructionUJ(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getImmediate());

        a = new InstructionUJ(0xff9ff06f);
        assertEquals(0x6f, a.getOpcode());
        assertEquals(0, a.getRd());
        assertEquals(-8, a.getImmediate());

        a = new InstructionUJ(0x004004ef);
        assertEquals(0x6f, a.getOpcode());
        assertEquals(9, a.getRd());
        assertEquals(4, a.getImmediate());
    }

    @Test
    public void testInstructionUJConstructor()
    {
        InstructionUJ a = new InstructionUJ((byte) 0, (byte) 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionUJ(0x6f, 0, -8);
        assertEquals(0xff9ff06f, a.getRaw());

        a = new InstructionUJ(0x6f, 9, 4);
        assertEquals(0x004004ef, a.getRaw());
    }

}
