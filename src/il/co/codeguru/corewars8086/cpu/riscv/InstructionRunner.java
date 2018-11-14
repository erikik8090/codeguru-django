package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;

public class InstructionRunner {
    public static void addi(CpuStateRiscV state, InstructionI i)
    {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + i.getImmediate());
    }
}
