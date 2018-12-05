package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

import il.co.codeguru.corewars8086.cpu.riscv.Instruction;

public class InstructionFormatBase {
    final protected int raw;

    public InstructionFormatBase(int raw) {
        this.raw = raw;
    }

    protected static int mask(int len)
    {
        return (1<<len) - 1;
    }

    public byte getOpcode()
    {
        return (byte)(this.raw & mask(7));
    }

    public String format(Instruction.InstructionInfo info)
    {
        throw new UnsupportedOperationException("Trying to get formatted instruction from the base instruction format");
    }

    public int getRaw()
    {
        return this.raw;
    }
}
