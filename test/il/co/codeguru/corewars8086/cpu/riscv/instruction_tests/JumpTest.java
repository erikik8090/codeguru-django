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
import org.junit.Before;
import org.junit.Test;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

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
    public void testJal() throws MemoryException, CpuException {
        //J
        state.setPc(0);
        loadInstruction(RV32I.instructionUJ(RV32I.Opcodes.Jal, ZERO, 4));
        cpu.nextOpcode();
        assertEquals(4, state.getPc());

        state.setPc(12);
        loadInstruction(RV32I.instructionUJ(RV32I.Opcodes.Jal, RD, -8));
        cpu.nextOpcode();
        assertEquals(4, state.getPc());
        assertEquals(16, state.getReg(RD));

        state.setPc(24);
        loadInstruction(RV32I.instructionUJ(RV32I.Opcodes.Jal, RD, 14));
        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("JAL should throw exception when loading mis-aligned address");

    }

    @Test
    public void testJalr() throws MemoryException, CpuException {
        //J
        state.setReg(RS1, 4);
        state.setPc(0);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(4, state.getPc());

        state.setPc(12);
        state.setReg(RS1, -8);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 0));
        cpu.nextOpcode();
        assertEquals(4, state.getPc());
        assertEquals(16, state.getReg(RD));

        state.setPc(12);
        state.setReg(RS1, -8);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 16));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());
        assertEquals(16, state.getReg(RD));

        state.setReg(RS1, 14);
        state.setPc(24);
        loadInstruction(RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 0));

        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("JAL should throw exception when loading mis-aligned address");

    }

    @Test
    public void testBeq() throws MemoryException, CpuException {
        state.setPc(0);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, ZERO, ZERO, 8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Beq, ZERO, ZERO, 14));
        //TODO: Check the behavior of SPIKE - does it crash if the instruction has invalid immidiate even though you dont take it?
        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("BEQ should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBne() throws MemoryException, CpuException {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bne, ZERO, ZERO, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(24);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, 14));
        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("BNE should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBlt() throws MemoryException, CpuException {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, ZERO, ZERO, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, 14));
        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("BLT should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBltu() throws MemoryException, CpuException {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, ZERO, ZERO, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, 14));
        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("bltu should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBge() throws MemoryException, CpuException {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, ZERO, ZERO, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setReg(RS1, 5);
        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, 14));
        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("bge should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBgeu() throws MemoryException, CpuException {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, ZERO, ZERO, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(8, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8));
        cpu.nextOpcode();
        assertEquals(20, state.getPc());

        state.setReg(RS1, 5);
        state.setPc(24);
        loadInstruction(RV32I.instructionSB(RV32I.Opcodes.Bgeu, ZERO, ZERO, 14));
        try {
            cpu.nextOpcode();
        } catch (MisalignedMemoryLoadException e) {
            return;
        }
        fail("bgeu should throw exception when loading mis-aligned address");
    }
}
