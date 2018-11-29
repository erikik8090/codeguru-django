package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;

@RunWith(JUnitParamsRunner.class)
public class UTest {
    private CpuStateRiscV state;
    private InstructionRunner runner;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        RealModeMemory memory = new RealModeMemoryImpl();
        runner = new InstructionRunner(new CpuRiscV(state, memory));
        Logger.setTestingMode();

    }

    private static final int RD  = 3;

    @Test
    @Parameters({
            " 0, 10, 40960",
            " 5,  5,  20485",
            " 5, -1, -4091",
            " 0, -1, -4096",
            "-1, -1, -1",
            "-1,  0, 4095"
    })
    public void testLui(int reg, int imm, int expected)
    {
        state.setReg(RD,reg);
        InstructionU i = RV32I.instructionU(RV32I.Opcodes.Lui, RD, imm);
        runner.lui(i);
        assertEquals(expected, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 0, 10, 40960",
            " 5,  5,  20485",
            " 5, -1, -4091",
            " 0, -1, -4096",
            "-1, -1, -4097",
            "-1,  0, -1"
    })
    public void testAuipc(int pc, int imm, int expected)
    {
        state.setPc(pc);
        InstructionU i = RV32I.instructionU(RV32I.Opcodes.Auipc, RD, imm);
        runner.auipc(i);
        assertEquals(expected, state.getReg(RD));
    }






}
