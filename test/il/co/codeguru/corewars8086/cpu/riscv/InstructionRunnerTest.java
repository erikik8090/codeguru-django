package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class InstructionRunnerTest {
    private CpuStateRiscV state;
    private InstructionRunner runner;

    @Before
    public void setUp()
    {
        state = new CpuStateRiscV();
        runner = new InstructionRunner();
    }

    @Test
    public void testAddi()
    {
        InstructionI i = new InstructionI(0, 2, 0, 5, 10);
        runner.addi(state, i);
        assertEquals(10, state.getReg(2));

        state.setReg(5,5);
        i = new InstructionI(0, 2, 0, 5, 10);
        runner.addi(state, i);
        assertEquals(15, state.getReg(2));

        state.setReg(5, 5);
        i = new InstructionI(0,2,0,5,-1);
        runner.addi(state, i);
        assertEquals(4, state.getReg(2));

        state.setReg(5,0);
        i = new InstructionI(0,2,0,5,-1);
        runner.addi(state, i);
        assertEquals(-1,state.getReg(2));

        state.setReg(5,-1);
        i = new InstructionI(0,2,0,5,-1);
        runner.addi(state, i);
        assertEquals(-2, state.getReg(2));
    }


}
