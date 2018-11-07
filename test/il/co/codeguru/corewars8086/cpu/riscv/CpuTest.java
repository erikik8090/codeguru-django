package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.InvalidOpcodeException;
import org.junit.*;
import static org.junit.Assert.*;

public class CpuTest {
    private Cpu cpu;
    private CpuState state;
    private Memory memory;

    @Before
    public void setUp()
    {
        cpu = new Cpu();
        state = cpu.getState();
        memory = cpu.getMemory();
    }

    @Test
    public void pass()
    {
        assertTrue(true);
    }

    @Test
    public void nextOpcodeTest()
    {
        state.setPc(0);
        memory.storeWord(0, 0x00000013);

        try {
            cpu.nextOpcode();
        }
        catch (InvalidOpcodeException e)
        {
            fail("CPU threw InvalidOpcodeException on ADD instruction");
        }
        //Mock out stuff here?
    }

}

