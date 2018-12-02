package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

public class CpuRiscV {

    private CpuStateRiscV state;
    private RealModeMemory memory;
    private InstructionDecoder decoder;
    private InstructionRunner runner;

    public CpuStateRiscV getState() {
        return state;
    }

    public RealModeMemory getMemory() {
        return memory;
    }

    public CpuRiscV(CpuStateRiscV state, RealModeMemory memory)
    {
        this.state = state;
        this.memory = memory;
        this.decoder = new InstructionDecoder();
        this.runner = new InstructionRunner(this);
    }

    public void nextOpcode() throws CpuException, MemoryException
    {
        int rawCode = memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)state.getPc()));
        InstructionBase instructionRaw = new InstructionBase(rawCode);

        Instruction instruction = decoder.decode(instructionRaw);

        instruction.execute(runner);

        state.setPc(state.getPc() + 4);
    }
}
