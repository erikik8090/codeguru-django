package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
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

@RunWith(JUnitParamsRunner.class)
public class JumpTest {
    private static final int ZERO = 0;
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

    private void loadInstruction(InstructionFormatBase i) throws MemoryException {
        cpu.getMemory().write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) state.getPc()), i.getRaw());
    }

    @Test
    public void testJ() throws MemoryException, CpuException {
        state.setPc(0);
        loadInstruction(RV32I.instructionUJ(RV32I.Opcodes.Jal, ZERO, 4));
        cpu.nextOpcode();
        assertEquals(4, state.getPc());
    }

    @Test
    public void testJal() throws MemoryException, CpuException {
        state.setPc(12);
        loadInstruction(RV32I.instructionUJ(RV32I.Opcodes.Jal, RD, -8));
        cpu.nextOpcode();
        assertEquals(4, state.getPc());
        assertEquals(16, state.getReg(RD));
    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testJalMisalignedAddress() throws MemoryException, CpuException {
        state.setPc(24);
        loadInstruction(RV32I.instructionUJ(RV32I.Opcodes.Jal, RD, 14));
        cpu.nextOpcode();
    }

    @Test
    @Parameters({
            " 0, 8, 0, 8, 4",
            "12,-8, 0, 4,16",
            "12,-8,16,20,16"
    })
    public void testJalr(int initialPc, int reg, int imm, int expectedPc, int expectedReg) throws MemoryException, CpuException {
        state.setReg(RS1, reg);
        state.setPc(initialPc);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, imm));
        cpu.nextOpcode();
        assertEquals(expectedPc, state.getPc());
        assertEquals(expectedReg, state.getReg(RD));
    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testJalrMisalignedAddress() throws MemoryException, CpuException {
        state.setReg(RS1, 14);
        state.setPc(24);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 0));
        cpu.nextOpcode();
    }

    @Test
    public void testBeqAsJ() throws MemoryException, CpuException {
        state.setPc(0);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, ZERO, ZERO, 8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());
    }

    @Test
    @Parameters({
            "5, 5, 16, -8, 8",
            "5, 6, 16, -8,20",
            "6, 5, 16, -8,20"
    })
    public void testBeq(int rs1, int rs2, int pc, int imm, int expected) throws MemoryException, CpuException {
        state.setPc(pc);
        state.setReg(RS1, rs1);
        state.setReg(RS2, rs2);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getPc());

    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testBeqMisalignedAddressTakenBranch() throws MemoryException, CpuException {
        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, ZERO, ZERO, 14));
        cpu.nextOpcode();
    }

    @Test
    @Parameters({
            "5, 5, 16, -8, 20",
            "5, 6, 16, -8,  8",
            "6, 5, 16, -8,  8"
    })
    public void testBne(int rs1, int rs2, int pc, int imm, int expected) throws MemoryException, CpuException {
        state.setPc(pc);
        state.setReg(RS1, rs1);
        state.setReg(RS2, rs2);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getPc());
    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testBneMisalignedAddressBranchTaken() throws MemoryException, CpuException {
        state.setPc(24);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, 14));
        cpu.nextOpcode();
    }

    @Test
    @Parameters({
            "5, 5, 16, -8, 20",
            "5, 6, 16, -8, 8",
            "6, 6, 16, -8, 20",
            "-1,1, 16, -8, 8",
            "1,-1, 16, -8, 20"
    })
    public void testBlt(int rs1, int rs2, int pc, int imm, int expected) throws MemoryException, CpuException {
        state.setPc(pc);
        state.setReg(RS1, rs1);
        state.setReg(RS2, rs2);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getPc());
    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testBltMisalignedAddress() throws MemoryException, CpuException {
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, 14));
        cpu.nextOpcode();
    }

    @Test
    @Parameters({
            "5, 5, 16, -8, 20",
            "5, 6, 16, -8, 8",
            "6, 6, 16, -8, 20",
            "-1,1, 16, -8, 20",
            "1,-1, 16, -8, 8"
    })
    public void testBltu(int rs1, int rs2, int pc, int imm, int expected) throws MemoryException, CpuException {
        state.setPc(pc);
        state.setReg(RS1, rs1);
        state.setReg(RS2, rs2);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getPc());
    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testBltuMisalignedAddressBranchTaken() throws MemoryException, CpuException {
        state.setPc(24);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, 14));
        cpu.nextOpcode();
    }

    @Test
    @Parameters({
            "5, 5, 16, -8, 8",
            "5, 6, 16, -8, 20",
            "6, 6, 16, -8, 8",
            "-1,1, 16, -8, 20",
            "1,-1, 16, -8, 8"
    })
    public void testBge(int rs1, int rs2, int pc, int imm, int expected) throws MemoryException, CpuException {
        state.setPc(pc);
        state.setReg(RS1, rs1);
        state.setReg(RS2, rs2);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getPc());
    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testBgeMisalignedAddressBranchTaken() throws MemoryException, CpuException {
        state.setReg(RS1, 5);
        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, 14));
        cpu.nextOpcode();
    }

    @Test
    @Parameters({
            "5, 5, 16, -8, 8",
            "5, 6, 16, -8, 20",
            "6, 6, 16, -8, 8",
            "-1,1, 16, -8, 8",
            "1,-1, 16, -8, 20"
    })
    public void testBgeu(int rs1, int rs2, int pc, int imm, int expected) throws MemoryException, CpuException {
        state.setPc(pc);
        state.setReg(RS1, rs1);
        state.setReg(RS2, rs2);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getPc());
    }

    @Test(expected = MisalignedMemoryLoadException.class)
    public void testBgeuMisalignedAddress() throws MemoryException, CpuException {
        state.setReg(RS1, 5);
        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, ZERO, ZERO, 14));
        cpu.nextOpcode();
    }
}
