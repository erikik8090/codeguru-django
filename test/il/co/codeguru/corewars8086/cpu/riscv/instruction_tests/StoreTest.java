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
import org.junit.Before;
import org.junit.Test;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.assertEquals;


public class StoreTest {
    private static final int ZERO = 0;
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
    public void testSw() throws MemoryException, CpuException {
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sw, ZERO, RS2, 0));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0)));

        state.setReg(RS1, 12);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sw, RS1, RS2, 0));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 12)));

        state.setReg(RS1, 12);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sw, RS1, RS2, 15));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 27)));

        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sw, ZERO, ZERO, 0));
        cpu.nextOpcode();
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0)));
    }

    @Test
    public void testSh() throws MemoryException, CpuException {
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sh, ZERO, RS2, 0));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0)));

        state.setReg(RS1, 12);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sh, RS1, RS2, 0));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 12)));

        state.setReg(RS1, 12);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sh, RS1, RS2, 15));
        cpu.nextOpcode();
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 27)));

        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sh, ZERO, ZERO, 0));
        cpu.nextOpcode();
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0)));
    }

    @Test
    public void testSb() throws MemoryException, CpuException {
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sb, ZERO, RS2, 0));
        cpu.nextOpcode();
        assertEquals(VAL, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short) 0)));

        state.setReg(RS1, 12);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sb, RS1, RS2, 0));
        cpu.nextOpcode();
        assertEquals(VAL, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short) 12)));

        state.setReg(RS1, 12);
        state.setReg(RS2, VAL);
        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sb, RS1, RS2, 15));
        cpu.nextOpcode();
        assertEquals(VAL, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short) 27)));

        loadInstruction(RV32I.instructionS(RV32I.Opcodes.Sb, ZERO, ZERO, 0));
        cpu.nextOpcode();
        assertEquals(0, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short) 0)));
    }
}
