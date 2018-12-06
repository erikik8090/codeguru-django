package il.co.codeguru.corewars8086.cpu.riscv.rv32c;

import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.Instruction;
import il.co.codeguru.corewars8086.cpu.riscv.InstructionRunner;
import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatR;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatBase;
import il.co.codeguru.corewars8086.cpu.riscv.rv32c.instruction_formats.CInstructionFormatCR;
import il.co.codeguru.corewars8086.utils.Logger;

public class InstructionDecoderRv32c {
    public Instruction decode(CInstructionFormatBase i) throws InvalidOpcodeException {

        switch(i.getOpcode())
        {
            case RV32C.OpcodeTypes.C0:

                break;
            case RV32C.OpcodeTypes.C1:

                break;
            case RV32C.OpcodeTypes.C2:
                Logger.log("here1: " + i.getFunct3());
                switch(i.getFunct3())
                {
                    case 4:
                        Logger.log("here2");
                        CInstructionFormatCR cr = new CInstructionFormatCR(i);
                        if((cr.getFunct4() & 1) == 1)
                        {
                            Logger.log("here3");
                            if(cr.getRs1() != 0 && cr.getRs2() != 0)
                            {
                                Logger.log("here4");
                                return new Instruction(RV32I.Opcodes.Add, RV32I.instructionR(RV32I.Opcodes.Add, cr.getRs1(), cr.getRs1(), cr.getRs2()),
                                        (InstructionFormatBase format, InstructionRunner runner) -> runner.add(new InstructionFormatR(format)));
                            }
                        }
                        break;
                }
                break;
        }

        return null;
    }

}
