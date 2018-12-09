package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.riscv.Instruction;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCR;
import il.co.codeguru.corewars8086.utils.Logger;

public final class RV32C {
    private RV32C() {}

    public static CInstructionFormatCR cInstructionFormatCR(Instruction.InstructionInfo info, int rs1, int rs2)
    {
        return new CInstructionFormatCR((byte)info.getOpcode(), (byte)rs1, (byte)rs2, (byte)info.getFunct3());
    }

    public static final class OpcodeTypes {
        public static final int C0 = 0;
        public static final int C1 = 1;
        public static final int C2 = 2;
    }

    public static final class Opcodes {
        public static final Instruction.InstructionInfo CLW = new Instruction.InstructionInfo("C.lw", OpcodeTypes.C0, 2);
        public static final Instruction.InstructionInfo CSW = new Instruction.InstructionInfo("C.sw", OpcodeTypes.C0, 6);
        public static final Instruction.InstructionInfo CLWSP = new Instruction.InstructionInfo("C.lwsp", OpcodeTypes.C2, 2);
        public static final Instruction.InstructionInfo CSWSP = new Instruction.InstructionInfo("C.swsp", OpcodeTypes.C2, 6);

        public static final Instruction.InstructionInfo CJ = new Instruction.InstructionInfo("C.j", OpcodeTypes.C1, 5);
        public static final Instruction.InstructionInfo CJAL = new Instruction.InstructionInfo("C.jal", OpcodeTypes.C1, 1);
        public static final Instruction.InstructionInfo CJR = new Instruction.InstructionInfo("C.jr", OpcodeTypes.C2, 8);
        public static final Instruction.InstructionInfo CJALR = new Instruction.InstructionInfo("C.jalr", OpcodeTypes.C2, 9);
        public static final Instruction.InstructionInfo CBEQZ = new Instruction.InstructionInfo("C.beqz", OpcodeTypes.C1, 6);
        public static final Instruction.InstructionInfo CBNEZ = new Instruction.InstructionInfo("C.bnez", OpcodeTypes.C1, 7);

        public static final Instruction.InstructionInfo CLI = new Instruction.InstructionInfo("C.li", OpcodeTypes.C1, 2);
        public static final Instruction.InstructionInfo CLUI = new Instruction.InstructionInfo("C.lui", OpcodeTypes.C1, 3);
        public static final Instruction.InstructionInfo CADDI = new Instruction.InstructionInfo("C.addi", OpcodeTypes.C1, 0);
        public static final Instruction.InstructionInfo CADDI16SP = new Instruction.InstructionInfo("C.addi16sp",OpcodeTypes.C1, 3);
        public static final Instruction.InstructionInfo CADDI4SPN = new Instruction.InstructionInfo("C.addi4spn", OpcodeTypes.C0, 0);
        public static final Instruction.InstructionInfo CSLLI = new Instruction.InstructionInfo("C.slli",OpcodeTypes.C2, 0);
        public static final Instruction.InstructionInfo CSRLI = new Instruction.InstructionInfo("C.srli",OpcodeTypes.C1, 4);
        public static final Instruction.InstructionInfo CSRAI = new Instruction.InstructionInfo("C.srai",OpcodeTypes.C1, 4);
        public static final Instruction.InstructionInfo CANDI = new Instruction.InstructionInfo("C.andi",OpcodeTypes.C1, 4);

        public static final Instruction.InstructionInfo CMV = new Instruction.InstructionInfo("C.mv",OpcodeTypes.C2, 8);
        public static final Instruction.InstructionInfo CADD = new Instruction.InstructionInfo("C.add",OpcodeTypes.C2, 9);
        public static final Instruction.InstructionInfo CAND = new Instruction.InstructionInfo("C.and",OpcodeTypes.C1, 4);
        public static final Instruction.InstructionInfo COR = new Instruction.InstructionInfo("C.or", OpcodeTypes.C1, 4);
        public static final Instruction.InstructionInfo CXOR = new Instruction.InstructionInfo("C.xor", OpcodeTypes.C1, 4);
        public static final Instruction.InstructionInfo CSUB = new Instruction.InstructionInfo("C.sub", OpcodeTypes.C1, 4);

        public static final Instruction.InstructionInfo CNOP = new Instruction.InstructionInfo("C.nop", OpcodeTypes.C1, 0);
    }
}
