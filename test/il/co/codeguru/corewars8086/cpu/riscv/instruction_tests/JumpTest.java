package il.co.codeguru.corewars8086.cpu.riscv.instruction_tests;

import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionSB;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionUJ;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

public class JumpTest {
    private static final int ZERO = 0;
    private static final int RS1 = 1;
    private static final int RS2 = 2;
    private static final int RD  = 3;

    private CpuStateRiscV state;
    private InstructionRunner runner;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        RealModeMemory memory = new RealModeMemoryImpl();
        runner = new InstructionRunner(new CpuRiscV(state, memory));
        Logger.setTestingMode();

    }

    @Test
    public void testJal() throws MisalignedMemoryLoadException
    {
        //J
        state.setPc(0);
        InstructionUJ i = RV32I.instructionUJ(RV32I.Opcodes.Jal, 0, 4);
        runner.jal(i);
        assertEquals(0, state.getPc()); //-4 for the pc+=4

        state.setPc(12);
        i = RV32I.instructionUJ(RV32I.Opcodes.Jal, RD, -8);
        runner.jal(i);
        assertEquals(0, state.getPc()); // -4 for the pc+=4
        assertEquals(16, state.getReg(RD));

        state.setPc(24);
        i = RV32I.instructionUJ(RV32I.Opcodes.Jal, RD, 14);
        try{
            runner.jal(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("JAL should throw exception when loading mis-aligned address");

    }

    @Test
    public void testJalr() throws MisalignedMemoryLoadException
    {
        //J
        state.setReg(RS1, 4);
        state.setPc(0);
        InstructionI i = RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 0);
        runner.jalr(i);
        assertEquals(0, state.getPc());

        state.setPc(12);
        state.setReg(RS1, -8);
        i = RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 0);
        runner.jalr(i);
        assertEquals(0, state.getPc());
        assertEquals(16, state.getReg(RD));

        state.setPc(12);
        state.setReg(RS1, -8);
        i = RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 16);
        runner.jalr(i);
        assertEquals(16, state.getPc());
        assertEquals(16, state.getReg(RD));

        state.setReg(RS1, 14);
        state.setPc(24);
        i = RV32I.instructionI(RV32I.Opcodes.Jalr, RD, RS1, 0);
        try{
            runner.jalr(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("JAL should throw exception when loading mis-aligned address");

    }

    @Test
    public void testBeq() throws MisalignedMemoryLoadException
    {
        state.setPc(0);
        InstructionSB i = RV32I.instructionSB(RV32I.Opcodes.Beq, ZERO, ZERO, 8);
        runner.beq(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2,5);
        i = RV32I.instructionSB(RV32I.Opcodes.Beq, RS1, RS2, -8);
        runner.beq(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        i = RV32I.instructionSB(RV32I.Opcodes.Beq, RS1, RS2, -8);
        runner.beq(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        i = RV32I.instructionSB(RV32I.Opcodes.Beq, RS1, RS2, -8);
        runner.beq(i);
        assertEquals(16, state.getPc());

        state.setPc(24);
        i = RV32I.instructionSB(RV32I.Opcodes.Beq, ZERO, ZERO, 14);
        //TODO: Check the behavior of SPIKE - does it crash if the instruction has invalid immidiate even though you dont take it?
        try{
            runner.beq(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("BEQ should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBne() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2,5);
        InstructionSB i = RV32I.instructionSB(RV32I.Opcodes.Bne, ZERO, ZERO, -8);
        runner.bne(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        i = RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, -8);
        runner.bne(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        i = RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, -8);
        runner.bne(i);
        assertEquals(4, state.getPc());

        state.setPc(24);
        state.setReg(RS2, 5);
        i = RV32I.instructionSB(RV32I.Opcodes.Bne, RS1, RS2, 14);
        try{
            runner.bne(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("BNE should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBlt() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2,5);
        InstructionSB i = RV32I.instructionSB(RV32I.Opcodes.Blt, ZERO, ZERO, -8);
        assertEquals(-8, i.getImm());
        runner.blt(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        i = RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8);
        runner.blt(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        i = RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8);
        runner.blt(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        i = RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8);
        runner.blt(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        i = RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, -8);
        runner.blt(i);
        assertEquals(16, state.getPc());

        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        state.setPc(24);
        i = RV32I.instructionSB(RV32I.Opcodes.Blt, RS1, RS2, 14);
        try{
            runner.blt(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("BLT should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBltu() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2,5);
        InstructionSB i  = RV32I.instructionSB(RV32I.Opcodes.Bltu, ZERO, ZERO, -8);
        runner.bltu(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        i = RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8);
        runner.bltu(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        i = RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8);
        runner.bltu(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        i = RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8);
        runner.bltu(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        i = RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, -8);
        runner.bltu(i);
        assertEquals(4, state.getPc());

        state.setPc(24);
        i = RV32I.instructionSB(RV32I.Opcodes.Bltu, RS1, RS2, 14);
        try{
            runner.bltu(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("bltu should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBge() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2,5);
        InstructionSB i = RV32I.instructionSB(RV32I.Opcodes.Bge, ZERO, ZERO, -8);
        runner.bge(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        i = RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8);
        runner.bge(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        i = RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8);
        runner.bge(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        i = RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8);
        runner.bge(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        i = RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, -8);
        runner.bge(i);
        assertEquals(4, state.getPc());

        state.setReg(RS1, 5);
        state.setPc(24);
        i = RV32I.instructionSB(RV32I.Opcodes.Bge, RS1, RS2, 14);
        try{
            runner.bge(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("bge should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBgeu() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2,5);
        InstructionSB i = RV32I.instructionSB(RV32I.Opcodes.Bgeu, ZERO, ZERO, -8);
        assertEquals(-8, i.getImm());
        runner.bgeu(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 5);
        state.setReg(RS2, 6);
        i = RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8);
        runner.bgeu(i);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 6);
        state.setReg(RS2, 5);
        i = RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8);
        runner.bgeu(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, -1);
        state.setReg(RS2, 1);
        i = RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8);
        runner.bgeu(i);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(RS1, 1);
        state.setReg(RS2, -1);
        i = RV32I.instructionSB(RV32I.Opcodes.Bgeu, RS1, RS2, -8);
        runner.bgeu(i);
        assertEquals(16, state.getPc());

        state.setReg(RS1, 5);
        state.setPc(24);
        i = RV32I.instructionSB(RV32I.Opcodes.Bgeu, ZERO, ZERO, 14);
        try{
            runner.bgeu(i);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("bgeu should throw exception when loading mis-aligned address");
    }
}
