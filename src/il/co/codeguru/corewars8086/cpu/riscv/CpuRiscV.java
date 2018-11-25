package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.utils.Logger;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

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
        this.decoder = new InstructionDecoder(new InstructionRunner());
    }

    public void nextOpcode() throws CpuException, MemoryException
    {
        int rawCode = memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)state.getPc()));
        Logger.log("PC: " + state.getPc());
        InstructionBase instruction = new InstructionBase(rawCode);

        decoder.decode_and_run(state, instruction, memory);

        state.setPc(state.getPc() + 4);
    }
}
