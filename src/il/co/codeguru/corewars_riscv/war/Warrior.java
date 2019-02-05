package il.co.codeguru.corewars_riscv.war;

import il.co.codeguru.corewars_riscv.cpu.exceptions.CpuException;
import il.co.codeguru.corewars_riscv.cpu.riscv.CpuRiscV;
import il.co.codeguru.corewars_riscv.cpu.riscv.CpuStateRiscV;
import il.co.codeguru.corewars_riscv.memory.Memory;
import il.co.codeguru.corewars_riscv.memory.MemoryException;
import il.co.codeguru.corewars_riscv.memory.MemoryRegion;
import il.co.codeguru.corewars_riscv.memory.RestrictedMemory;

import static il.co.codeguru.corewars_riscv.war.War.*;


/**
 * A single CoreWars warrior.
 * 
 * @author DL
 */
public class Warrior
{
    public MemoryRegion stackRegion;
    public MemoryRegion sharedRegion;
    public final MemoryRegion arenaRegion = new MemoryRegion(0, ARENA_SIZE -1);

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
            int myIndex,
            boolean useNewMemory)
    {
        m_label = label;  // this comes from Code label
        m_name = name;
        m_codeSize = codeSize;
        m_loadAddress = loadAddress;
        m_myIndex = myIndex;

        m_state = new CpuStateRiscV();
        initializeCpuState(loadAddress, initialStack, groupSharedMemory, useNewMemory);

        stackRegion = new MemoryRegion(initialStack, initialStack + STACK_SIZE - 1);
        sharedRegion = new MemoryRegion(groupSharedMemory, groupSharedMemory + GROUP_SHARED_MEMORY_SIZE - 1);

        RestrictedMemory memory = new RestrictedMemory(core, new MemoryRegion[]{
                sharedRegion, stackRegion, arenaRegion
        }, useNewMemory);

        m_cpu = new CpuRiscV(m_state, memory);

        m_isAlive = true;		
    }

    // Quick and dirty hack for creating a seam for unit testing
    public void setCpu(CpuRiscV cpu)
    {
        m_cpu = cpu;
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
        return m_loadAddress & 0xFFFF;
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
    public void setEnergy(short value) { }

    /**
     * Performs the warrior's next turn (= next InstructionInfo).
     * @throws CpuException     on any CPU error.
     * @throws MemoryException  on any RawMemory error.
     */
    public void nextOpcode() throws CpuException, MemoryException {
        m_cpu.nextOpcode();
        if(m_cpu.getState().getPc() >= ARENA_SIZE || m_cpu.getState().getPc() < 0)
        {
            throw new MemoryException("Warrior " + m_name + " tried to execute instructions outside of the arena");
        }
    }

    /**
     * Initializes the CpuRiscV registers & flags:
     *
     *  x1 and PC - To the warriors load address in the memory
     *  x2 - The stack
     *  x3 - The shared memory between the players in the team
     *
     * @param loadAddress       Warrior's load address in the core.
     * @param initialStack      Warrior's private stack.
     * @param groupSharedMemory The warrior's group shared memory.
     */
    private void initializeCpuState(
        int loadAddress,
        int initialStack,
        int groupSharedMemory,
        boolean useNewMemory) {

        int loadIndex = (loadAddress) & 0xFFFF;

        // initialize registers
        m_state.setPc(loadIndex);
        m_state.setReg(1, loadIndex);
        if(useNewMemory) {
            m_state.setReg(2, initialStack + STACK_SIZE - 1);
            m_state.setReg(3, groupSharedMemory);
        }


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