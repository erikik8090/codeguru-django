package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.UnsupportedOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;

public class Cpu {

    private CpuState state;
    private Memory memory;

    public CpuState getState() {
        return state;
    }

    public Memory getMemory() {
        return memory;
    }

    public Cpu()
    {
        state = new CpuState();
        memory = new Memory(0x10000);
    }

    public void nextOpcode() throws InvalidOpcodeException
    {
        int rawCode = memory.loadWord(state.getPc());
        InstructionBase instruction = new InstructionBase(rawCode);

        InstructionDecoder.decode_and_run(state, instruction);
    }
}
