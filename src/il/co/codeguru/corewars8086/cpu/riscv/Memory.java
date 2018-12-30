package il.co.codeguru.corewars8086.cpu.riscv;

import il.co.codeguru.corewars8086.memory.MemoryEventListener;

public class Memory {

    public MemoryEventListener listener;

    //private RealModeMemoryImpl data = new RealModeMemoryImpl();

    public byte[] getByteArray()
    {
        return data;
    }

    private byte[] data;

    public Memory(int size)
    {
        data= new byte[size];
    }

    public Memory(byte[] data)
    {
        this.data = data;
    }

    public void storeByte(int index, byte value)
    {
        //data[index] = value;
        //data.writeByte(new RealModeAddress(ARENA_SEGMENT, (short)index), value);
        data[index] = value;
        if (listener != null) {
            listener.onMemoryWrite(index , value);
        }
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
        return data[index];
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

    /**
     * @return Returns the listener.
     */
    public MemoryEventListener getListener() {
        return listener;
    }
    /**
     * @param listener The listener to set.
     */
    public void setListener(MemoryEventListener listener) {
        this.listener = listener;
    }

    public static final int NUM_PARAGRAPHS = 64 * 1024;
    public static final int PARAGRAPH_SIZE = 0x10;
    public static final int PARAGRAPHS_IN_SEGMENT = 0x1000;
    public static final int MEMORY_SIZE = NUM_PARAGRAPHS * PARAGRAPH_SIZE;

}
