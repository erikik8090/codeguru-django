package il.co.codeguru.corewars_riscv.memory;

import static il.co.codeguru.corewars_riscv.jsadd.Format.hex;

public class RawMemory extends Memory {
    public byte[] getByteArray()
    {
        return data;
    }

    private byte[] data;

    public RawMemory(int size)
    {
        data= new byte[size];
    }

    public RawMemory(byte[] data)
    {
        this.data = data;
    }

    @Override
    public void setByte(int index, byte value) throws MemoryException {
        if(index < 0 || index > data.length) throw new MemoryException("Unexpected write at " + hex(index));
        data[index] = value;
    }

    @Override
    public byte loadByte(int index) throws MemoryException {
        if(index < 0 || index > data.length) throw new MemoryException("Unexpected read at " + hex(index));
        return data[index];
    }

    public static final int NUM_PARAGRAPHS = 64 * 1024;
    public static final int PARAGRAPH_SIZE = 0x10;
    public static final int PARAGRAPHS_IN_SEGMENT = 0x1000;
    public static final int MEMORY_SIZE = NUM_PARAGRAPHS * PARAGRAPH_SIZE;

}
