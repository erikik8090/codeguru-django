package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.memory.RealModeAddress;
import il.co.codeguru.corewars8086.memory.RealModeMemoryImpl;

import static il.co.codeguru.corewars8086.war.War.ARENA_SEGMENT;

public class Memory extends RealModeMemoryImpl {

    //private byte[] data;
/*
    public Memory(int size)
    {
        data = new byte[size];
    }

    public Memory(byte[] data)
    {
        this.data = data;
    }
*/
    public void storeByte(int index, byte value)
    {
        //data[index] = value;
        writeByte(new RealModeAddress(ARENA_SEGMENT, (short)index), value);
    }
    public void storeHalfWord(int index, short value)
    {
        storeByte(index,(byte)(value & 0xff));
        storeByte(index + 1,(byte)((value >> 8) & 0xff));
    }
    public void storeWord(int index, int value)
    {
        storeHalfWord(index, (short) (value & 0xffff));
        storeHalfWord(index + 2, (short) ((value >> 16) & 0xffff));
    }


    public byte loadByte(int index)
    {
        //return data[index];
        return readByte(new RealModeAddress(ARENA_SEGMENT, (short)index));
    }
    public short loadHalfWord(int index)
    {
        return (short)(loadByte(index) & 0xFF |
                      (loadByte(index + 1) << 8));
    }
    public int loadWord(int index)
    {
        return  (loadHalfWord(index) & 0xFFFF |
                (loadHalfWord(index+2) << 16));
    }
}
