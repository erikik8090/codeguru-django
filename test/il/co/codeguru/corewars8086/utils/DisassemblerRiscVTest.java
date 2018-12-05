package il.co.codeguru.corewars8086.utils;

import il.co.codeguru.corewars8086.cpu.riscv.RV32I;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.InstructionFormatBase;
import il.co.codeguru.corewars8086.utils.disassembler.DisassemblerRiscV;
import il.co.codeguru.corewars8086.utils.disassembler.IDisassembler;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class DisassemblerRiscVTest {

    IDisassembler disassembler;

    @Test
    public void pass()
    {
        assertTrue(true);
    }

    private byte[] loadInstructions(InstructionFormatBase[] instructions)
    {
        byte[] result = new byte[instructions.length * 4];
        int index = 0;
        for(InstructionFormatBase instruction : instructions)
        {
            int raw = instruction.getRaw();
            result[index]  = (byte)(raw & 0xFF);
            result[index+1]= (byte)((raw >> 8) & 0xFF);
            result[index+2]= (byte)((raw >> 16)& 0xFF);
            result[index+3]= (byte)((raw >> 24)& 0xFF);
            index += 4;
        }
        return result;
    }

    @Test
    public void testSingleAdd() throws IDisassembler.DisassemblerException
    {
        byte[] testData = loadInstructions(new InstructionFormatBase[]{
                RV32I.instructionR(RV32I.Opcodes.Add, 3,1,2)
        });

        disassembler = new DisassemblerRiscV(testData,0,4);
        String opcode = disassembler.nextOpcode();

        assertEquals("ADD #3, #1, #2", opcode);
        assertEquals(4, disassembler.lastOpcodeSize());
    }

    @Test
    public void testStartFromMiddle() throws IDisassembler.DisassemblerException
    {
        byte[] testData = loadInstructions(new InstructionFormatBase[]{
                RV32I.instructionI(RV32I.Opcodes.Addi, 1,1,4),
                RV32I.instructionS(RV32I.Opcodes.Sw, 1,2, 0),
                RV32I.instructionUJ(RV32I.Opcodes.Jal, 0, 8)
        });

        disassembler = new DisassemblerRiscV(testData, 4, 12);

        String opcode = disassembler.nextOpcode();
        assertEquals("SW #2, 0 (#1)", opcode);
        assertEquals(4, disassembler.lastOpcodeSize());

        opcode = disassembler.nextOpcode();
        assertEquals("JAL #0, 8", opcode);
        assertEquals(4, disassembler.lastOpcodeSize());

        disassembler.reset(4, 12);

        opcode = disassembler.nextOpcode();
        assertEquals("SW #2, 0 (#1)", opcode);
        assertEquals(4, disassembler.lastOpcodeSize());

        opcode = disassembler.nextOpcode();
        assertEquals("JAL #0, 8", opcode);
        assertEquals(4, disassembler.lastOpcodeSize());
    }

    @Test(expected = IDisassembler.DisassemblerException.class)
    public void testFailNonExistentInstruction() throws IDisassembler.DisassemblerException
    {
        byte[] testData = new byte[]{0,0,0,0};
        disassembler = new DisassemblerRiscV(testData, 0, 4);

        disassembler.nextOpcode();
    }
}
