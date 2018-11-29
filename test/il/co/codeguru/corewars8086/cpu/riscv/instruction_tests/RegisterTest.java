package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.assertEquals;

@RunWith(JUnitParamsRunner.class)
public class RegisterTest {
    private static final int RS1 = 1;
    private static final int RS2 = 2;
    private static final int RD = 3;

    private CpuStateRiscV state;
    private CpuRiscV cpu;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        RealModeMemory memory = new RealModeMemoryImpl();
        cpu = new CpuRiscV(state, memory);
        Logger.setTestingMode();
    }

    private void loadInstruction(InstructionBase i) throws MemoryException {
        cpu.getMemory().write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) state.getPc()), i.getRaw());
    }

    @Test
    @Parameters({
            " 0, 10, 10",
            " 5,  5, 10",
            " 5, -1,  4",
            " 0, -1, -1",
            "-1, -1, -2",
            "" + Integer.MAX_VALUE + ", 1," + Integer.MIN_VALUE
    })
    public void testAdd(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Add, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 10, 0, 10",
            " 10,  5, 5",
            " 4, -1,  5",
            " 1, 2, -1",
            "-1, -1, 0",
            "" + Integer.MIN_VALUE + ", 1, " + Integer.MAX_VALUE
    })
    public void testSub(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        Logger.log("here");
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Sub, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            "5, 6, 4",
            "5, 5, 5",
            "5, 0, 0",
            "5, -1, 5"
    })
    public void testAnd(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.And, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            "1, 2, 3",
            "5, 4, 5",
            "5, 0, 5",
            "5, -1, -1"
    })
    public void testOr(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Or, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            " 1,  2,  3",
            " 3, 10,  9",
            " 3, -1, -4",
            "-4, -1,  3",
            " 5,  0,  5"
    })
    public void testXor(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Xor, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            " 1, 2,  4",
            " 3, 2, 12",
            "-1, 2, -4",
            "" + Integer.MIN_VALUE + ", 1, 0"
    })
    public void testSll(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Sll, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, " + Integer.MAX_VALUE,
            "-2, 1, " + Integer.MAX_VALUE,
    })
    public void testSrl(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Srl, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, -1",
            "-2, 1, -1"
    })
    public void testSra(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Sra, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 1",
            "1,-1, 0",

    })
    public void testSlt(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Slt, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }


    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 0",
            "1,-1, 1",

    })
    public void testSltu(int reg1, int reg2, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg1);
        state.setReg(RS2, reg2);
        loadInstruction(RV32I.instructionR(RV32I.Opcodes.Sltu, RD, RS1, RS2));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RD));
    }

}
