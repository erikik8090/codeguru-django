package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.utils.Logger;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

public class InstructionRunner {
    public void addi(InstructionI i, CpuStateRiscV state)
    {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + i.getImmediate());
    }

    public void add(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + state.getReg(i.getRs2()) );
    }

    public void sub(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) - state.getReg(i.getRs2()) );
    }

    public void auipc(InstructionU i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getPc() + (i.getImmediate() << 12)); // TODO:Set this in the U type instruciton
    }

    public void lui(InstructionU i, CpuStateRiscV state) {
        int mask = (1<<12)-1;
        state.setReg(i.getRd(), (state.getReg(i.getRd()) & mask)|(i.getImmediate() << 12));
    }

    public void sw(InstructionS i, CpuStateRiscV state , RealModeMemory memory) throws MemoryException
    {
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)(state.getReg(i.getRs1()) + i.getImm())),state.getReg(i.getRs2()));
    }

    public void jal(InstructionUJ i, CpuStateRiscV state) throws MisalignedMemoryLoadException
    {
        if(i.getImmediate() % 4 != 0) throw new MisalignedMemoryLoadException();
        state.setReg(i.getRd(), state.getPc() + 4);
        state.setPc(state.getPc() + i.getImmediate() - 4 );
    }

    public void andi(InstructionI i, CpuStateRiscV state)
    {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) & i.getImmediate());
    }

    public void and(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) & state.getReg(i.getRs2()) );
    }

    public void ori(InstructionI i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) | i.getImmediate());
    }

    public void or(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) | state.getReg(i.getRs2()));
    }

    public void xori(InstructionI i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) ^ i.getImmediate());
    }

    public void xor(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) ^ state.getReg(i.getRs2()));
    }

    public void slli(InstructionI i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) << i.getImmediate());
    }

    public void sll(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) << state.getReg(i.getRs2()));
    }

    public void srli(InstructionI i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >>> i.getImmediate());
    }

    public void srl(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >>> state.getReg(i.getRs2()));
    }

    public void srai(InstructionI i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >> i.getImmediate());
    }

    public void sra(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >> state.getReg(i.getRs2()));
    }

    public void slti(InstructionI i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) < i.getImmediate() ? 1 : 0);
    }

    public void slt(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) < state.getReg(i.getRs2()) ? 1 : 0);
    }

    public void sltiu(InstructionI i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + 0x80000000 < i.getImmediate() + 0x80000000 ? 1 : 0);
    }

    public void sltu(InstructionR i, CpuStateRiscV state) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + 0x80000000 < state.getReg(i.getRs2()) + 0x80000000 ? 1 : 0);
    }



}
