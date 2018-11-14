package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;

public class CpuRiscV {

    private CpuStateRiscV state;
    private RealModeMemory memory;
    private InstructionDecoder decoder;

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
    }

    public void nextOpcode() throws InvalidOpcodeException, MemoryException
    {
        int rawCode = memory.read32Bit(new RealModeAddress((short)0, (short)state.getPc()));
        InstructionBase instruction = new InstructionBase(rawCode);

        decoder.decode_and_run(state, instruction);

        state.setPc(state.getPc() + 1);
    }
}
