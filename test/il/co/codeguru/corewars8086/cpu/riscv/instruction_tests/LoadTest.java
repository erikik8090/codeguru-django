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
import org.junit.Before;
import org.junit.Test;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

public class LoadTest {
    private static final int RS1 = 1;
    private static final int RD = 2;
    private static final int VAL = 17;

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

    private void loadInstruction(InstructionBase i) throws MemoryException {
        cpu.getMemory().write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) state.getPc()), i.getRaw());
    }

    @Test
    public void testLw() throws MemoryException, CpuException {
        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 15), VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 35), VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 20));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), -1);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(-1, state.getReg(RD));
    }

    @Test
    public void testLh() throws MemoryException, CpuException {
        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), (short) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 15), (short) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 35), (short) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 20));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), (short) (-1));
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(-1, state.getReg(RD));
    }

    @Test
    public void testLhu() throws MemoryException, CpuException {
        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), (short) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 15), (short) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 35), (short) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 20));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), (short) (-1));
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 0));
        cpu.nextOpcode();
        assertNotEquals(-1, state.getReg(RD));
    }

    @Test
    public void testlb() throws MemoryException, CpuException {
        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 0), (byte) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 15), (byte) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 35), (byte) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 20));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 0), (byte) (-1));
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(-1, state.getReg(RD));
    }

    @Test
    public void testlbu() throws MemoryException, CpuException {
        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 0), (byte) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 15), (byte) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 35), (byte) VAL);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 20));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) 0), (byte) (-1));
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 0));
        cpu.nextOpcode();
        assertNotEquals(-1, state.getReg(RD));
    }
}
