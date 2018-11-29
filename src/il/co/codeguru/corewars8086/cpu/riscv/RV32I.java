package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;

public final class RV32I {
    private RV32I(){}

    public static InstructionI  instructionI (Opcode op, int rd, int rs1, int imm) { return new InstructionI(op.opcode, rd, op.funct3,rs1,imm);}
    public static InstructionS  instructionS (Opcode op, int rs1, int rs2, int imm) { return new InstructionS(op.opcode,op.funct3, rs1, rs2, imm);}
    public static InstructionR  instructionR (Opcode op, int rd, int rs1, int rs2) { return new InstructionR(op.opcode, rd, op.funct3, rs1, rs2, op.funct7);}
    public static InstructionU  instructionU (Opcode op, int rd, int imm) { return new InstructionU(op.opcode, rd, imm);}
    public static InstructionSB instructionSB(Opcode op, int rs1, int rs2, int imm) { return new InstructionSB(op.opcode,op.funct3,rs1, rs2, imm);}
    public static InstructionUJ instructionUJ(Opcode op, int rd, int imm) { return new InstructionUJ(op.opcode, rd, imm);}

    public final class OpcodeTypes {
        public static final int OP_IMM = 0x13;
        public static final int OP = 0x33;
        public static final int BRANCH = 0x63;
        public static final int LOAD = 0x03;
        public static final int STORE = 0x23;
        public static final int AUIPC = 0x17;
        public static final int LUI = 0x37;
        public static final int JALR = 0x67;
        public static final int JAL = 0x6f;
    }

    public static final class Opcodes{
        public static Opcode[] opcodes;


        //BRANCH
        public static Opcode Beq = new Opcode(OpcodeTypes.BRANCH, 0);
        public static Opcode Bne = new Opcode(OpcodeTypes.BRANCH, 1);
        public static Opcode Blt = new Opcode(OpcodeTypes.BRANCH, 4);
        public static Opcode Bge = new Opcode(OpcodeTypes.BRANCH, 5);
        public static Opcode Bltu= new Opcode(OpcodeTypes.BRANCH, 6);
        public static Opcode Bgeu= new Opcode(OpcodeTypes.BRANCH, 7);

        //REGISTER
        public static Opcode Add = new Opcode(OpcodeTypes.OP, 0, 0);
        public static Opcode Sub = new Opcode(OpcodeTypes.OP, 0, 32);
        public static Opcode Sll = new Opcode(OpcodeTypes.OP, 1);
        public static Opcode Slt = new Opcode(OpcodeTypes.OP, 2);
        public static Opcode Sltu = new Opcode(OpcodeTypes.OP, 3);
        public static Opcode Xor = new Opcode(OpcodeTypes.OP, 4);
        public static Opcode Srl = new Opcode(OpcodeTypes.OP, 5, 0);
        public static Opcode Sra = new Opcode(OpcodeTypes.OP, 5, 32);
        public static Opcode Or = new Opcode(OpcodeTypes.OP, 6);
        public static Opcode And = new Opcode(OpcodeTypes.OP, 7);

        //Store
        public static Opcode Sb = new Opcode(OpcodeTypes.STORE, 0);
        public static Opcode Sh = new Opcode(OpcodeTypes.STORE, 1);
        public static Opcode Sw = new Opcode(OpcodeTypes.STORE, 2);

        //Immediate
        public static Opcode Addi = new Opcode(OpcodeTypes.OP_IMM, 0);
        public static Opcode Slli = new Opcode(OpcodeTypes.OP_IMM, 1);
        public static Opcode Slti = new Opcode(OpcodeTypes.OP_IMM, 2);
        public static Opcode Sltiu = new Opcode(OpcodeTypes.OP_IMM, 3);
        public static Opcode Xori = new Opcode(OpcodeTypes.OP_IMM, 4);
        public static Opcode Srli = new Opcode(OpcodeTypes.OP_IMM, 5, 0);
        public static Opcode Srai = new Opcode(OpcodeTypes.OP_IMM, 5, 32);
        public static Opcode Ori = new Opcode(OpcodeTypes.OP_IMM, 6);
        public static Opcode Andi = new Opcode(OpcodeTypes.OP_IMM, 7);

        //Load
        public static Opcode Lb = new Opcode(OpcodeTypes.OP_IMM, 0);
        public static Opcode Lh = new Opcode(OpcodeTypes.OP_IMM, 1);
        public static Opcode Lw = new Opcode(OpcodeTypes.OP_IMM, 2);
        public static Opcode Lbu = new Opcode(OpcodeTypes.OP_IMM, 4);
        public static Opcode Lhu = new Opcode(OpcodeTypes.OP_IMM, 5);

        //Other
        public static Opcode Lui = new Opcode(OpcodeTypes.LUI);
        public static Opcode Auipc = new Opcode(OpcodeTypes.AUIPC);
        public static Opcode Jal = new Opcode(OpcodeTypes.JAL);
        public static Opcode Jalr = new Opcode(OpcodeTypes.JALR);




    }

    private static class Opcode {
        private int opcode;
        private int funct3;
        private int funct7;

        Opcode(int type)
        {
            this(type, 0);
        }

        Opcode(int type, int funct3) {
            this(type, funct3, 0);
        }

        Opcode(int type, int funct3, int funct7){
            this.opcode = type;
            this.funct3 = funct3;
            this.funct7 = funct7;
        }

        public int getOpcode() {
            return opcode;
        }

        public int getFunct3() {
            return funct3;
        }
    }
}
