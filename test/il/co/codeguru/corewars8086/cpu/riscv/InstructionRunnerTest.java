package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.cpu.exceptions.MisalignedMemoryLoadException;
import il.co.codeguru.corewars8086.cpu.riscv.instruction_formats.*;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemory;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;
import il.co.codeguru.corewars8086.utils.Logger;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;
import static org.junit.Assert.*;

@RunWith(JUnitParamsRunner.class)
public class InstructionRunnerTest {
    private CpuStateRiscV state;
    private InstructionRunner runner;
    private RealModeMemory memory;

    @Before
    public void setUp() {
        state = new CpuStateRiscV();
        runner = new InstructionRunner();
        memory = new RealModeMemoryImpl();
        Logger.setTestingMode();

    }

    @Test
    @Parameters({
            " 0, 10, 10",
            " 5,  5, 10",
            " 5, -1,  4",
            " 0, -1, -1",
            "-1, -1, -2",
            "2147483647, 1, -2147483648"
    })
    public void testAddi(int reg, int imm, int expected)
    {
        state.setReg(5, reg);
        InstructionI i = new InstructionI(0, 2, 0, 5, imm);
        runner.addi(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            " 0, 10, 40960",
            " 5,  5,  20485",
            " 5, -1, -4091",
            " 0, -1, -4096",
            "-1, -1, -1",
            "-1,  0, 4095"
    })
    public void testLui(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionU i = new InstructionU(0, 1, imm);
        runner.lui(i, state);
        assertEquals(expected, state.getReg(1));
    }

    @Test
    @Parameters({
            " 0, 10, 40960",
            " 5,  5,  20485",
            " 5, -1, -4091",
            " 0, -1, -4096",
            "-1, -1, -4097",
            "-1,  0, -1"
    })
    public void testAuipc(int pc, int imm, int expected)
    {
        state.setPc(pc);
        InstructionU i = new InstructionU(0, 1, imm);
        runner.auipc(i, state);
        assertEquals(expected, state.getReg(1));
    }

