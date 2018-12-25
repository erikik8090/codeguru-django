package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.memory.MemoryException;

class InstructionDecoder {
    public Instruction decode(InstructionFormatBase i) throws MemoryException, CpuException
    {
        switch(i.getOpcode())
        {
            case RV32I.OpcodeTypes.LOAD:
                return loadOpcode(i);
            case RV32I.OpcodeTypes.OP_IMM:
                return immOpcode(i);
            case RV32I.OpcodeTypes.AUIPC:
                return new Instruction(RV32I.Opcodes.Auipc, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.auipc(new InstructionFormatU(format)));
            case RV32I.OpcodeTypes.STORE:
                return storeOpcode(i);
            case RV32I.OpcodeTypes.OP:
                return registerOpcode(i);
            case RV32I.OpcodeTypes.LUI:
                return new Instruction(RV32I.Opcodes.Lui, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.lui(new InstructionFormatU(format)));
            case RV32I.OpcodeTypes.BRANCH:
                return branchOpcode(i);
            case RV32I.OpcodeTypes.JALR:
                return new Instruction(RV32I.Opcodes.Jalr, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.jalr(new InstructionFormatI(format)));
            case RV32I.OpcodeTypes.JAL:
                return new Instruction(RV32I.Opcodes.Jal, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.jal(new InstructionFormatUJ(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction branchOpcode(InstructionFormatBase i) throws InvalidOpcodeException {
        InstructionFormatSB sb = new InstructionFormatSB(i);
        switch(sb.getFunct3())
        {
            case 0:
                return new Instruction(RV32I.Opcodes.Beq, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.beq(new InstructionFormatSB(format)));
            case 1:
                return new Instruction(RV32I.Opcodes.Bne, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.bne(new InstructionFormatSB(format)));
            case 4:
                return new Instruction(RV32I.Opcodes.Blt, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.blt(new InstructionFormatSB(format)));
            case 5:
                return new Instruction(RV32I.Opcodes.Bge, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.bge(new InstructionFormatSB(format)));
            case 6:
                return new Instruction(RV32I.Opcodes.Bltu, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.bltu(new InstructionFormatSB(format)));
            case 7:
                return new Instruction(RV32I.Opcodes.Bgeu, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.bgeu(new InstructionFormatSB(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction registerOpcode(InstructionFormatBase i) throws InvalidOpcodeException {
        InstructionFormatR ir = new InstructionFormatR(i);
        switch(ir.getFunct3())
        {
            case 0:
                switch (ir.getFunct7())
                {
                    case 0:
                        return new Instruction(RV32I.Opcodes.Add, i,
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.add(new InstructionFormatR(format)));
                    case 32:
                        return new Instruction(RV32I.Opcodes.Sub, i,
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.sub(new InstructionFormatR(format)));
                    default:
                        throw new InvalidOpcodeException();
                }
            case 1:
                return new Instruction(RV32I.Opcodes.Sll, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.sll(new InstructionFormatR(format)));
            case 2:
                return new Instruction(RV32I.Opcodes.Slt, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.slt(new InstructionFormatR(format)));
            case 3:
                return new Instruction(RV32I.Opcodes.Sltu, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.sltu(new InstructionFormatR(format)));
            case 4:
                return new Instruction(RV32I.Opcodes.Xor, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.xor(new InstructionFormatR(format)));
            case 5:
                switch(ir.getFunct7())
                {
                    case 0:
                        return new Instruction(RV32I.Opcodes.Srl, i,
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.srl(new InstructionFormatR(format)));
                    case 32:
                        return new Instruction(RV32I.Opcodes.Sra, i,
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.sra(new InstructionFormatR(format)));
                    default:
                        throw new InvalidOpcodeException();
                }
            case 6:
                return new Instruction(RV32I.Opcodes.Or, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.or(new InstructionFormatR(format)));
            case 7:
                return new Instruction(RV32I.Opcodes.And, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.and(new InstructionFormatR(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction storeOpcode(InstructionFormatBase i) throws InvalidOpcodeException {
        InstructionFormatS is = new InstructionFormatS(i);
        switch(is.getFunct3())
        {
            case 0:
                return new Instruction(RV32I.Opcodes.Sb, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.sb(new InstructionFormatS(format)));
            case 1:
                return new Instruction(RV32I.Opcodes.Sh, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.sh(new InstructionFormatS(format)));
            case 2:
                return new Instruction(RV32I.Opcodes.Sw, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.sw(new InstructionFormatS(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction immOpcode(InstructionFormatBase i) throws InvalidOpcodeException {
        InstructionFormatI ii = new InstructionFormatI(i);
        switch (ii.getFunct3())
        {
            case 0x0:
                return new Instruction(RV32I.Opcodes.Addi, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.addi(new InstructionFormatI(format)));
            case 0x1:
                return new Instruction(RV32I.Opcodes.Slli, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.slli(new InstructionFormatI(format)));
            case 0x2:
                return new Instruction(RV32I.Opcodes.Slti, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.slti(new InstructionFormatI(format)));
            case 0x3:
                return new Instruction(RV32I.Opcodes.Sltiu, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.sltiu(new InstructionFormatI(format)));
            case 0x4:
                return new Instruction(RV32I.Opcodes.Xori, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.xori(new InstructionFormatI(format)));
            case 0x5:
                int imm = ii.getImmediate() >> 5;
                switch(imm)
                {
                    case 0:
                        return new Instruction(RV32I.Opcodes.Srli, i,
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.srli(new InstructionFormatI(format)));
                    case 32:
                        return new Instruction(RV32I.Opcodes.Srai, i,
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.srai(new InstructionFormatI(format)));
                    default:
                        throw new InvalidOpcodeException();
                }
            case 0x6:
                return new Instruction(RV32I.Opcodes.Ori, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.ori(new InstructionFormatI(format)));
            case 0x7:
                return new Instruction(RV32I.Opcodes.Andi, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.andi(new InstructionFormatI(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }

    private Instruction loadOpcode(InstructionFormatBase i) throws InvalidOpcodeException {
        InstructionFormatI ii = new InstructionFormatI(i);
        switch(ii.getFunct3())
        {
            case 0x0:
                return new Instruction(RV32I.Opcodes.Lb, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.lb(new InstructionFormatI(format)));
            case 0x1:
                return new Instruction(RV32I.Opcodes.Lh, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.lh(new InstructionFormatI(format)));
            case 0x2:
                return new Instruction(RV32I.Opcodes.Lw, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.lw(new InstructionFormatI(format)));
            case 0x4:
                return new Instruction(RV32I.Opcodes.Lbu, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.lbu(new InstructionFormatI(format)));
            case 0x5:
                return new Instruction(RV32I.Opcodes.Lhu, i,
                        (InstructionFormatBase format, InstructionRunner runner) -> runner.lhu(new InstructionFormatI(format)));
            default:
                throw new InvalidOpcodeException();
        }
    }
}
