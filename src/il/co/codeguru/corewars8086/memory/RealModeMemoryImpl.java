package il.co.codeguru.corewars8086.memory;

import static il.co.codeguru.corewars8086.cpu.riscv.Memory.MEMORY_SIZE;

/**
 * Implements the RealModeMemory interface using a buffer.
 *
 * @author DL
 */
public class RealModeMemoryImpl extends AbstractRealModeMemory {

    /** Listener to memory events */
    public MemoryEventListener listener;

    /** Actual memory data */
    public byte[] data;
    //TODO: Remove this and return to byte[] - separate the gwt framework from the core if it doesn't mean too much overhead
    //public Int8ArrayNative m_data;

    /**
     * Constructor.
     */
    public RealModeMemoryImpl() {
        //m_data = Int8ArrayNative.create(RealModeAddress.MEMORY_SIZE);
        data = new byte[MEMORY_SIZE];
    }

    /**
     * Reads a single byte from the specified address.
     *
     * @param address    Real-mode address to read from.
     * @return the read byte.
     * 
     * @throws MemoryException  on any error. 
     */
    public byte readByte(RealModeAddress address) {
        return data[address.getLinearAddress()];
    }
    public byte readByte(int linearAddress) {
        return data[linearAddress % MEMORY_SIZE];
    }

    public int length() {
        return data.length;
    }
    public byte[] getMemory() {return data;}
    /**
     * Writes a single byte to the specified address.
     *
     * @param address    Real-mode address to write to.
     * @param value      Data to write.
     * 
     * @throws MemoryException  on any error. 
     */
    public void writeByte(RealModeAddress address, byte value) {
        data[address.getLinearAddress()] = value;
        if (listener != null) {
            listener.onMemoryWrite(address.getLinearAddress(), value);
        }
    }



    /**
     * Reads a single byte from the specified address, in order to execute it.
     *
     * @param address    Real-mode address to read from.
     * @return the read byte.
     * 
     * @throws MemoryException  on any error. 
     */
    public byte readExecuteByte(RealModeAddress address) {
        return data[address.getLinearAddress()];
    }
    public byte readExecuteByte(int linearAddress) {
        return data[linearAddress];
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
}
