package il.co.codeguru.corewars8086.memory;

import il.co.codeguru.corewars8086.utils.Unsigned;

/**
 * Base class for classes implementing the RealModeMemory interface, which
 * provides simple implementation of the 'word' methods using the 'byte' methods.  
 * 
 * @author DL
 */
public abstract class AbstractRealModeMemory implements RealModeMemory {
	
    /**
     * Reads a single byte from the specified address.
     *
     * @param address    Real-mode address to read from.
     * @return the read byte.
     * 
     * @throws MemoryException  on any error. 
     */
    public abstract byte readByte(RealModeAddress address) throws MemoryException;
    public abstract byte readByte(int linearAddress) throws MemoryException;

    /**
     * Reads a single word from the specified address.
     *
     * @param address    Real-mode address to read from.
     * @return the read word.
     * 
     * @throws MemoryException  on any error. 
     */
    public short read16Bit(RealModeAddress address) throws MemoryException {
        byte low = readByte(address);
        RealModeAddress nextAddress = new RealModeAddress(address.getSegment(), (short)(address.getOffset() + 1));
        byte high = readByte(nextAddress);

        return (short)((Unsigned.unsignedByte(high) << 8) | Unsigned.unsignedByte(low));
    }

    public int read32Bit(RealModeAddress address) throws MemoryException
    {
        short low = read16Bit(address);
        RealModeAddress nextAddress = new RealModeAddress(address.getSegment(), (short)(address.getOffset() + 2));
        short high = read16Bit(nextAddress);

        return (Unsigned.unsignedShort(high) << 16) | Unsigned.unsignedShort(low);
    }

    /**
     * Writes a single byte to the specified address.
     *
     * @param address    Real-mode address to write to.
     * @param value      Data to write.
     * 
     * @throws MemoryException  on any error. 
     */
    public abstract void writeByte(RealModeAddress address, byte value) throws MemoryException;

    /**
     * Writes a single word to the specified address.
     *
     * @param address    Real-mode address to write to.
     * @param value      Data to write.
     * 
     * @throws MemoryException  on any error. 
     */	
    public void write16Bit(RealModeAddress address, short value) throws MemoryException
    {
        byte low = (byte)value;
        byte high = (byte)(value >> 8);

        // write low byte
        writeByte(address, low);

        // write high byte
        RealModeAddress nextAddress = new RealModeAddress(address.getSegment(), (short)(address.getOffset() + 1));
        writeByte(nextAddress, high);
    }

    public void write32Bit(RealModeAddress address, int value) throws MemoryException
    {
        short low = (short)value;
        short high = (short)(value >> 16);

        // write low byte
        write16Bit(address, low);

        // write high byte
        RealModeAddress nextAddress = new RealModeAddress(address.getSegment(), (short)(address.getOffset() + 2));
        write16Bit(nextAddress, high);
    }

    /**
     * Reads a single byte from the specified address, in order to execute it.
     *
     * @param address    Real-mode address to read from.
     * @return the read byte.
     * 
     * @throws MemoryException  on any error. 
     */
    public abstract byte readExecuteByte(RealModeAddress address) throws MemoryException;

    public abstract byte readExecuteByte(int address) throws MemoryException;

    /**
     * Reads a single word from the specified address, in order to execute it.
     *
     * @param address    Real-mode address to read from.
     * @return the read word.
     * 
     * @throws MemoryException  on any error. 
     */
    public short readExecuteWord(RealModeAddress address) throws MemoryException {
        // read low word
        byte low = readExecuteByte(address);

        // read high word
        RealModeAddress nextAddress = new RealModeAddress(address.getSegment(), (short)(address.getOffset() + 1));
        byte high = readExecuteByte(nextAddress);

        return (short)((Unsigned.unsignedByte(high) << 8) | Unsigned.unsignedByte(low));
    }	
}