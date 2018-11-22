package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;

class InstructionDecoder {

    private InstructionRunner runner;

    public InstructionDecoder(InstructionRunner runner)
    {
        this.runner = runner;
    }

    public void decode_and_run(CpuStateRiscV state, InstructionBase i) throws InvalidOpcodeException
    {
        switch(i.getOpcode())
        {
            case 0x13:
                runner.addi(state, new InstructionI(i));
                break;
            default:
                //TODO: Return this when all instructions are done
                // throw new InvalidOpcodeException();
        }
    }
}
