package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.exceptions.InvalidOpcodeException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionS;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionUJ;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.utils.Logger;

class InstructionDecoder {

    private InstructionRunner runner;

    public InstructionDecoder(InstructionRunner runner)
    {
        this.runner = runner;
    }

    public void decode_and_run(CpuStateRiscV state, InstructionBase i, RealModeMemory memory) throws InvalidOpcodeException, MemoryException, CpuException
    {
        switch(i.getOpcode())
        {
            case 0x13:
                runner.addi(new InstructionI(i), state);
                break;
            case 0x23:
                runner.sw(new InstructionS(i), state, memory);
                break;
            case 0x6f:
                runner.jal(new InstructionUJ(i), state);
            default:
                Logger.log("Unknown instruction- opcode: " + i.getOpcode() + ", instruction: " + i.getRaw());
                //TODO: Return this when all instructions are done
                // throw new InvalidOpcodeException();
        }
    }
}
