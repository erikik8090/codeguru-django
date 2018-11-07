package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.UnsupportedOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;

class InstructionDecoder {
    public static void decode_and_run(CpuState state, InstructionBase i) throws InvalidOpcodeException
    {
        switch(i.getOpcode())
        {
            case 0x13:
                InstructionRunner.addi(state, new InstructionI(i));
                break;
            default:
                throw new InvalidOpcodeException();
        }
    }
}
