package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.memory.MemoryException;

class InstructionDecoder {
    public Instruction decode(InstructionBase i) throws MemoryException, CpuException
    {
        switch(i.getOpcode())
        {
            case RV32I.OpcodeTypes.LOAD:
                return loadOpcode(i);
            case RV32I.OpcodeTypes.OP_IMM:
                return immOpcode(i);
            case RV32I.OpcodeTypes.AUIPC:
                return new Instruction(RV32I.Opcodes.Auipc, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.auipc(new InstructionU(format)));
            case RV32I.OpcodeTypes.STORE:
                return storeOpcode(i);
            case RV32I.OpcodeTypes.OP:
                return registerOpcode(i);
            case RV32I.OpcodeTypes.LUI:
                return new Instruction(RV32I.Opcodes.Lui, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.lui(new InstructionU(format)));
            case RV32I.OpcodeTypes.BRANCH:
                return branchOpcode(i);
            case RV32I.OpcodeTypes.JALR:
                return new Instruction(RV32I.Opcodes.Jalr, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.jalr(new InstructionI(format)));
            case RV32I.OpcodeTypes.JAL:
                return new Instruction(RV32I.Opcodes.Jal, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.jal(new InstructionUJ(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction branchOpcode(InstructionBase i) throws InvalidOpcodeException {
        InstructionSB sb = new InstructionSB(i);
        switch(sb.getFunct3())
        {
            case 0:
                return new Instruction(RV32I.Opcodes.Beq, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.beq(new InstructionSB(format)));
            case 1:
                return new Instruction(RV32I.Opcodes.Bne, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.bne(new InstructionSB(format)));
            case 4:
                return new Instruction(RV32I.Opcodes.Blt, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.blt(new InstructionSB(format)));
            case 5:
                return new Instruction(RV32I.Opcodes.Bge, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.bge(new InstructionSB(format)));
            case 6:
                return new Instruction(RV32I.Opcodes.Bltu, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.bltu(new InstructionSB(format)));
            case 7:
                return new Instruction(RV32I.Opcodes.Bgeu, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.bgeu(new InstructionSB(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction registerOpcode(InstructionBase i) throws InvalidOpcodeException {
        InstructionR ir = new InstructionR(i);
        switch(ir.getFunct3())
        {
            case 0:
                switch (ir.getFunct7())
                {
                    case 0:
                        return new Instruction(RV32I.Opcodes.Add, i,
                                (InstructionBase format, InstructionRunner runner) -> runner.add(new InstructionR(format)));
                    case 32:
                        return new Instruction(RV32I.Opcodes.Sub, i,
                                (InstructionBase format, InstructionRunner runner) -> runner.sub(new InstructionR(format)));
                    default:
                        throw new InvalidOpcodeException();
                }
            case 1:
                return new Instruction(RV32I.Opcodes.Sll, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.sll(new InstructionR(format)));
            case 2:
                return new Instruction(RV32I.Opcodes.Slt, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.slt(new InstructionR(format)));
            case 3:
                return new Instruction(RV32I.Opcodes.Sltu, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.sltu(new InstructionR(format)));
            case 4:
                return new Instruction(RV32I.Opcodes.Xor, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.xor(new InstructionR(format)));
            case 5:
                switch(ir.getFunct7())
                {
                    case 0:
                        return new Instruction(RV32I.Opcodes.Srl, i,
                                (InstructionBase format, InstructionRunner runner) -> runner.srl(new InstructionR(format)));
                    case 32:
                        return new Instruction(RV32I.Opcodes.Sra, i,
                                (InstructionBase format, InstructionRunner runner) -> runner.sra(new InstructionR(format)));
                    default:
                        throw new InvalidOpcodeException();
                }
            case 6:
                return new Instruction(RV32I.Opcodes.Or, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.or(new InstructionR(format)));
            case 7:
                return new Instruction(RV32I.Opcodes.And, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.and(new InstructionR(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction storeOpcode(InstructionBase i) throws InvalidOpcodeException {
        InstructionS is = new InstructionS(i);
        switch(is.getFunct3())
        {
            case 0:
                return new Instruction(RV32I.Opcodes.Sb, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.sb(new InstructionS(format)));
            case 1:
                return new Instruction(RV32I.Opcodes.Sh, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.sh(new InstructionS(format)));
            case 2:
                return new Instruction(RV32I.Opcodes.Sw, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.sw(new InstructionS(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction immOpcode(InstructionBase i) throws InvalidOpcodeException {
        InstructionI ii = new InstructionI(i);
        switch (ii.getFunct3())
        {
            case 0x0:
                return new Instruction(RV32I.Opcodes.Addi, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.addi(new InstructionI(format)));
            case 0x1:
                return new Instruction(RV32I.Opcodes.Slli, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.slli(new InstructionI(format)));
            case 0x2:
                return new Instruction(RV32I.Opcodes.Slti, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.slti(new InstructionI(format)));
            case 0x3:
                return new Instruction(RV32I.Opcodes.Sltiu, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.sltiu(new InstructionI(format)));
            case 0x4:
                return new Instruction(RV32I.Opcodes.Xori, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.xori(new InstructionI(format)));
            case 0x5:
                int imm = ii.getImmediate() >> 5;
                switch(imm)
                {
                    case 0:
                        return new Instruction(RV32I.Opcodes.Srli, i,
                                (InstructionBase format, InstructionRunner runner) -> runner.srli(new InstructionI(format)));
                    case 32:
                        return new Instruction(RV32I.Opcodes.Srai, i,
                                (InstructionBase format, InstructionRunner runner) -> runner.srai(new InstructionI(format)));
                    default:
                        throw new InvalidOpcodeException();
                }
            case 0x6:
                return new Instruction(RV32I.Opcodes.Ori, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.ori(new InstructionI(format)));
            case 0x7:
                return new Instruction(RV32I.Opcodes.Andi, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.andi(new InstructionI(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction loadOpcode(InstructionBase i) throws InvalidOpcodeException {
        InstructionI ii = new InstructionI(i);
        switch(ii.getFunct3())
        {
            case 0x0:
                return new Instruction(RV32I.Opcodes.Lb, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.lb(new InstructionI(format)));
            case 0x1:
                return new Instruction(RV32I.Opcodes.Lh, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.lh(new InstructionI(format)));
            case 0x2:
                return new Instruction(RV32I.Opcodes.Lw, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.lw(new InstructionI(format)));
            case 0x4:
                return new Instruction(RV32I.Opcodes.Lbu, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.lbu(new InstructionI(format)));
            case 0x5:
                return new Instruction(RV32I.Opcodes.Lhu, i,
                        (InstructionBase format, InstructionRunner runner) -> runner.lhu(new InstructionI(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }
}
