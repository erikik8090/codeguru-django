package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionS;
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
    public void testSw() throws MemoryException
    {
        state.setReg(RS2,VAL);
        InstructionS i = RV32I.instructionS(RV32I.Opcodes.Sw, ZERO, RS2, 0);
        runner.sw(i);
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));

        state.setReg(RS1,12);
        state.setReg(RS2, VAL);
        i = RV32I.instructionS(RV32I.Opcodes.Sw, RS1, RS2, 0);
        runner.sw(i);
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)12)));

        state.setReg(RS1,12);
        state.setReg(RS2, VAL);
        i = RV32I.instructionS(RV32I.Opcodes.Sw, RS1, RS2, 15);
        runner.sw(i);
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)27)));

        i = RV32I.instructionS(RV32I.Opcodes.Sw, ZERO, ZERO, 0);
        runner.sw(i);
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));
    }

    @Test
    public void testSh() throws MemoryException
    {
        state.setReg(RS2,VAL);
        InstructionS i = RV32I.instructionS(RV32I.Opcodes.Sh, ZERO, RS2, 0);
        runner.sh(i);
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));

        state.setReg(RS1,12);
        state.setReg(RS2, VAL);
        i = RV32I.instructionS(RV32I.Opcodes.Sh, RS1, RS2, 0);
        runner.sh(i);
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)12)));

        state.setReg(RS1,12);
        state.setReg(RS2, VAL);
        i = RV32I.instructionS(RV32I.Opcodes.Sh, RS1, RS2, 15);
        runner.sh(i);
        assertEquals(VAL, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)27)));

        i = RV32I.instructionS(RV32I.Opcodes.Sh, ZERO, ZERO, 0);
        runner.sh(i);
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));
    }

    @Test
    public void testSb() throws MemoryException
    {
        state.setReg(RS2,VAL);
        InstructionS i = RV32I.instructionS(RV32I.Opcodes.Sh, ZERO, RS2, 0);
        runner.sb(i);
        assertEquals(VAL, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short)0)));

        state.setReg(RS1,12);
        state.setReg(RS2, VAL);
        i = RV32I.instructionS(RV32I.Opcodes.Sh, RS1, RS2, 0);
        runner.sb(i);
        assertEquals(VAL, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short)12)));

        state.setReg(RS1,12);
        state.setReg(RS2, VAL);
        i = RV32I.instructionS(RV32I.Opcodes.Sh, RS1, RS2, 15);
        runner.sb(i);
        assertEquals(VAL, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short)27)));

        i = RV32I.instructionS(RV32I.Opcodes.Sh, ZERO, ZERO, 0);
        runner.sb(i);
        assertEquals(0, memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short)0)));
    }
}
