package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

import il.co.codeguru.corewars8086.utils.Logger;

public class InstructionR extends InstructionBase
{
    public InstructionR(int raw)
    {
        super(raw);
    }

    public InstructionR(InstructionBase i)
    {
        super(i.raw);
    }

    public InstructionR(int opcode, int rd, int funct3, int rs1, int rs2, int funct7)
    {
        super(
                (opcode & mask(7)) |
                        ((rd & mask(5)) << 7) |
                        ((funct3 & mask(3)) << 12) |
                        ((rs1 & mask(5)) << 15) |
                        ((rs2 & mask(5)) << 20) |
                        ((funct7 & mask(7)) << 25)
        );
    }

    public byte getRd()
    {
        return (byte)((this.raw >> 7) & mask(5));
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

    public byte getFunct7() { return (byte)(this.raw >> 25);}
}
