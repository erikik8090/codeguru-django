package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

public class InstructionU extends InstructionBase {
    public InstructionU(int raw)
    {
        super(raw);
    }

    public InstructionU(InstructionBase i)
    {
        super(i.raw);
    }

    public InstructionU(int opcode, int rd, int imm)
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
