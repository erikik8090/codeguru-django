package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import org.junit.Before;
import org.junit.Test;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.assertEquals;

public class InstructionTest {
    private static final int RS1 = 1;
    private static final int RS2 = 2;

    private CpuStateRiscV state;
    private CpuRiscV cpu;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        RealModeMemory memory = new RealModeMemoryImpl();
        cpu = new CpuRiscV(state, memory);
        Logger.setTestingMode();
    }

    private void loadInstruction(CInstructionFormatBase i) throws MemoryException {
        cpu.getMemory().write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) state.getPc()), i.getRaw());
    }

    @Test
    public void testCAdd() throws MemoryException, CpuException
    {
        state.setReg(RS1, 3);
        state.setReg(RS2, 4);
        loadInstruction(RV32C.cInstructionFormatCR(RV32C.Opcodes.CADD, RS1, RS2));

        cpu.nextOpcode();

        assertEquals(7, state.getReg(RS1));
        assertEquals(2, state.getPc());
    }
}
