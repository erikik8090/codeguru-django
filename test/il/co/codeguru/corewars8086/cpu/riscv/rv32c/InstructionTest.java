package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatBase;
import il.co.codeguru.corewars8086.cpu.x86.Cpu;
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
public class InstructionTest {
    private static final int RS1 = 5;
    private static final int RS2 = 6;

    private CpuStateRiscV state;
    private CpuRiscV cpu;
    private RealModeMemory memory;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        memory = new RealModeMemoryImpl();
        cpu = new CpuRiscV(state, memory);
        Logger.setTestingMode();
    }

    private void loadInstruction(CInstructionFormatBase i) throws MemoryException {
        state.setPc(0);
        cpu.getMemory().write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) state.getPc()), i.getRaw());
    }

    @Test
    @Parameters({
            " 0, 10, 10",
            " 5,  5, 10",
            " 5, -1,  4",
            " 0, -1, -1",
            "-1, -1, -2",
            "" + Integer.MAX_VALUE + ", 1," + Integer.MIN_VALUE
    })
    public void testCAdd(int rs1, int rs2, int result) throws MemoryException, CpuException
    {
        state.setReg(RS1, rs1);
        state.setReg(RS2, rs2);
        loadInstruction(RV32C.cInstructionFormatCR(RV32C.Opcodes.CADD, RS1, RS2));

        cpu.nextOpcode();

        assertEquals(result, state.getReg(RS1));
        assertEquals(2, state.getPc());
    }

    @Test
    public void testMv() throws MemoryException, CpuException
    {
        state.setReg(RS2, 5);
        loadInstruction(RV32C.cInstructionFormatCR(RV32C.Opcodes.CMV, RS1, RS2));

        cpu.nextOpcode();

        assertEquals(5, state.getReg(RS1));
        assertEquals(2, state.getPc());
    }

    @Test
    public void testJr() throws MemoryException, CpuException
    {
        state.setReg(RS1, 24);
        loadInstruction(RV32C.cInstructionFormatCR(RV32C.Opcodes.CJR, RS1, 0));

        cpu.nextOpcode();

        assertEquals(24, state.getPc());
    }

    @Test
    public void testJalr() throws MemoryException, CpuException
    {
        state.setReg(RS1, 24);
        loadInstruction(RV32C.cInstructionFormatCR(RV32C.Opcodes.CJALR, RS1, 0));

        cpu.nextOpcode();

        assertEquals(24, state.getPc());
    }

    @Test
    @Parameters({
            " 0, 10, 10",
            " 5,  5, 10",
            " 5, -1,  4",
            " 0, -1, -1",
            "-1, -1, -2",
            "" + Integer.MAX_VALUE + ", 1," + Integer.MIN_VALUE
    })
    public void testCAddi(int rs1, int imm, int result) throws MemoryException, CpuException
    {
        state.setReg(RS1, rs1);
        loadInstruction(RV32C.cInstructionFormatCI(RV32C.Opcodes.CADDI, RS1, imm));

        cpu.nextOpcode();

        assertEquals(result, state.getReg(RS1));
        assertEquals(2, state.getPc());
    }

    @Test
    @Parameters({
            " 1, 2,  4",
            " 3, 2, 12",
            "-1, 2, -4",
            "" + Integer.MIN_VALUE + ", 1, 0"
    })
    public void testSlli(int reg, int imm, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg);
        loadInstruction(RV32C.cInstructionFormatCI(RV32C.Opcodes.CSLLI, RS1, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RS1));
    }

    @Test
    public void testLi() throws MemoryException, CpuException
    {
        state.setReg(RS1, 7777);
        loadInstruction(RV32C.cInstructionFormatCI(RV32C.Opcodes.CLI, RS1, 3));
        cpu.nextOpcode();
        assertEquals(3, state.getReg(RS1));
    }

    @Test
    @Parameters({
            " 0, 10, 40960",
            " 5,  5,  20485",
            " 5, -1, -4091",
            " 0, -1, -4096",
            "-1, -1, -1",
            "-1,  0, 4095"
    })
    public void testLui(int reg, int imm, int expected) throws MemoryException, CpuException {
        state.setReg(RS1, reg);
        loadInstruction(RV32C.cInstructionFormatCI(RV32C.Opcodes.CLUI, RS1, imm));
        cpu.nextOpcode();
        assertEquals(expected, state.getReg(RS1));
    }

    private final int VAL = 25;
    @Test
    public void testLw() throws MemoryException, CpuException {
        state.setReg(2, 15);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 15), VAL);
        loadInstruction(RV32C.cInstructionFormatCI(RV32C.Opcodes.CLWSP, RS1, 0));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RS1));

        state.setReg(2, 15);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) 35), VAL);
        loadInstruction(RV32C.cInstructionFormatCI(RV32C.Opcodes.CLWSP, RS1, 20));
        cpu.nextOpcode();
        assertEquals(VAL, state.getReg(RS1));
    }


}
