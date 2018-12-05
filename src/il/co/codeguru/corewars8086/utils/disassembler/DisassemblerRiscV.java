package il.co.codeguru.corewars8086.utils.disassembler;

import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.Instruction;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionDecoder;
import il.co.codeguru.corewars8086.cpu.riscv.Memory;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;

public class DisassemblerRiscV implements IDisassembler {

    private InstructionDecoder decoder;

    private Memory memory;
    private int index;
    private int endIndex;

    public DisassemblerRiscV(byte[] memory, int index, int endIndex) {
        this.memory = new Memory(memory);
        this.index = index;
        this.endIndex = endIndex;

        this.decoder = new InstructionDecoder();
    }

    @Override
    public void reset(int offset, int endOffset) {
        this.index = offset;
        this.endIndex = endOffset;
    }

    @Override
    public int lastOpcodeSize() {
        return 4;
    }

    @Override
    public String nextOpcode() throws DisassemblerException {
        int rawInstruction = memory.loadWord(this.index);
        InstructionFormatBase instructionFormat = new InstructionFormatBase(rawInstruction);
        Instruction instruction;
        try {
            instruction = decoder.decode(instructionFormat);
            index += 4;
        }
        catch (InvalidOpcodeException iv)
        {
            throw new DisassemblerException();
        }
        return instruction.getFormat().format(instruction.getInfo());
    }
}
