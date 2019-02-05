package il.co.codeguru.corewars_riscv.war;

import il.co.codeguru.corewars_riscv.gui.FixedLoadAddressChecker;
import il.co.codeguru.corewars_riscv.utils.Logger;
import org.apache.commons.lang3.ArrayUtils;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.Collections;

import static il.co.codeguru.corewars_riscv.war.War.ARENA_SIZE;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;


public class WarTest {
    private War war;

    @Before
    public void setUp()
    {
        Logger.outputToStdout();
    }

    @Test
    public void testLoadWarriorGroupsEmpty() throws Exception
    {
        war = new War(null, null, false, false);

        war.loadWarriorGroups(new WarriorGroup[]{});

        assertEquals(0, war.getNumWarriors());
        for (int i = 0; i < ARENA_SIZE; i++)
        {
            assertEquals(0, war.getMemory().loadByte(i));
        }
    }

    @Test
    public void testLoadWarriorsSingleWarrior() throws Exception
    {
        war = new War(null, null, false, false);
        WarriorData w = createWarriorData(1, WarriorData.RANDOM_LOAD_ADDRESS);
        WarriorGroup wg1 = new WarriorGroup("Warrior1");
        wg1.addWarrior(w);

        war.loadWarriorGroups(new WarriorGroup[]{wg1});

        assertEquals(1, war.getNumWarriors());
        assertCodeInMemory(w.getCode());
    }

    @Test
    public void testLoadWarriorsSingleTeam() throws Exception
    {
        war = new War(null, null, false, false);
        WarriorData w1 = createWarriorData(1,WarriorData.RANDOM_LOAD_ADDRESS);
        WarriorData w2 = createWarriorData(2,WarriorData.RANDOM_LOAD_ADDRESS);
        WarriorGroup wg1 = new WarriorGroup("Warrior1");
        wg1.addWarrior(w1);
        wg1.addWarrior(w2);

        war.loadWarriorGroups(new WarriorGroup[]{wg1});

        assertEquals(2, war.getNumWarriors());
        assertCodeInMemory(w1.getCode());
        assertCodeInMemory(w2.getCode());
    }

    @Test
    public void testLoadWarriorsSingleWarriorFixedAddress() throws Exception
    {
        war = new War(null, null, false, false);
        final int loadAddress = 0xdeadbeef & 0xFFFF;
        WarriorData w = createWarriorData(1, loadAddress);
        WarriorGroup wg1 = new WarriorGroup("Warrior1");
        wg1.addWarrior(w);

        war.loadWarriorGroups(new WarriorGroup[]{wg1});

        assertEquals(1, war.getNumWarriors());
        assertCodeInMemoryAtAddress(w.getCode(), loadAddress);
    }

    @Test
    public void testLoadWarriorSingleTeamFixedAndRandomLoadAddress() throws Exception
    {
        war = new War(null, null, false, false);
        final int loadAddress = 0xdeadbeef & 0xFFFF;
        WarriorData w1 = createWarriorData(1, WarriorData.RANDOM_LOAD_ADDRESS);
        WarriorData w2 = createWarriorData(2, loadAddress);
        WarriorGroup wg1 = new WarriorGroup("Warrior1");
        wg1.addWarrior(w1);
        wg1.addWarrior(w2);

        //Honestly wtf
        WarriorRepository.m_Fixed_loadAddressChecker = new FixedLoadAddressChecker(5);
        WarriorRepository.m_Fixed_loadAddressChecker.addCheck(Integer.toHexString(loadAddress), w2.getCode().length, w2.getName());

        war.loadWarriorGroups(new WarriorGroup[]{wg1});

        assertEquals(2, war.getNumWarriors());
        assertCodeInMemory(w1.getCode());
        assertCodeInMemoryAtAddress(w2.getCode(), loadAddress);
    }

    @Test
    public void testLoadWarriorSingleTeamFixedAndRandomLoadAddressMultipleTimes() throws Exception
    {
        for(int i=0;i<10;i++)
        {
            testLoadWarriorSingleTeamFixedAndRandomLoadAddress();
        }
    }

    @Test(expected = Exception.class)
    public void testLoadWarriorTooManyWarriors() throws Exception
    {
        war = new War(null, null, false, false);
        final int size = 100;
        WarriorGroup[] groups = new WarriorGroup[size];
        for(int i =0; i<size;i++)
        {
            groups[i] = new WarriorGroup("Warrior1");
            groups[i].addWarrior(new WarriorData("Warrior", new byte[512], "warrior", WarriorData.RANDOM_LOAD_ADDRESS));
        }

        war.loadWarriorGroups(groups);
    }

    private WarriorData createWarriorData(int number,int address)
    {
        byte[] testCode = new byte[ARENA_SIZE / 4];
        Arrays.fill(testCode, (byte)number);
        return new WarriorData("Warrior", testCode, "warrior", address);
    }

    private void assertCodeInMemory(byte[] testCode) {
        Byte[] code = ArrayUtils.toObject(testCode);
        Byte[] memory = ArrayUtils.toObject(war.getMemory().getByteArray());
        int result = Collections.indexOfSubList(Arrays.asList(memory), Arrays.asList(code));
        assertNotEquals(-1, result);
    }

    private void assertCodeInMemoryAtAddress(byte[] testCode, int address) {
        Byte[] code = ArrayUtils.toObject(testCode);
        Byte[] memory = ArrayUtils.toObject(war.getMemory().getByteArray());
        int result = Collections.indexOfSubList(Arrays.asList(memory), Arrays.asList(code));
        assertEquals(address & 0xFFFF, result);
    }
}
