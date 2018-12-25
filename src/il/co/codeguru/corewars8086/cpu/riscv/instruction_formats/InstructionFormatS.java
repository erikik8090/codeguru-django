package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

public class InstructionFormatS extends InstructionFormatBase
{
    public InstructionFormatS(int raw)
    {
        super(raw);
    }

    public InstructionFormatS(InstructionFormatBase i)
    {
        this(i.raw);
    }

    public InstructionFormatS(int opcode, int funct3, int rs1, int rs2, int imm)
    {
        this(
                (opcode & mask(7)) |
                        ((imm & mask(5)) << 7) |
                        ((funct3 & mask(3)) << 12) |
                        ((rs1 & mask(5)) << 15) |
                        ((rs2 & mask(5)) << 20) |
                        (((imm >> 5) & mask(7) << 25))
        );
    }

    public byte getFunct3()
    {
        return (byte)((this.raw >> 12) & mask(3));
    }

    public byte getRs1()
    {
        return (byte)((this.raw >> 15) & mask(5));
    }

    public byte getRs2()
    {
        return (byte)((this.raw >> 20) & mask(5));
    }

    public byte getImm() {
        int first_part = (byte)((this.raw >> 7) & mask(5));
        int second_part = (byte)(this.raw >> 25);
        return (byte)(first_part | (second_part << 5));
    }
}
