package il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats;

import il.co.codeguru.corewars8086.cpu.riscv.Instruction;

public class CInstructionFormatBase {
    final protected short raw;

    public CInstructionFormatBase(short raw) {
        this.raw = raw;
    }

    protected static int mask(int len)
    {
        return (1<<len) - 1;
    }



    public String format(Instruction.InstructionInfo info)
    {
        throw new UnsupportedOperationException("Trying to get formatted instruction from the base instruction format");
    }

    public short getRaw()
    {
        return this.raw;
    }

    public byte getOpcode()
    {
        return (byte)(this.raw & mask(2));
    }
    public byte getFunct3() {return (byte)((this.raw >> 13) & mask(3));}
}
