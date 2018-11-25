package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionR;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionS;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionUJ;
import junitparams.JUnitParamsRunner;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import junitparams.Parameters;
import org.apache.bcel.generic.Instruction;
import org.apache.tools.ant.taskdefs.Pack;
import org.junit.Before;
import org.junit.Test;
import org.junit.experimental.categories.Category;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.*;

@RunWith(JUnitParamsRunner.class)
public class InstructionRunnerTest {
    private CpuStateRiscV state;
    private InstructionRunner runner;
    private RealModeMemory memory;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        runner = new InstructionRunner();
        memory = new RealModeMemoryImpl();
        Logger.setTestingMode();

    }

    @Test
    @Parameters({
            " 0, 10, 10",
            " 5,  5, 10",
            " 5, -1,  4",
            " 0, -1, -1",
            "-1, -1, -2"
    })
    public void testAddi2(int reg, int imm, int expected)
    {
        state.setReg(5, reg);
        InstructionI i = new InstructionI(0, 2, 0, 5, imm);
        runner.addi(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    public void testSw(int rs1, int rs2, int imm, int address, int expected) throws MemoryException
    {
        state.setReg(1,5);
        InstructionS i = new InstructionS(0,2,0,1,0);
        runner.sw(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));

        state.setReg(1,5);
        state.setReg(2, 12);
         i = new InstructionS(0,2,2,1,0);
        runner.sw(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)12)));

        state.setReg(1,5);
        state.setReg(2, 12);
        i = new InstructionS(0,2,2,1,15);
        runner.sw(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)27)));

         i = new InstructionS(0,2,0,0,0);
        runner.sw(i,state,memory);
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));
    }

    @Test
    public void testJal() throws MisalignedMemoryLoadException
    {
        //J
        state.setPc(0);
        InstructionUJ i = new InstructionUJ(0,0, 4);
        runner.jal(i, state);
        assertEquals(4-4, state.getPc()); //-4 for the pc+=4

        state.setPc(12);
        i = new InstructionUJ(0, 1, -8);
        runner.jal(i, state);
        assertEquals(4-4, state.getPc()); // -4 for the pc+=4
        assertEquals(16, state.getReg(1));

        state.setPc(24);
        i = new InstructionUJ(0, 1, 14);
        try{
            runner.jal(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("JAL should throw exception when loading mis-aligned address");

    }

    


}
