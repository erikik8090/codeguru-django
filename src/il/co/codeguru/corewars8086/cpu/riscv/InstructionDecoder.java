package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.memory.MemoryException;

class InstructionDecoder {



    private InstructionRunner runner;

    public InstructionDecoder(InstructionRunner runner)
    {
        this.runner = runner;
    }

    public void decode_and_run(InstructionBase i) throws MemoryException, CpuException
    {
        switch(i.getOpcode())
        {
            case RV32I.OpcodeTypes.LOAD:
                loadOpcode(i);
                break;
            case RV32I.OpcodeTypes.OP_IMM:
                immOpcode(i);
                break;
            case RV32I.OpcodeTypes.AUIPC:
                runner.auipc(new InstructionU(i));
                break;
            case RV32I.OpcodeTypes.STORE:
                storeOpcode(i);
                break;
            case RV32I.OpcodeTypes.OP:
                registerOpcode(i);
                break;
            case RV32I.OpcodeTypes.LUI:
                runner.lui(new InstructionU(i));
                break;
            case RV32I.OpcodeTypes.BRANCH:
                branchOpcode(i);
                break;
            case RV32I.OpcodeTypes.JALR:
                runner.jalr(new InstructionI(i));
                break;
            case RV32I.OpcodeTypes.JAL:
                runner.jal(new InstructionUJ(i));
                break;
            default:
                throw new InvalidOpcodeException();
        }
    }

    private void branchOpcode(InstructionBase i) throws MisalignedMemoryLoadException, InvalidOpcodeException {
        InstructionSB sb = new InstructionSB(i);
        switch(sb.getFunct3())
        {
            case 0:
                runner.beq(sb);
                break;
            case 1:
                runner.bne(sb);
                break;
            case 4:
                runner.blt(sb);
                break;
            case 5:
                runner.bge(sb);
                break;
            case 6:
                runner.bltu(sb);
                break;
            case 7:
                runner.bgeu(sb);
                break;
            default:
                throw new InvalidOpcodeException();
        }
    }

    private void registerOpcode(InstructionBase i) throws InvalidOpcodeException {
        InstructionR ir = new InstructionR(i);
        switch(ir.getFunct3())
        {
            case 0:
                switch (ir.getFunct7())
                {
                    case 0:
                        runner.add(ir);
                        break;
                    case 32:
                        runner.sub(ir);
                        break;
                    default:
                        throw new InvalidOpcodeException();
                }
                break;
            case 1:
                runner.sll(ir);
                break;
            case 2:
                runner.slt(ir);
                break;
            case 3:
                runner.sltu(ir);
                break;
            case 4:
                runner.xor(ir);
                break;
            case 5:
                switch(ir.getFunct7())
                {
                    case 0:
                        runner.srl(ir);
                        break;
                    case 32:
                        runner.sra(ir);
                        break;
                    default:
                        throw new InvalidOpcodeException();
                }
                break;
            case 6:
                runner.or(ir);
                break;
            case 7:
                runner.and(ir);
                break;
            default:
                throw new InvalidOpcodeException();
        }
    }

    private void storeOpcode(InstructionBase i) throws MemoryException, InvalidOpcodeException {
        InstructionS is = new InstructionS(i);
        switch(is.getFunct3())
        {
            case 0:
                runner.sb(is);
                break;
            case 1:
                runner.sh(is);
                break;
            case 2:
                runner.sw(is);
                break;
            default:
                throw new InvalidOpcodeException();
        }
    }

    private void immOpcode(InstructionBase i) throws InvalidOpcodeException {
        InstructionI ii = new InstructionI(i);
        switch (ii.getFunct3())
        {
            case 0x0:
                runner.addi(ii);
                break;
            case 0x1:
                runner.slli(ii);
                break;
            case 0x2:
                runner.slti(ii);
                break;
            case 0x3:
                runner.sltiu(ii);
                break;
            case 0x4:
                runner.xori(ii);
                break;
            case 0x5:
                int imm = ii.getImmediate() >> 5;
                switch(imm)
                {
                    case 0:
                        runner.srli(ii);
                        break;
                    case 32:
                        runner.srai(ii);
                        break;
                    default:
                        throw new InvalidOpcodeException();
                }
                break;
            case 0x6:
                runner.ori(ii);
                break;
            case 0x7:
                runner.andi(ii);
                break;
            default:
                throw new InvalidOpcodeException();
        }
    }

    private void loadOpcode(InstructionBase i) throws MemoryException, InvalidOpcodeException {
        InstructionI ii = new InstructionI(i);
        switch(ii.getFunct3())
        {
            case 0x0:
                runner.lb(ii);
                break;
            case 0x1:
                runner.lh(ii);
                break;
            case 0x2:
                runner.lw(ii);
                break;
            case 0x4:
                runner.lbu(ii);
                break;
            case 0x5:
                runner.lhu(ii);
                break;
            default:
                throw new InvalidOpcodeException();
        }
    }
}
