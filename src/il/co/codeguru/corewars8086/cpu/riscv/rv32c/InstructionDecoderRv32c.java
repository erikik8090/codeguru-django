package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.riscv.Instruction;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatI;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatR;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatU;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatBase;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCI;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCR;
import il.co.codeguru.corewars8086.utils.Logger;

public class InstructionDecoderRv32c {
    public Instruction decode(CInstructionFormatBase i) {
        CInstructionFormatCI ci = new CInstructionFormatCI(i);
        switch(i.getOpcode())
        {
            case RV32C.OpcodeTypes.C0:

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
                }
                break;
        }

        return null;
    }

}
