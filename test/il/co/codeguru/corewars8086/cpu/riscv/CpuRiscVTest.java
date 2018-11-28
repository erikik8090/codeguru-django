package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import org.junit.*;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.*;

public class CpuRiscVTest {
    private CpuRiscV cpuRiscV;
    private CpuStateRiscV state;
    private RealModeMemory memory;

    @Before
    public void setUp()
    {
        Logger.setTestingMode();
        state = new CpuStateRiscV();
        memory = new RealModeMemoryImpl();
        cpuRiscV = new CpuRiscV(state, memory);

    }

    @Test
    public void pass()
    {
        assertTrue(true);
    }

    @Test
    public void nextOpcodeTest() throws MemoryException
    {
        state.setPc(0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT,(short)0), (short)0x00000013);

        try {
            cpuRiscV.nextOpcode();
        }
        catch (Exception e)
        {
            fail("CPU threw exception on ADD instruction");
        }
        //Mock out stuff here?
    }

}

