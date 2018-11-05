package il.co.codeguru.corewars8086.cpu.x86;

import il.co.codeguru.corewars8086.gui.widgets.Console;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import org.junit.*;
import static org.junit.Assert.*;

public class CpuTest {
    private Cpu cpu;
    private CpuState state;
    private RealModeMemory memory;

    @Before
    public void setUp()
    {
        state = new CpuState();
        memory = new RealModeMemoryImpl();
        cpu = new Cpu(state, memory);
    }

    private void runInstruction(byte[] instruction)
    {
        state.setIP((short) 0);
        for(int i=0;i<instruction.length;i++){
            try {
                memory.writeByte(new RealModeAddress(i), instruction[i]);
            }
            catch (Exception e) {
                Console.error(e.getMessage());
            }
        }

    }

    @Test
    public void testAddRegImm()
    {
        state.setAX((short)0);
        runInstruction(new byte[]{(byte)0x83, (byte)0xC0, (byte)0x01});
        try {
            cpu.nextOpcode();
        }
        catch (Exception e) {
            fail("Add instruction resulted in exception");
        }
        assertEquals(state.getAX(), 1);
    }

}