    @Test
    @Parameters({
            " 0, 10, 10",
            " 5,  5, 10",
            " 5, -1,  4",
            " 0, -1, -1",
            "-1, -1, -2",
            "2147483647, 1, -2147483648"
    })
    public void testAdd(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.add(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    @Parameters({
            " 10, 0, 10",
            " 10,  5, 5",
            " 4, -1,  5",
            " 1, 2, -1",
            "-1, -1, 0",
            "-2147483648, 1, 2147483647"
    })
    public void testSub(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.sub(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    public void testSw() throws MemoryException
    {
        state.setReg(1,5);
        InstructionS i = new InstructionS(0,2,0,1,0);
        runner.sw(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));

        state.setReg(1,5);
        state.setReg(2, 12);
         i = new InstructionS(0,2,2,1,0);
        runner.sw(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)12)));

        state.setReg(1,5);
        state.setReg(2, 12);
        i = new InstructionS(0,2,2,1,15);
        runner.sw(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)27)));

         i = new InstructionS(0,2,0,0,0);
        runner.sw(i,state,memory);
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));
    }

    @Test
    public void testSh() throws MemoryException
    {
        state.setReg(1,5);
        InstructionS i = new InstructionS(0,2,0,1,0);
        runner.sh(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));

        state.setReg(1,5);
        state.setReg(2, 12);
        i = new InstructionS(0,2,2,1,0);
        runner.sh(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)12)));

        state.setReg(1,5);
        state.setReg(2, 12);
        i = new InstructionS(0,2,2,1,15);
        runner.sh(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)27)));

        i = new InstructionS(0,2,0,0,0);
        runner.sh(i,state,memory);
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));
    }

    @Test
    public void testSb() throws MemoryException
    {
        state.setReg(1,5);
        InstructionS i = new InstructionS(0,2,0,1,0);
        runner.sb(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));

        state.setReg(1,5);
        state.setReg(2, 12);
        i = new InstructionS(0,2,2,1,0);
        runner.sb(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)12)));

        state.setReg(1,5);
        state.setReg(2, 12);
        i = new InstructionS(0,2,2,1,15);
        runner.sb(i,state,memory);
        assertEquals(5, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)27)));

        i = new InstructionS(0,2,0,0,0);
        runner.sb(i,state,memory);
        assertEquals(0, memory.read32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0)));
    }

    @Test
    public void testLw() throws MemoryException
    {
        state.setReg(1, 0);
        state.setReg(2,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), 17);
        InstructionI i = new InstructionI(0,2,0,1,0);
        runner.lw(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)15), 17);
        i = new InstructionI(0,2,0,1,0);
        runner.lw(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)35), 17);
        i = new InstructionI(0,2,0,1,20);
        runner.lw(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 0);
        state.setReg(2,0);
        memory.write32Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), -1);
        i = new InstructionI(0,2,0,1,0);
        runner.lw(i, state, memory);
        assertEquals(-1, state.getReg(2));
    }

    @Test
    public void testLh() throws MemoryException
    {
        state.setReg(1, 0);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)17);
        InstructionI i = new InstructionI(0,2,0,1,0);
        runner.lh(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)15), (short)17);
        i = new InstructionI(0,2,0,1,0);
        runner.lh(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)35), (short)17);
        i = new InstructionI(0,2,0,1,20);
        runner.lh(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 0);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)(-1));
        i = new InstructionI(0,2,0,1,0);
        runner.lh(i, state, memory);
        assertEquals(-1, state.getReg(2));
    }

    @Test
    public void testLhu() throws MemoryException
    {
        state.setReg(1, 0);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)17);
        InstructionI i = new InstructionI(0,2,0,1,0);
        runner.lhu(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)15), (short)17);
        i = new InstructionI(0,2,0,1,0);
        runner.lhu(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)35), (short)17);
        i = new InstructionI(0,2,0,1,20);
        runner.lhu(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 0);
        state.setReg(2,0);
        memory.write16Bit(new RealModeAddress(ARENA_SEGMENT, (short)0), (short)(-1));
        i = new InstructionI(0,2,0,1,0);
        runner.lhu(i, state, memory);
        assertNotEquals(-1, state.getReg(2));
    }

    @Test
    public void testlb() throws MemoryException
    {
        state.setReg(1, 0);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)17);
        InstructionI i = new InstructionI(0,2,0,1,0);
        runner.lb(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)15), (byte)17);
        i = new InstructionI(0,2,0,1,0);
        runner.lb(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)35), (byte)17);
        i = new InstructionI(0,2,0,1,20);
        runner.lb(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 0);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)(-1));
        i = new InstructionI(0,2,0,1,0);
        runner.lb(i, state, memory);
        assertEquals(-1, state.getReg(2));
    }

    @Test
    public void testlbu() throws MemoryException
    {
        state.setReg(1, 0);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)17);
        InstructionI i = new InstructionI(0,2,0,1,0);
        runner.lbu(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)15), (byte)17);
        i = new InstructionI(0,2,0,1,0);
        runner.lbu(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 15);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)35), (byte)17);
        i = new InstructionI(0,2,0,1,20);
        runner.lbu(i, state, memory);
        assertEquals(17, state.getReg(2));

        state.setReg(1, 0);
        state.setReg(2,0);
        memory.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)0), (byte)(-1));
        i = new InstructionI(0,2,0,1,0);
        runner.lbu(i, state, memory);
        assertNotEquals(-1, state.getReg(2));
    }

    @Test
    @Parameters({
            "5, 6, 4",
            "5, 5, 5",
            "5, 0, 0",
            "5, -1, 5"
    })
    public void testAndi(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0,2,0,1, imm);
        runner.andi(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            "5, 6, 4",
            "5, 5, 5",
            "5, 0, 0",
            "5, -1, 5"
    })
    public void testAnd(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0,3,0,1,2,0);
        runner.and(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    @Parameters({
            "1, 2, 3",
            "5, 4, 5",
            "5, 0, 5",
            "5, -1, -1"

    })
    public void testOri(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0,2,0,1,imm);
        runner.ori(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            "1, 2, 3",
            "5, 4, 5",
            "5, 0, 5",
            "5, -1, -1"
    })
    public void testOr(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.or(i, state);
        assertEquals(expected, state.getReg(3));
    }


    @Test
    @Parameters({
            " 1,  2,  3",
            " 3, 10,  9",
            " 3, -1, -4",
            "-4, -1,  3",
            " 5,  0,  5"

    })
    public void testXori(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0, 2, 0, 1, imm);
        runner.xori(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            " 1,  2,  3",
            " 3, 10,  9",
            " 3, -1, -4",
            "-4, -1,  3",
            " 5,  0,  5"
    })
    public void testXor(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.xor(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    @Parameters({
            " 1, 2,  4",
            " 3, 2, 12",
            "-1, 2, -4",
            "-2147483648, 1, 0"
    })
    public void testSlli(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0, 2,0,1,imm);
        runner.slli(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            " 1, 2,  4",
            " 3, 2, 12",
            "-1, 2, -4",
            "-2147483648, 1, 0"
    })
    public void testSll(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.sll(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, 2147483647"
    })
    public void testSrli(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0, 2,0,1,imm);
        runner.srli(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, 2147483647",
            "-2, 1, 2147483647",
    })
    public void testSrl(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.srl(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, -1"
    })
    public void testSrai(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0, 2,0,1,imm);
        runner.srai(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            " 4, 2, 1",
            "12, 2, 3",
            " 1, 1, 0",
            " 0, 1, 0",
            "-1, 1, -1",
            "-2, 1, -1"
    })
    public void testSra(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.sra(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 1",
            "1,-1, 0",
    })
    public void testSlti(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0, 2,0,1,imm);
        runner.slti(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 1",
            "1,-1, 0",

    })
    public void testSlt(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.slt(i, state);
        assertEquals(expected, state.getReg(3));
    }

    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 0",
            "1,-1, 1",

    })
    public void testSltiu(int reg, int imm, int expected)
    {
        state.setReg(1,reg);
        InstructionI i = new InstructionI(0, 2,0,1,imm);
        runner.sltiu(i, state);
        assertEquals(expected, state.getReg(2));
    }

    @Test
    @Parameters({
            "2, 1, 0",
            "1, 2, 1",
            "-1,1, 0",
            "1,-1, 1",

    })
    public void testSltu(int reg1, int reg2, int expected)
    {
        state.setReg(1,reg1);
        state.setReg(2,reg2);
        InstructionR i = new InstructionR(0, 3, 0, 1, 2, 0);
        runner.sltu(i, state);
        assertEquals(expected, state.getReg(3));
    }


    @Test
    public void testJal() throws MisalignedMemoryLoadException
    {
        //J
        state.setPc(0);
        InstructionUJ i = new InstructionUJ(0,0, 4);
        runner.jal(i, state);
        assertEquals(4-4, state.getPc()); //-4 for the pc+=4

        state.setPc(12);
        i = new InstructionUJ(0, 1, -8);
        runner.jal(i, state);
        assertEquals(4-4, state.getPc()); // -4 for the pc+=4
        assertEquals(16, state.getReg(1));

        state.setPc(24);
        i = new InstructionUJ(0, 1, 14);
        try{
            runner.jal(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("JAL should throw exception when loading mis-aligned address");

    }

    @Test
    public void testJalr() throws MisalignedMemoryLoadException
    {
        //J
        state.setReg(1, 4);
        state.setPc(0);
        InstructionI i = new InstructionI(0,0, 0, 1, 0);
        runner.jalr(i, state);
        assertEquals(4-4, state.getPc()); //-4 for the pc+=4

        state.setPc(12);
        state.setReg(1, -8);
        i = new InstructionI(0, 2, 0, 1, 0);
        runner.jalr(i, state);
        assertEquals(4-4, state.getPc()); // -4 for the pc+=4
        assertEquals(16, state.getReg(2));

        state.setPc(12);
        state.setReg(1, -8);
        i = new InstructionI(0, 2, 0, 1, 16);
        runner.jalr(i, state);
        assertEquals(20-4, state.getPc()); // -4 for the pc+=4
        assertEquals(16, state.getReg(2));

        state.setReg(1, 14);
        state.setPc(24);
        i = new InstructionI(0, 0,0,1,0);
        try{
            runner.jalr(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("JAL should throw exception when loading mis-aligned address");

    }

    @Test
    public void testBeq() throws MisalignedMemoryLoadException
    {
        state.setPc(0);
        InstructionSB i = new InstructionSB(0,0,0,0,8);
        runner.beq(i, state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2,5);
        i = new InstructionSB(0,0,1,2,-8);
        runner.beq(i, state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2, 6);
        i = new InstructionSB(0,0,1,2,-8);
        runner.beq(i,state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 6);
        state.setReg(2, 5);
        i = new InstructionSB(0,0,1,2,-8);
        runner.beq(i,state);
        assertEquals(16, state.getPc());

        state.setPc(24);
        i = new InstructionSB(0,0,0,0,14);
        //TODO: Check the behavior of SPIKE - does it crash if the instruction has invalid immidiate even though you dont take it?
        try{
            runner.beq(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("BEQ should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBne() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2,5);
        InstructionSB i = new InstructionSB(0,0,1,2,-8);
        runner.bne(i, state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2, 6);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bne(i,state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 6);
        state.setReg(2, 5);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bne(i,state);
        assertEquals(4, state.getPc());

        state.setPc(24);
        state.setReg(2, 5);
        i = new InstructionSB(0,0,0,2,14);
        try{
            runner.bne(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("BNE should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBlt() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2,5);
        InstructionSB i = new InstructionSB(0,0,1,2,-8);
        assertEquals(-8, i.getImm());
        runner.blt(i, state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2, 6);
        i = new InstructionSB(0,0,1,2,-8);
        runner.blt(i,state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 6);
        state.setReg(2, 5);
        i = new InstructionSB(0,0,1,2,-8);
        runner.blt(i,state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, -1);
        state.setReg(2, 1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.blt(i,state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 1);
        state.setReg(2, -1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.blt(i,state);
        assertEquals(16, state.getPc());

        state.setReg(1, 5);
        state.setPc(24);
        i = new InstructionSB(0,0,0,1,14);
        try{
            runner.blt(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("BLT should throw exception when loading mis-aligned address");
    }

    @Test
    public void testBltu() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2,5);
        InstructionSB i  = new InstructionSB(0,0,1,2,-8);
        runner.bltu(i, state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2, 6);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bltu(i,state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 6);
        state.setReg(2, 5);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bltu(i,state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, -1);
        state.setReg(2, 1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bltu(i,state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 1);
        state.setReg(2, -1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bltu(i,state);
        assertEquals(4, state.getPc());

        state.setPc(24);
        i = new InstructionSB(0,0,1,2,14);
        try{
            runner.bltu(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("bltu should throw exception when loading mis-aligned address");
    }

    public void testBge() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2,5);
        InstructionSB i = new InstructionSB(0,0,1,2,-8);
        assertEquals(-8, i.getImm());
        runner.bge(i, state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2, 6);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bge(i,state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 6);
        state.setReg(2, 5);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bge(i,state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, -1);
        state.setReg(2, 1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bge(i,state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 1);
        state.setReg(2, -1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bge(i,state);
        assertEquals(4, state.getPc());

        state.setReg(1, 5);
        state.setPc(24);
        i = new InstructionSB(0,0,0,1,14);
        try{
            runner.bge(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("bge should throw exception when loading mis-aligned address");
    }

    public void testBgeu() throws MisalignedMemoryLoadException
    {
        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2,5);
        InstructionSB i = new InstructionSB(0,0,1,2,-8);
        assertEquals(-8, i.getImm());
        runner.bgeu(i, state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 5);
        state.setReg(2, 6);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bgeu(i,state);
        assertEquals(16, state.getPc());

        state.setPc(16);
        state.setReg(1, 6);
        state.setReg(2, 5);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bgeu(i,state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, -1);
        state.setReg(2, 1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bgeu(i,state);
        assertEquals(4, state.getPc());

        state.setPc(16);
        state.setReg(1, 1);
        state.setReg(2, -1);
        i = new InstructionSB(0,0,1,2,-8);
        runner.bgeu(i,state);
        assertEquals(16, state.getPc());

        state.setReg(1, 5);
        state.setPc(24);
        i = new InstructionSB(0,0,0,1,14);
        try{
            runner.bgeu(i, state);
        }
        catch(MisalignedMemoryLoadException e)
        {
            return;
        }
        fail("bgeu should throw exception when loading mis-aligned address");
    }

}
