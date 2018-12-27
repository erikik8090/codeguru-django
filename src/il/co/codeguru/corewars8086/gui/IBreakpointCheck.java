package il.co.codeguru.corewars8086.gui;


import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;

public interface IBreakpointCheck {
    boolean shouldBreak(CpuStateRiscV state);
}