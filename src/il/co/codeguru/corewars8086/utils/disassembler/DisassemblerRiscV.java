package il.co.codeguru.corewars8086.utils.disassembler;

import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.Instruction;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionDecoder;
import il.co.codeguru.corewars8086.cpu.riscv.Memory;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.InstructionDecoderRv32c;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatBase;
import il.co.codeguru.corewars8086.utils.Logger;

public class DisassemblerRiscV implements IDisassembler {

    private InstructionDecoder decoder;
    private InstructionDecoderRv32c cDecoder;

    private Memory memory;
    private int index;
    private int endIndex;
    private int lastOpcodeSize = 0;

    public DisassemblerRiscV(byte[] memory, int index, int endIndex) {
        this.memory = new Memory(memory);
        this.index = index;
        this.endIndex = endIndex;

        this.decoder = new InstructionDecoder();
        this.cDecoder= new InstructionDecoderRv32c();
    }

    @Override
    public void reset(int offset, int endOffset) {
        this.index = offset;
        this.endIndex = endOffset;
    }

    private Instruction getCInstruction() {
        short rawInstruction = memory.loadHalfWord(this.index);
        CInstructionFormatBase instructionFormat = new CInstructionFormatBase(rawInstruction);
        return cDecoder.decode(instructionFormat);
    }

    @Override
    public int lastOpcodeSize() {
        return lastOpcodeSize;
    }

    @Override
    public String nextOpcode() throws DisassemblerException {
        int rawInstruction = memory.loadWord(this.index);
        InstructionFormatBase instructionFormat = new InstructionFormatBase(rawInstruction);
        Instruction instruction= getCInstruction();

        if(instruction != null){
            lastOpcodeSize = 2;
        }
        else {
            try {
                instruction = decoder.decode(instructionFormat);
                lastOpcodeSize = 4;
            } catch (InvalidOpcodeException iv) {
                Logger.log("Failed");
                throw new DisassemblerException();
            }
        }
        index += lastOpcodeSize;
        return instruction.getFormat().format(instruction.getInfo());
    }
}
