package il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats;

public class CInstructionFormatCR extends CInstructionFormatBase {

    public CInstructionFormatCR(short raw) {
        super(raw);
    }

    public CInstructionFormatCR(CInstructionFormatBase base) {
        this(base.getRaw());
    }

    public CInstructionFormatCR(byte opcode, byte rs1, byte rs2, byte funct4) {
        this((short)((opcode & mask(2)) |
                ((opcode & mask(5)) << 2) |
                ((opcode & mask(5)) << 7) |
                ((opcode & mask(4)) << 12)));
    }

    public byte getRs2() {
        return (byte) ((raw >> 2) & mask(5));
    }

    public byte getRs1() {
        return (byte) ((raw >> 7) & mask(5));
    }

    public byte getFunct4()
    {
        return (byte) ((raw >> 12) & mask(4));
    }
}
