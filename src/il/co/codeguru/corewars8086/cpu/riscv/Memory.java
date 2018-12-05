package il.co.codeguru.corewars8086.cpu.riscv;

public class Memory {

    private final byte[] memory;

    public Memory(int size)
    {
        memory = new byte[size];
    }

    public Memory(byte[] memory)
    {
        this.memory = memory;
    }

    public void storeByte(int index, byte value)
    {
        memory[index] = value;
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
        return memory[index];
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
