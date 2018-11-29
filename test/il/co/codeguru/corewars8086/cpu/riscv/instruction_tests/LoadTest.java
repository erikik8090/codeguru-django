package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
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
    private InstructionRunner runner;
    private RealModeMemory memory;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        memory = new RealModeMemoryImpl();
        runner = new InstructionRunner(new CpuRiscV(state, memory));
        Logger.setTestingMode();

    }

    @Test
    public void testLw() throws MemoryException
    {
        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), VAL);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 0);
        runner.lw(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)15), VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 0);
        runner.lw(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)35), VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 20);
        runner.lw(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), -1);
        i = RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, 0);
        runner.lw(i);
        assertEquals(-1, state.getReg(RD));
    }

    @Test
    public void testLh() throws MemoryException
    {
        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)VAL);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 0);
        runner.lh(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)15), (short)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 0);
        runner.lh(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)35), (short)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 20);
        runner.lh(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)(-1));
        i = RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, 0);
        runner.lh(i);
        assertEquals(-1, state.getReg(RD));
    }

    @Test
    public void testLhu() throws MemoryException
    {
        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)VAL);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 0);
        runner.lhu(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)15), (short)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 0);
        runner.lhu(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)35), (short)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 20);
        runner.lhu(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)(-1));
        i = RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 0);
        runner.lhu(i);
        assertNotEquals(-1, state.getReg(RD));
    }

    @Test
    public void testlb() throws MemoryException
    {
        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)VAL);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 0);
        runner.lb(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)15), (byte)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 0);
        runner.lb(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)35), (byte)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 20);
        runner.lb(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)(-1));
        i = RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, 0);
        runner.lb(i);
        assertEquals(-1, state.getReg(RD));
    }

    @Test
    public void testlbu() throws MemoryException
    {
        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)VAL);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 0);
        runner.lbu(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)15), (byte)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 0);
        runner.lbu(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 15);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)35), (byte)VAL);
        i = RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 20);
        runner.lbu(i);
        assertEquals(VAL, state.getReg(RD));

        state.setReg(RS1, 0);
        state.setReg(RD,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)(-1));
        i = RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 0);
        runner.lbu(i);
        assertNotEquals(-1, state.getReg(RD));
    }
}
