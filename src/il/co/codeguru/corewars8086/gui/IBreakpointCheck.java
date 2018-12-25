package il.co.codeguru.corewars8086.gui;


import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.x86.CpuState;

public interface IBreakpointCheck {
    boolean shouldBreak(CpuStateRiscV state);
}