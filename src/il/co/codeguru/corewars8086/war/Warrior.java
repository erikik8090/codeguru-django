package il.co.codeguru.corewars8086.war;

import il.co.codeguru.corewars8086.cpu.exceptions.CpuException;
import il.co.codeguru.corewars8086.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars8086.cpu.riscv.Memory;
import il.co.codeguru.corewars8086.memory.MemoryException;
import il.co.codeguru.corewars8086.memory.MemoryRegion;

import static il.co.codeguru.corewars8086.war.War.*;


/**
 * A single CoreWars warrior.
 * 
 * @author DL
 */
public class Warrior
{
    public MemoryRegion m_stackWritableRegion;
    public MemoryRegion m_sharedWritableRegion;

    /**
     * Constructor.
     * 
     * @param name	            Warrior's name.
     * @param codeSize          Warrior's code size.
     * @param core              Real mode memory used as core.
     * @param loadAddress       Warrior's load address in the core (initial CS:IP).
     * @param initialStack      Warrior's private stack in the core (initial SS:SP).
     * @param groupSharedMemory Warrior group's shared memroy address (initial ES).
     */
    public Warrior(
            String name,
            String label,
            int codeSize,
            Memory core,
            int loadAddress,
            int initialStack,
            int groupSharedMemory,
            int myIndex)
    {
        m_label = label;  // this comes from Code label
        m_name = name;
        m_codeSize = codeSize;
        m_loadAddress = loadAddress;
        m_myIndex = myIndex;

        m_state = new CpuStateRiscV();
        initializeCpuState(loadAddress, initialStack, groupSharedMemory);

        m_stackWritableRegion = new MemoryRegion(initialStack, initialStack + STACK_SIZE - 1);
        m_sharedWritableRegion = new MemoryRegion(groupSharedMemory, groupSharedMemory + GROUP_SHARED_MEMORY_SIZE - 1);

        m_cpu = new CpuRiscV(m_state, core);

        m_isAlive = true;		
    }

    /**
     * @return whether or not the warrior is still alive.
     */
    public boolean isAlive() {
        return m_isAlive;
    }

    /**
     * Kills the warrior.
     */
    public void kill() {
        m_isAlive = false;
    }	

    /**
     * @return the warrior's name.
     */
    public String getName() {
        return m_name;
    }
    public String getLabel() {
        return m_label;
    }

    /**
     * @return the warrior's load offset.
     */
    public short getLoadOffset() {
        return (short)(m_loadAddress);
    }
    public int getLoadOffsetInt() {
        return m_loadAddress;
    }

    /**
     * @return the warrior's initial code size.
     */
    public int getCodeSize() {
        return m_codeSize;
    }

    /**
     * Accessors for the warrior's Energy value (used to calculate
     * the warrior's speed).
     */
    public short getEnergy() {
        return 0;
    }
    public void setEnergy(short value) {

    }

    /**
     * Performs the warrior's next turn (= next InstructionInfo).
     * @throws CpuException     on any CPU error.
     * @throws MemoryException  on any Memory error.
     */
    public void nextOpcode() throws CpuException, MemoryException {
        m_cpu.nextOpcode();
        if(m_cpu.getState().getPc() >= ARENA_SIZE || m_cpu.getState().getPc() < 0)
        {
            throw new MemoryException();
        }

    }

    /**
     * Initializes the CpuRiscV registers & flags:
     *  CS,DS                    - set to the core's segment.
     *  ES                       - set to the group's shared memory segment.
     *  AX,IP                    - set to the load address.
     *  SS                       - set to the private stack's segment.
     *  SP                       - set to the private stack's offset.
     *  BX,CX,DX,SI,DI,BP, flags - set to zero.
     * 
     * @param loadAddress       Warrior's load address in the core.
     * @param initialStack      Warrior's private stack (initial SS:SP).
     * @param groupSharedMemory The warrior's group shared memory.
     */
    private void initializeCpuState(
        int loadAddress,
        int initialStack,
        int groupSharedMemory) {

        int loadIndex = (loadAddress) & 0xFFFF;

        // initialize registers
        m_state.setReg(1, loadIndex);
        m_state.setReg(2, initialStack + STACK_SIZE - 1);
        m_state.setReg(3, groupSharedMemory);
        m_state.setPc(loadIndex);

    }
    
    public CpuStateRiscV getCpuState(){
    	return m_state;
    }

    /** Warrior's name */
    private final String m_name;
    private final String m_label;
    /** Warrior's initial code size */	
    private final int m_codeSize;
    /** Warrior's initial load address */	
    private final int m_loadAddress;
    /** Current state of registers & flags */	
    private CpuStateRiscV m_state;
    /** CPU instance */
    private CpuRiscV m_cpu;
    /** Whether or not the warrior is still alive */
    private boolean m_isAlive;

    public final int m_myIndex; // in the War m_warriors array. used for identifying breakpoints
}