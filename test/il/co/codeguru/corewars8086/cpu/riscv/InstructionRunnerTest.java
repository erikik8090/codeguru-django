package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionS;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionUJ;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import org.junit.Before;
import org.junit.Test;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.*;

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
    public void testAddi() {
        InstructionI i = new InstructionI(0, 2, 0, 5, 10);
        runner.addi(i, state);
        assertEquals(10, state.getReg(2));

        state.setReg(5, 5);
        i = new InstructionI(0, 2, 0, 5, 10);
        runner.addi(i, state);
        assertEquals(15, state.getReg(2));

        state.setReg(5, 5);
        i = new InstructionI(0, 2, 0, 5, -1);
        runner.addi(i, state);
        assertEquals(4, state.getReg(2));

        state.setReg(5, 0);
        i = new InstructionI(0, 2, 0, 5, -1);
        runner.addi(i, state);
        assertEquals(-1, state.getReg(2));

        state.setReg(5, -1);
        i = new InstructionI(0, 2, 0, 5, -1);
        runner.addi(i, state);
        assertEquals(-2, state.getReg(2));
    }

    @Test
    public void testSw() throws MemoryException
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
