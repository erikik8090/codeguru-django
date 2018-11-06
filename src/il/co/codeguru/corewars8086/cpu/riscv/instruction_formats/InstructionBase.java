package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

public class InstructionBase {
    final protected int raw;

    public InstructionBase(int raw) {
        this.raw = raw;
    }

    protected static int mask(int len)
    {
        return (1<<len) - 1;
    }

    public byte getOpcode()
    {
        return (byte)(this.raw & mask(6));
    }

    public int getRaw()
    {
        return this.raw;
    }
}
