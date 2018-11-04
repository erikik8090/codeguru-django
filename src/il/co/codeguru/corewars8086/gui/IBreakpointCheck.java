package il.co.codeguru.corewars8086.gui;


import il.co.codeguru.corewars8086.cpu.x86.CpuState;

public interface IBreakpointCheck {
    boolean shouldBreak(CpuState state);
}