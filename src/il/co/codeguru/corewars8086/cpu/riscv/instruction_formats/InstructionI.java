package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

public class InstructionI extends InstructionBase {
    public InstructionI(int raw)
    {
        super(raw);
    }

    public InstructionI(InstructionBase i)
    {
        super(i.raw);
    }

    public InstructionI(int opcode, int rd, int funct3, int rs1, int imm)
    {
        super(
       (opcode & mask(7)) |
            ((rd & mask(5)) << 7) |
            ((funct3 & mask(3)) << 12) |
            ((rs1 & mask(5)) << 15) |
            ((imm & mask(12)) << 20)
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

    public short getImmediate()
    {
        return (short)(this.raw >> 20);
    }
}
