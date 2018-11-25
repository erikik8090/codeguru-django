package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionI;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionS;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionU;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionUJ;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.utils.Logger;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

public class InstructionRunner {
    public void addi(InstructionI i, CpuStateRiscV state)
    {
        Logger.log("addi " + i.getRd() + ", " + i.getRs1() + ", "+ i.getImmediate());
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + i.getImmediate());
    }

    public void sw(InstructionS i, CpuStateRiscV state , RealModeMemory memory) throws MemoryException
    {
        Logger.log("sw " + i.getRs1() + ", " + i.getImm() + "(" + i.getRs2() + ")");
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)(state.getReg(i.getRs1()) + i.getImm())),state.getReg(i.getRs2()));
    }

    public void jal(InstructionUJ i, CpuStateRiscV state) throws MisalignedMemoryLoadException
    {
        Logger.log("jal " + i.getRd() + ", " + i.getImmediate());
        if(i.getImmediate() % 4 != 0) throw new MisalignedMemoryLoadException();
        state.setReg(i.getRd(), state.getPc() + 4);
        state.setPc(state.getPc() + i.getImmediate() - 4); // -4 to offset the pc+=4
    }
}
