package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

public class InstructionUJ extends InstructionBase {
    public InstructionUJ(int raw)
    {
        super(raw);
    }

    public InstructionUJ(InstructionBase i)
    {
        super(i.raw);
    }

    public InstructionUJ(int opcode, int rd, int imm)
    {
        super(
                (opcode & mask(7)) |
                        ((rd & mask(5)) << 7) |
                        ((imm & mask(20)) << 12)
        );
    }

    public byte getRd()
    {
        return (byte)((this.raw >> 7) & mask(5));
    }

    public int getImmediate() { return raw >> 12;}
}
