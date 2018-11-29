package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;

@RunWith(JUnitParamsRunner.class)
public class ImmediateTest {
    private static final int RS1 = 1;
    private static final int RD  = 3;

    private CpuStateRiscV state;
    private InstructionRunner runner;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        RealModeMemory memory = new RealModeMemoryImpl();
        runner = new InstructionRunner(new CpuRiscV(state, memory));
        Logger.setTestingMode();
    }


    @Test
    @Parameters({
            " 0, 10, 10",
            " 5,  5, 10",
            " 5, -1,  4",
            " 0, -1, -1",
            "-1, -1, -2",
            ""+ Integer.MAX_VALUE + ", 1, " + Integer.MIN_VALUE
    })
    public void testAddi(int reg, int imm, int expected)
    {
        state.setReg(RS1, reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Addi, RD, RS1, imm);
        runner.addi(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            "5, 6, 4",
            "5, 5, 5",
            "5, 0, 0",
            "5, -1, 5"
    })
    public void testAndi(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Andi, RD, RS1, imm);
        runner.andi(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            "1, 2, 3",
            "5, 4, 5",
            "5, 0, 5",
            "5, -1, -1"

    })
    public void testOri(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Ori, RD, RS1, imm);
        runner.ori(i);
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
    public void testXori(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Xori, RD, RS1, imm);
        runner.xori(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 1, 2,  4",
            " 3, 2, 12",
            "-1, 2, -4",
            "" + Integer.MIN_VALUE + ", 1, 0"
    })
    public void testSlli(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Slli, RD, RS1, imm);
        runner.slli(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, " + Integer.MAX_VALUE
    })
    public void testSrli(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Srli, RD, RS1, imm);
        runner.srli(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, -1"
    })
    public void testSrai(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Srai, RD, RS1, imm);
        runner.srai(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 1",
            "1,-1, 0",
    })
    public void testSlti(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Slti, RD, RS1, imm);
        runner.slti(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 0",
            "1,-1, 1",

    })
    public void testSltiu(int reg, int imm, int expected)
    {
        state.setReg(RS1,reg);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Sltiu, RD, RS1, imm);
        runner.sltiu(i);
        assertEquals(expected, state.getReg(RD));
    }
}
