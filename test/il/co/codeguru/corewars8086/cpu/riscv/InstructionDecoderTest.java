package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import org.junit.Test;

import static junit.framework.TestCase.fail;

public class InstructionDecoderTest {
    @Test
    public void decodeTest() {
        InstructionBase base = new InstructionBase(0x13);

        try {
            InstructionDecoder.decode_and_run(new CpuState(), base);
        } catch (InvalidOpcodeException e) {
            fail("Instruction Decoder threw exception on valid instruction");
        }
    }

    @Test
    public void decodeFailTest()
    {
        InstructionBase base = new InstructionBase(0);

        try {
            InstructionDecoder.decode_and_run(new CpuState(), base);
        } catch (InvalidOpcodeException e) {
            return;
        }
        fail("Instruction Decoder threw exception on valid instruction");
    }
}
