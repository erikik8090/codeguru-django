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

    private void runInstruction(byte[] instruction, boolean shouldFail)
    {
        //Load instruction to memory
        state.setIP((short) 0);
        for(int i=0;i<instruction.length;i++){
            try {
                memory.writeByte(new RealModeAddress(i), instruction[i]);
            }
            catch (Exception e) {
                Console.error(e.getMessage());
            }
        }

        try {
            cpu.nextOpcode();
        }
        catch (Exception e) {
            if(!shouldFail)
                fail("Instruction resulted in exception");
        }
        if(shouldFail)
            fail("Instruction that was supposed to fail, didn't");
    }

    @Test
    public void testAddReg16Imm()
    {
        state.setAX((short)0);
        runInstruction(new byte[]{(byte)0x83, (byte)0xC0, (byte)0x01}, false);
        assertEquals("Usual case of ADD doesn't work", 1, state.getAX());

        state.setAX((short)0xFFFF);
        runInstruction(new byte[]{(byte)0x83, (byte)0xC0, (byte)0x01}, false);
        assertEquals("Overflow on ADD instruction doesn't work", 0, state.getAX());

        state.setAX((short)0);
        runInstruction(new byte[]{(byte)0x05, (byte)0x34, (byte)0x12}, false);
        assertEquals("Usual case of ADD doesn't work", 0x1234, state.getAX());
    }

    @Test
    public void testAddReg8Imm()
    {
        state.setAL((byte)0);
        runInstruction(new byte[]{(byte)0x04, (byte)0x01}, false);
        assertEquals("Usual case of ADD doesn't work", 1, state.getAL());

        state.setAL((byte)0xFFFF);
        runInstruction(new byte[]{(byte)0x04, (byte)0x01}, false);
        assertEquals("Overflow on ADD instruction doesn't work", 0, state.getAL());
        assertEquals("ADD instruction overflows 8bit register to the 16bit version", 0, state.getAX());
    }

    @Test
    public void testAddReg8Reg()
    {
        state.setAL((byte)0);
        state.setBL((byte)1);

        runInstruction(new byte[]{(byte)0x00, (byte)0xD8}, false);
        assertEquals("Usual case of ADD doesn't work", 1, state.getAL());

        state.setAL((byte)0xFF);
        state.setBL((byte)0xFF);
        runInstruction(new byte[]{(byte)0x00, (byte)0xD8}, false);
        assertEquals("Overflow on ADD doesn't work", -2 /*0xFE*/, state.getAL());
    }

    @Test
    public void testAddReg16Reg()
    {
        state.setAX((short)0);
        state.setBX((short)1);

        runInstruction(new byte[]{(byte)0x01,(byte)0xd8}, false);
        assertEquals("Usual case of ADD doesn't work", 1, state.getAX());

        state.setAX((short)0xFFFF);
        state.setBX((short)0xFFFF);
        runInstruction(new byte[]{(byte)0x01,(byte)0xd8}, false);
        assertEquals("Overflow on ADD doesn't work", -2 /*0xFE*/, state.getAX());
    }

    @Test
    public void testAddReg16Mem()
    {
        state.setAX((short)0);
        try {
            memory.writeByte(new RealModeAddress(0x1234), (byte) 1);
        }
        catch (Exception e) {} //Do nothing because nothing is actually possible


    }

}
