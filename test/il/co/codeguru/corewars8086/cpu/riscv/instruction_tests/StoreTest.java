package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;
import junitparams.converters.Param;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.assertEquals;

@RunWith(JUnitParamsRunner.class)
public class StoreTest {
    private static final int RS1 = 1;
    private static final int RS2 = 2;
    private static final int VAL = 5;

    private CpuStateRiscV state;
    private RealModeMemory memory;
    private CpuRiscV cpu;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        memory = new RealModeMemoryImpl();
        cpu = new CpuRiscV(state, memory);
        state.setPc(0x100);
        Logger.setTestingMode();
    }

    private void loadInstruction(InstructionFormatBase i) throws MemoryException {
        cpu.getMemory().write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) state.getPc()), i.getRaw());
    }

    @Test
    @Parameters({
            "12, 0, 12",
            "12,15, 27",
            "12,-7, 5"
    })
    public void testSw(int reg, int imm, int expectedAddress) throws MemoryException, CpuException {
        state.setReg(RS1, reg);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sw, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress)));
    }

    @Test
    @Parameters({
            "12, 0, 12",
            "12,15, 27",
            "12,-7, 5"
    })
    public void testSh(int reg, int imm, int expectedAddress) throws MemoryException, CpuException {
        state.setReg(RS1, reg);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sh, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress)));
    }

    @Test
    @Parameters({
            "12, 0, 12",
            "12,15, 27",
            "12,-7, 5"
    })
    public void testSb(int reg, int imm, int expectedAddress) throws MemoryException, CpuException {
        state.setReg(RS1, reg);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sb, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress)));
    }
}
