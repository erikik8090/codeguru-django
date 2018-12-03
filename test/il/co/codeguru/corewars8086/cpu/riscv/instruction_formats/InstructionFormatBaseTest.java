package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

import il.co.codeguru.corewars8086.utils.Logger;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class InstructionFormatBaseTest {

    @Before
    public void setUp()
    {
        Logger.setTestingMode();
    }


    @Test
    public void testBase() {
        InstructionFormatBase a = new InstructionFormatBase(0);
        assertEquals(0, a.getOpcode());

        a = new InstructionFormatBase((short) 0x123456);
        assertEquals(86, a.getOpcode());
    }

    @Test
    public void testInstructionI() {
        InstructionFormatI a = new InstructionFormatI(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getFunct3());
        assertEquals(0, a.getRs1());
        assertEquals(0, a.getImmediate());

        // '0b1 00100 011 01000 1010110'

        a = new InstructionFormatI(0x123456);
        assertEquals(86, a.getOpcode());
        assertEquals(8, a.getRd());
        assertEquals(3, a.getFunct3());
        assertEquals(4, a.getRs1());
        assertEquals(1, a.getImmediate());
    }

    @Test
    public void testInstructionIConstructor() {
        InstructionFormatI a = new InstructionFormatI((byte) 0, (byte) 0, (byte) 0, (byte) 0, (byte) 0);
        assertEquals(0, a.getRaw());

        a = new InstructionFormatI(86, 8, 3, 4, 1);
        assertEquals(0x123456, a.getRaw());

        a = new InstructionFormatI(-1, -1, -1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionU() {
        InstructionFormatU a = new InstructionFormatU(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getImmediate());

        a = new InstructionFormatU(0x123456);
        assertEquals(86, a.getOpcode());
        assertEquals(8, a.getRd());
        assertEquals(291, a.getImmediate());
    }

    @Test
    public void testInstructionUConstructor() {
        InstructionFormatU a = new InstructionFormatU((byte) 0, (byte) 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionFormatU(86, 8, 291);
        assertEquals(0x123456, a.getRaw());

        a = new InstructionFormatU(-1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionR() {
        InstructionFormatR a = new InstructionFormatR(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getFunct3());
        assertEquals(0, a.getRs1());
        assertEquals(0, a.getRs2());
        assertEquals(0, a.getFunct7());

        a = new InstructionFormatR(0x123456);
        assertEquals(86, a.getOpcode());
        assertEquals(8, a.getRd());
        assertEquals(3, a.getFunct3());
        assertEquals(4, a.getRs1());
        assertEquals(1, a.getRs2());
        assertEquals(0, a.getFunct7());
    }

    @Test
    public void testInstructionRConstructor() {
        InstructionFormatR a = new InstructionFormatR((byte) 0, (byte) 0, 0, 0, 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionFormatR(86, 8, 3, 4, 1, 0);
        assertEquals(0x123456, a.getRaw());

        a = new InstructionFormatR(-1, -1, -1, -1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionS() {
        InstructionFormatS a = new InstructionFormatS(0);
        assertEquals(0, a.getFunct3());
        assertEquals(0, a.getRs1());
        assertEquals(0, a.getRs2());
        assertEquals(0, a.getImm());

        a = new InstructionFormatS(0x0020A023);
        assertEquals(35, a.getOpcode());
        assertEquals(2, a.getFunct3());
        assertEquals(1, a.getRs1());
        assertEquals(2, a.getRs2());
        assertEquals(0, a.getImm());
    }

    @Test
    public void testInstructionSConstructor() {
        InstructionFormatS a = new InstructionFormatS((byte) 0, (byte) 0, 0, 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionFormatS(35, 2, 1, 2, 0);
        assertEquals(0x0020A023, a.getRaw());

        a = new InstructionFormatS(-1, -1, -1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

    @Test
    public void testInstructionUJ() {
        InstructionFormatUJ a = new InstructionFormatUJ(0);
        assertEquals(0, a.getRd());
        assertEquals(0, a.getImmediate());

        a = new InstructionFormatUJ(0xff9ff06f);
        assertEquals(0x6f, a.getOpcode());
        assertEquals(0, a.getRd());
        assertEquals(-8, a.getImmediate());

        a = new InstructionFormatUJ(0x004004ef);
        assertEquals(0x6f, a.getOpcode());
        assertEquals(9, a.getRd());
        assertEquals(4, a.getImmediate());
    }

    @Test
    public void testInstructionUJConstructor()
    {
        InstructionFormatUJ a = new InstructionFormatUJ((byte) 0, (byte) 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionFormatUJ(0x6f, 0, -8);
        assertEquals(0xff9ff06f, a.getRaw());

        a = new InstructionFormatUJ(0x6f, 9, 4);
        assertEquals(0x004004ef, a.getRaw());
    }

    @Test
    public void testInstructionSB() {
        InstructionFormatS a = new InstructionFormatS(0);
        assertEquals(0, a.getFunct3());
        assertEquals(0, a.getRs1());
        assertEquals(0, a.getRs2());
        assertEquals(0, a.getImm());

        a = new InstructionFormatS( 0x00308063);
        assertEquals(99, a.getOpcode());
        assertEquals(0, a.getFunct3());
        assertEquals(1, a.getRs1());
        assertEquals(3, a.getRs2());
        assertEquals(0, a.getImm());
    }

    @Test
    public void testInstructionSBConstructor() {
        InstructionFormatS a = new InstructionFormatS((byte) 0, (byte) 0, 0, 0, 0);
        assertEquals(0, a.getRaw());

        a = new InstructionFormatS(99, 0, 1, 3, 0);
        assertEquals( 0x00308063, a.getRaw());

        a = new InstructionFormatS(-1, -1, -1, -1, -1);
        assertEquals(0xFFFFFFFF, a.getRaw());
    }

}
