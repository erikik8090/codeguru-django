package il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats;

public class CInstructionFormatCSS extends CInstructionFormatBase {

    public CInstructionFormatCSS(short raw) {
        super(raw);
    }

    public CInstructionFormatCSS(CInstructionFormatBase base) {
        this(base.getRaw());
    }

    public CInstructionFormatCSS(byte opcode, byte funct3, byte rs2, byte imm) {
        this((short)((opcode & mask(2)) |
                ((rs2 & mask(5)) << 2) |
                ((imm & mask(6)) << 7) |
                ((funct3 & mask(3)) << 13)));
    }

    public byte getRs2() {
        return (byte) ((raw >> 2) & mask(5));
    }

    public byte getImmediate() {
        return (byte) ((raw >> 7) & mask(6));
    }
}
