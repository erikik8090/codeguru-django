package il.co.codeguru.corewars8086.cpu.riscv.instruction_formats;

public class InstructionI extends InstructionBase {
    public InstructionI(int raw)
    {
        super(raw);
    }

    public InstructionI(int opcode, int rd, int funct3, int rs1, int imm)
    {
        super(
       (opcode & mask(6)) |
            ((rd & mask(5)) << 6) |
            ((funct3 & mask(3)) << 11) |
            ((rs1 & mask(5)) << 14) |
            ((imm & mask(12)) << 19)
        );
    }

    public byte getRd()
    {
        return (byte)((this.raw >> 6) & mask(5));
    }

    public byte getFunct3()
    {
        return (byte)((this.raw >> 11) & mask(3));
    }

    public byte getRs1()
    {
        return (byte)((this.raw >> 14) & mask(5));
    }

    public byte getImmediate()
    {
        return (byte)(this.raw >> 19);
    }
}
