package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.riscv.Instruction;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.*;
import il.co.codeguru.corewars8086.utils.Logger;

public class InstructionDecoderRv32c {
    public Instruction decode(CInstructionFormatBase i) {
        CInstructionFormatCI ci = new CInstructionFormatCI(i);
        CInstructionFormatCS cs = new CInstructionFormatCS(i);
        CInstructionFormatCB cb = new CInstructionFormatCB(i);
        switch(i.getOpcode())
        {
            case RV32C.OpcodeTypes.C0:
                CInstructionFormatCIW ciw = new CInstructionFormatCIW(i);
                switch(i.getFunct3())
                {
                    case 0:
                        int bit3 = ciw.getImmediate() & 1;
                        int bit2 = (ciw.getImmediate() >> 1) & 1;
                        int bit96= (ciw.getImmediate() >> 2) & 15;
                        int bit54= (ciw.getImmediate() >> 6) & 3;
                        int nzuimm = (bit2 | (bit3 << 1) | (bit54 << 2) | (bit96 << 4)) << 2;
                        return new Instruction(RV32C.Opcodes.CADDI4SPN, RV32I.instructionI(RV32I.Opcodes.Addi, ciw.getRd(), 2, nzuimm),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.addi(new InstructionFormatI(format)));
                    case 2:
                        CInstructionFormatCL cl = new CInstructionFormatCL(i);
                        return new Instruction(RV32C.Opcodes.CLW, RV32I.instructionI(RV32I.Opcodes.Lw, cl.getRd(), cl.getRs1(), cl.getImmediate()),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.lw(new InstructionFormatI(format)));
                    case 6:
                        return new Instruction(RV32C.Opcodes.CSW, RV32I.instructionS(RV32I.Opcodes.Sw, cs.getRs1(), cs.getRs2(), cs.getImmediate()),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.sw(new InstructionFormatS(format)));
                }
                break;
            case RV32C.OpcodeTypes.C1:
                switch(i.getFunct3())
                {
                    case 0:
                        if(ci.getRs1() != 0)
                        {
                            return new Instruction(RV32C.Opcodes.CADDI, RV32I.instructionI(RV32I.Opcodes.Addi, ci.getRs1(), ci.getRs1(), ci.getImmediate()),
                                    (InstructionFormatBase format, InstructionRunner runner) -> runner.addi(new InstructionFormatI(format)));
                        }
                        break;
                    case 2:
                        return new Instruction(RV32C.Opcodes.CLI, RV32I.instructionI(RV32I.Opcodes.Addi, ci.getRs1(), 0, ci.getImmediate()),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.addi(new InstructionFormatI(format)));
                    case 3:
                        if(ci.getRs1() == 2)
                        {
                            int bit5 = (ci.getImmediate() >> 2) & 1;
                            int bit78 = (ci.getImmediate() >> 3) & 2;
                            int bit6 = (ci.getImmediate() >> 5) & 1;
                            int bit4 = (ci.getImmediate() >> 6) & 1;
                            int bit9 = (ci.getImmediate() >> 7) & 1;
                            int nzimm = (bit4 & (bit5 << 1) & (bit6 << 2) & (bit78 << 3) & (bit9 << 4)) << 4;
                            return new Instruction(RV32C.Opcodes.CADDI16SP, RV32I.instructionI(RV32I.Opcodes.Addi, 2,2, nzimm),
                                    (InstructionFormatBase format, InstructionRunner runner) -> runner.addi(new InstructionFormatI(format)));
                        }
                        else if (ci.getRs1() != 0)
                        {
                            return new Instruction(RV32C.Opcodes.CLUI, RV32I.instructionU(RV32I.Opcodes.Lui, ci.getRs1(), ci.getImmediate()),
                                    (InstructionFormatBase format, InstructionRunner runner) -> runner.lui(new InstructionFormatU(format)));
                        }
                        break;
                    case 4:
                        if(cb.getFunct2() != 3)
                        {
                            switch(cb.getFunct2())
                            {
                                case 0:
                                    return new Instruction(RV32C.Opcodes.CSRLI, RV32I.instructionI(RV32I.Opcodes.Srli, cb.getRs1(), cb.getRs1(), cb.getImmediate()),
                                            (InstructionFormatBase format, InstructionRunner runner) -> runner.srli(new InstructionFormatI(format)));
                                case 1:
                                    return new Instruction(RV32C.Opcodes.CSRAI, RV32I.instructionI(RV32I.Opcodes.Srai, cb.getRs1(), cb.getRs1(), cb.getImmediate()),
                                            (InstructionFormatBase format, InstructionRunner runner) -> runner.srai(new InstructionFormatI(format)));
                                case 2:
                                    return new Instruction(RV32C.Opcodes.CANDI, RV32I.instructionI(RV32I.Opcodes.Andi, cb.getRs1(), cb.getRs1(), cb.getImmediate()),
                                            (InstructionFormatBase format, InstructionRunner runner) -> runner.andi(new InstructionFormatI(format)));
                            }
                        }
                        else if(((cs.getFunct6() >> 2) & 1) == 0)
                        {
                            switch(cs.getFunct2())
                            {
                                case 0:
                                    return new Instruction(RV32C.Opcodes.CSUB, RV32I.instructionR(RV32I.Opcodes.Sub, cs.getRs1(), cs.getRs1(), cs.getRs2()),
                                            (InstructionFormatBase format, InstructionRunner runner) -> runner.sub(new InstructionFormatR(format)));
                                case 1:
                                    return new Instruction(RV32C.Opcodes.CXOR, RV32I.instructionR(RV32I.Opcodes.Xor, cs.getRs1(), cs.getRs1(), cs.getRs2()),
                                            (InstructionFormatBase format, InstructionRunner runner) -> runner.xor(new InstructionFormatR(format)));
                                case 2:
                                    return new Instruction(RV32C.Opcodes.COR, RV32I.instructionR(RV32I.Opcodes.Or, cs.getRs1(), cs.getRs1(), cs.getRs2()),
                                            (InstructionFormatBase format, InstructionRunner runner) -> runner.or(new InstructionFormatR(format)));
                                case 3:
                                    return new Instruction(RV32C.Opcodes.CAND, RV32I.instructionR(RV32I.Opcodes.And, cs.getRs1(), cs.getRs1(), cs.getRs2()),
                                            (InstructionFormatBase format, InstructionRunner runner) -> runner.and(new InstructionFormatR(format)));
                            }
                            break;
                        }
                    case 6:
                        return new Instruction(RV32C.Opcodes.CBEQZ, RV32I.instructionSB(RV32I.Opcodes.Beq, cb.getRs1(), 0, cb.getBranchImmediate()),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.beq(new InstructionFormatSB(format), 2));
                    case 7:
                        return new Instruction(RV32C.Opcodes.CBEQZ, RV32I.instructionSB(RV32I.Opcodes.Beq, cb.getRs1(), 0, cb.getBranchImmediate()),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.bne(new InstructionFormatSB(format), 2));
                }
                break;
            case RV32C.OpcodeTypes.C2:
                switch(i.getFunct3())
                {
                    case 0:
                        return new Instruction(RV32C.Opcodes.CSLLI, RV32I.instructionI(RV32I.Opcodes.Slli, ci.getRs1(), ci.getRs1(), ci.getImmediate()),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.slli(new InstructionFormatI(format)));
                    case 2:
                        int bit76 = ci.getUnsignedImmediate() & 3;
                        int bit42 = (ci.getUnsignedImmediate() >> 2) & 7;
                        int bit5  = (ci.getUnsignedImmediate() >> 5) & 1;
                        int uimm = (bit42 | (bit5 << 3) | (bit76 << 4)) << 2;
                        return new Instruction(RV32C.Opcodes.CLWSP, RV32I.instructionI(RV32I.Opcodes.Lw, ci.getRs1(), 2, uimm),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.lw(new InstructionFormatI(format)));
                    case 4:
                        CInstructionFormatCR cr = new CInstructionFormatCR(i);
                        if((cr.getFunct4() & 1) == 1)
                        {
                            if(cr.getRs1() != 0 && cr.getRs2() != 0) //c.add
                            {
                                return new Instruction(RV32C.Opcodes.CADD, RV32I.instructionR(RV32I.Opcodes.Add, cr.getRs1(), cr.getRs1(), cr.getRs2()),
                                        (InstructionFormatBase format, InstructionRunner runner) -> runner.add(new InstructionFormatR(format)));
                            }
                            else if(cr.getRs1() != 0 && cr.getRs2() == 0)
                            {
                                return new Instruction(RV32C.Opcodes.CJALR, RV32I.instructionI(RV32I.Opcodes.Jalr, 1, cr.getRs1(), 0),
                                        (InstructionFormatBase format, InstructionRunner runner) -> runner.jalr(new InstructionFormatI(format), 2));
                            }
                        }
                        else
                        {
                            if(cr.getRs1() != 0 && cr.getRs2() != 0)
                            {
                                return new Instruction(RV32C.Opcodes.CMV, RV32I.instructionR(RV32I.Opcodes.Add, cr.getRs1(), 0, cr.getRs2()),
                                        (InstructionFormatBase format, InstructionRunner runner) -> runner.add(new InstructionFormatR(format)));
                            }
                            else if(cr.getRs1() != 0 && cr.getRs2() == 0) // c.jr
                            {
                                return new Instruction(RV32C.Opcodes.CJR, RV32I.instructionI(RV32I.Opcodes.Jalr, 0, cr.getRs1(), 0),
                                        (InstructionFormatBase format, InstructionRunner runner) -> runner.jalr(new InstructionFormatI(format), 2));
                            }
                        }
                        break;
                    case 6:
                        CInstructionFormatCSS css = new CInstructionFormatCSS(i);
                        int cssbit76 = css.getImmediate() & 3;
                        int cssbit52 = (css.getImmediate() >> 2) & 15;
                        int cssuimm = (cssbit52 | (cssbit76 << 4)) << 2;
                        return new Instruction(RV32C.Opcodes.CSWSP, RV32I.instructionS(RV32I.Opcodes.Sw, 2, css.getRs2(), cssuimm),
                                (InstructionFormatBase format, InstructionRunner runner) -> runner.sw(new InstructionFormatS(format)));
                }
                break;
        }

        return null;
    }

}
