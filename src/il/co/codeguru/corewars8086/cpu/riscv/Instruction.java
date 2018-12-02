package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionBase;
import il.co.codeguru.corewars8086.memory.MemoryException;

import java.util.function.BiFunction;

public class Instruction {

    private InstructionInfo info;
    private InstructionBase instructionFormat;
    private Action action;

    public Instruction(InstructionInfo info,
                       InstructionBase format,
                       Action action)
    {
        this.info = info;
        this.instructionFormat = format;
        this.action = action;
    }

    public InstructionInfo getInfo()
    {
        return info;
    }

    public InstructionBase getFormat() {
        return instructionFormat;
    }

    public void execute(InstructionRunner runner) throws CpuException, MemoryException
    {
        action.apply(instructionFormat, runner);
    }

    @FunctionalInterface
    public interface Action{
        void apply(InstructionBase i, InstructionRunner runner) throws CpuException, MemoryException;
    }

    public static class InstructionInfo {
        final private String name;
        final private int opcode;
        final private int funct3;
        final private int funct7;

        InstructionInfo(String name, int type)
        {
            this(name, type, 0);
        }

        InstructionInfo(String name, int type, int funct3) {
            this(name, type, funct3, 0);
        }

        InstructionInfo(String name, int type, int funct3, int funct7){
            this.name = name;
            this.opcode = type;
            this.funct3 = funct3;
            this.funct7 = funct7;
        }
        public String getName() {return name;}

        public int getOpcode() {
            return opcode;
        }

        public int getFunct3() {
            return funct3;
        }

        public int getFunct7() {return funct7;}
    }
}
