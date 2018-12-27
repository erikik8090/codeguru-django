package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.InstructionDecoderRv32c;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.utils.Logger;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

public class CpuRiscV {

    private CpuStateRiscV state;
    private Memory memory;
    private InstructionDecoder decoder;
    private InstructionDecoderRv32c cDecoder;
    private InstructionRunner runner;

    public CpuStateRiscV getState() {
        return state;
    }

    public Memory getMemory() {
        return memory;
    }

    public CpuRiscV(CpuStateRiscV state, Memory memory)
    {
        this.state = state;
        this.memory = memory;
        this.decoder = new InstructionDecoder();
        this.cDecoder = new InstructionDecoderRv32c();
        this.runner = new InstructionRunner(this);
    }

    public void nextOpcode() throws CpuException, MemoryException
    {
        if(tryRv32cSet())
            return;

        int rawCode = memory.loadWord(state.getPc());
        InstructionFormatBase instructionRaw = new InstructionFormatBase(rawCode);

        Instruction instruction = decoder.decode(instructionRaw);

        instruction.execute(runner);

        state.setPc(state.getPc() + 4);
    }

    private boolean tryRv32cSet() throws CpuException, MemoryException
    {
        short rawComppressedCode = memory.loadHalfWord(state.getPc());
        CInstructionFormatBase commpressedInstruction = new CInstructionFormatBase(rawComppressedCode);
        Instruction i = cDecoder.decode(commpressedInstruction);
        if(i!=null)
        {
            i.execute(runner);
            state.setPc(state.getPc() + 2);
        }
        return i!=null;
    }

}
