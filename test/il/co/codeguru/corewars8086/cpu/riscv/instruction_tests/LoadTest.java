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
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

@RunWith(JUnitParamsRunner.class)
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
        //To not interrupt the 0 memory location
        state.setPc(0x100);
        Logger.setTestingMode();

    }

    private void loadInstruction(InstructionFormatBase i) throws MemoryException {
        cpu.getMemory().write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) state.getPc()), i.getRaw());
    }

    @Test
    @Parameters({
            " 0, 0,  0, 17",
            "15, 0, 15, 17",
            "15,20, 35, 17",
            "15,-5, 10, 17",
            " 0, 0,  0, -1"
    })
    public void testLw(int rs1, int imm, int expectedAddress, int val) throws MemoryException, CpuException {
        state.setReg(RS1, rs1);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress), val);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lw, RD, RS1, imm));
        cpu.nextOpcode();
        assertEquals(val, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 0, 0,  0, 17",
            "15, 0, 15, 17",
            "15,20, 35, 17",
            "15,-5, 10, 17",
            " 0, 0,  0, -1"
    })
    public void testLh(int rs1, int imm, int expectedAddress, int val) throws MemoryException, CpuException {
        state.setReg(RS1, rs1);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress), val);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lh, RD, RS1, imm));
        cpu.nextOpcode();
        assertEquals(val, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 0, 0,  0, 17",
            "15, 0, 15, 17",
            "15,20, 35, 17",
            "15,-5, 10, 17",
    })
    public void testLhu(int rs1, int imm, int expectedAddress, int val) throws MemoryException, CpuException {
        state.setReg(RS1, rs1);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress), val);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, imm));
        cpu.nextOpcode();
        assertEquals(val, state.getReg(RD));
    }

    @Test
    public void testLhuNegativeValue() throws MemoryException, CpuException {
        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), (short) (-1));
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lhu, RD, RS1, 0));
        cpu.nextOpcode();
        assertNotEquals(-1, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 0, 0,  0, 17",
            "15, 0, 15, 17",
            "15,20, 35, 17",
            "15,-5, 10, 17",
            " 0, 0,  0, -1"
    })
    public void testLb(int rs1, int imm, int expectedAddress, int val) throws MemoryException, CpuException {
        state.setReg(RS1, rs1);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress), val);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lb, RD, RS1, imm));
        cpu.nextOpcode();
        assertEquals(val, state.getReg(RD));
    }

    @Test
    @Parameters({
            " 0, 0,  0, 17",
            "15, 0, 15, 17",
            "15,20, 35, 17",
            "15,-5, 10, 17",
    })
    public void testLbu(int rs1, int imm, int expectedAddress, int val) throws MemoryException, CpuException {
        state.setReg(RS1, rs1);
        state.setReg(RD, 0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) expectedAddress), val);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, imm));
        cpu.nextOpcode();
        assertEquals(val, state.getReg(RD));
    }

    @Test
    public void testLbuNegativeValue() throws MemoryException, CpuException {
        state.setReg(RS1, 0);
        state.setReg(RD, 0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) 0), (short) (-1));
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Lbu, RD, RS1, 0));
        cpu.nextOpcode();
        assertNotEquals(-1, state.getReg(RD));
    }
}
