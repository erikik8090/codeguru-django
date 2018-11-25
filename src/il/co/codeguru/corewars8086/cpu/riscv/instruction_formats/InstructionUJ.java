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
                        (((imm >> 20) & 1) << 31) |
                        (((imm >> 1) & mask(10)) << 21) |
                        (((imm >> 11) & 1) << 20) |
                        (((imm >> 12) & mask(8)) << 12)
        );
    }

    public byte getRd()
    {
        return (byte)((this.raw >> 7) & mask(5));
    }

    public int getImmediate() {
        int bit20 = raw >> 31;
        int bit1_10 = (raw >> 21) & mask(10);
        int bit11 = (raw >> 20) & mask(1);
        int bit12_19 = (raw >> 12) & mask(8);
        return (bit1_10 << 1) | (bit11 << 11) | (bit12_19 << 12) | (bit20 << 20);
    }
}
