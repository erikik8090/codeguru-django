package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.utils.Logger;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

public class InstructionRunner {

    private CpuStateRiscV state;
    private RealModeMemory memory;
    private CpuRiscV cpu;

    public InstructionRunner(CpuRiscV cpu) {
        this.cpu = cpu;
        this.state = cpu.getState();
        this.memory = cpu.getMemory();
    }

    public void addi(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + i.getImmediate());
    }

    public void add(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + state.getReg(i.getRs2()));
    }

    public void sub(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) - state.getReg(i.getRs2()));
    }

    public void auipc(InstructionU i) {
        state.setReg(i.getRd(), state.getPc() + (i.getImmediate() << 12)); // TODO:Set this in the U type instruciton
    }

    public void lui(InstructionU i) {
        int mask = (1 << 12) - 1;
        state.setReg(i.getRd(), (state.getReg(i.getRd()) & mask) | (i.getImmediate() << 12));
    }

    public void sw(InstructionS i) throws MemoryException {
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImm())), state.getReg(i.getRs2()));
    }

    public void sh(InstructionS i) throws MemoryException {
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImm())), (short) state.getReg(i.getRs2()));
    }

    public void sb(InstructionS i) throws MemoryException {
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImm())), (byte) state.getReg(i.getRs2()));
    }


    public void andi(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) & i.getImmediate());
    }

    public void and(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) & state.getReg(i.getRs2()));
    }

    public void ori(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) | i.getImmediate());
    }

    public void or(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) | state.getReg(i.getRs2()));
    }

    public void xori(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) ^ i.getImmediate());
    }

    public void xor(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) ^ state.getReg(i.getRs2()));
    }

    public void slli(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) << i.getImmediate());
    }

    public void sll(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) << state.getReg(i.getRs2()));
    }

    public void srli(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >>> i.getImmediate());
    }

    public void srl(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >>> state.getReg(i.getRs2()));
    }

    public void srai(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >> i.getImmediate());
    }

    public void sra(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) >> state.getReg(i.getRs2()));
    }

    public void slti(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) < i.getImmediate() ? 1 : 0);
    }

    public void slt(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) < state.getReg(i.getRs2()) ? 1 : 0);
    }

    public void sltiu(InstructionI i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + 0x80000000 < i.getImmediate() + 0x80000000 ? 1 : 0);
    }

    public void sltu(InstructionR i) {
        state.setReg(i.getRd(), state.getReg(i.getRs1()) + 0x80000000 < state.getReg(i.getRs2()) + 0x80000000 ? 1 : 0);
    }


    public void lw(InstructionI i) throws MemoryException {
        state.setReg(i.getRd(), memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImmediate()))));
    }

    public void lh(InstructionI i) throws MemoryException {
        state.setReg(i.getRd(), memory.read16Bit(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImmediate()))));
    }

    public void lhu(InstructionI i) throws MemoryException {
        int val = memory.read16Bit(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImmediate())));
        state.setReg(i.getRd(), val & 0xFFFF);
    }

    public void lb(InstructionI i) throws MemoryException {
        state.setReg(i.getRd(), memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImmediate()))));
    }

    public void lbu(InstructionI i) throws MemoryException {
        int val = memory.readByte(new RealModeAddress(ARENA_SEGMENT, (short) (state.getReg(i.getRs1()) + i.getImmediate())));
        state.setReg(i.getRd(), val & 0xFF);
    }

    private void jump(CpuStateRiscV state, int immediate) throws MisalignedMemoryLoadException {
        if (immediate % 4 != 0) throw new MisalignedMemoryLoadException();
        state.setPc(state.getPc() + immediate - 4);
    }

    public void jal(InstructionUJ i) throws MisalignedMemoryLoadException {
        state.setReg(i.getRd(), state.getPc() + 4);
        jump(state, i.getImmediate());
    }

    public void jalr(InstructionI i) throws MisalignedMemoryLoadException {
        state.setReg(i.getRd(), state.getPc() + 4);
        jump(state, state.getReg(i.getRs1()) + i.getImmediate());
    }

    public void beq(InstructionSB i) throws MisalignedMemoryLoadException {
        Logger.log("Immediate for beq:" + i.getImm());
        if (state.getReg(i.getRs1()) == state.getReg(i.getRs2())) jump(state, i.getImm());
    }


    public void bne(InstructionSB i) throws MisalignedMemoryLoadException {
        if (state.getReg(i.getRs1()) != state.getReg(i.getRs2())) jump(state, i.getImm());
    }

    public void blt(InstructionSB i) throws MisalignedMemoryLoadException {
        if (state.getReg(i.getRs1()) < state.getReg(i.getRs2())) jump(state, i.getImm());
    }

    public void bltu(InstructionSB i) throws MisalignedMemoryLoadException {
        if (state.getReg(i.getRs1()) + 0x80000000 < state.getReg(i.getRs2()) + 0x80000000) jump(state, i.getImm());
    }

    public void bge(InstructionSB i) throws MisalignedMemoryLoadException {
        if (state.getReg(i.getRs1()) >= state.getReg(i.getRs2())) jump(state, i.getImm());
    }

    public void bgeu(InstructionSB i) throws MisalignedMemoryLoadException {
        if (state.getReg(i.getRs1()) + 0x80000000 >= state.getReg(i.getRs2()) + 0x80000000) jump(state, i.getImm());
    }


}
