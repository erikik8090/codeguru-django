package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.utils.Logger;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import static junit.framework.TestCase.fail;

public class InstructionDecoderTest {

    private InstructionDecoder decoder;

    @Before
    //TODO: Replace this with a proper interface
    public void setUp()
    {
        decoder = new InstructionDecoder();
        Logger.setTestingMode();
    }

    @Test
    public void decodeTest() throws MemoryException, CpuException {
        InstructionFormatBase base = new InstructionFormatBase(0x13);

        try {
            decoder.decode(base);
        } catch (InvalidOpcodeException e) {
            fail("Instruction Decoder threw exception on valid instruction");
        }
    }

    //TODO:Also return this to effect when all instructions are done
    @Test
    @Ignore
    public void decodeFailTest() throws MemoryException, CpuException
    {
        InstructionFormatBase base = new InstructionFormatBase(0);

        try {
            decoder.decode(base);
        } catch (InvalidOpcodeException e) {
            return;
        }
        fail("Instruction Decoder threw exception on valid instruction");
    }
}
