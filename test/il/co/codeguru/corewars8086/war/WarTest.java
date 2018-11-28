package il.co.codeguru.corewars8086.war;

import il.co.codeguru.corewars8086.utils.Logger;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.*;

public class WarTest {
    private War war;
    private WarriorGroup[] warriorGroups;

    @Before
    public void setUp()
    {
        Logger.setTestingMode();
        war = new War(null, null, true);
        //TODO: Add tests that test that the listeners are called correctly
        warriorGroups = new WarriorGroup[1];
        warriorGroups[0] = new WarriorGroup("team1");
        /*
        byte[] arr = new byte[]{0x1E,0x07,(byte)0x97,(byte)0x83,(byte)0xC7,0x0C, (byte)0x89,
                (byte)0xFE, (byte)0x83,(byte)0xC6,0x0A,(byte)0xFD,0x4F,0x4F,(byte)0xA5,(byte)0xA5,
                (byte)0xA5, (byte)0xA5,(byte)0xA5,(byte)0xA5,0x47,0x47,(byte)0xFF,(byte)0xE7};
        warriorGroups[0].addWarrior(new WarriorData("player1", arr, "label", 0));
        try {
                war.loadWarriorGroups(warriorGroups);
        }
        catch(Exception e)
        {
            System.out.println("Exception thrown because.... reasons");
        }
        */
    }
    @Test
    public void addWarriorNormal()
    {
        byte[] arr = new byte[]{0x1E,0x07,(byte)0x97,(byte)0x83,(byte)0xC7,0x0C, (byte)0x89,
                (byte)0xFE, (byte)0x83,(byte)0xC6,0x0A,(byte)0xFD,0x4F,0x4F,(byte)0xA5,(byte)0xA5,
                (byte)0xA5, (byte)0xA5,(byte)0xA5,(byte)0xA5,0x47,0x47,(byte)0xFF,(byte)0xE7};
        warriorGroups[0].addWarrior(new WarriorData("player1", arr, "label", 0));
        try {
            war.loadWarriorGroups(warriorGroups);
        }
        catch(Exception e)
        {
            e.printStackTrace(System.err);
        }

        Warrior warrior = war.getWarrior(0);
        assertNotNull(warrior);
        assertTrue(warrior.isAlive());
    }

    @Test
    public void testNextRoundNormal()
    {
        byte[] arr = new byte[]{0x13, 0x00, 0x00, 0x00};
        warriorGroups[0].addWarrior(new WarriorData("player1", arr, "label", 0));
        try {
            war.loadWarriorGroups(warriorGroups);
        }
        catch(Exception e)
        {
            e.printStackTrace(System.err);
        }

        war.nextRound(0);

        Warrior warrior = war.getWarrior(0);
        assertNotNull(warrior);
        assertTrue(warrior.isAlive());
        assertEquals(1, war.getNumRemainingWarriors());
        assertEquals(4, warrior.getCpuState().getPc());
    }


    //TODO: Add this with a new instruction to fail the test
    @Test
    public void testNextRoundExceptionThrown()
    {
        byte[] arr = new byte[]{(byte)0xCC};
        warriorGroups[0].addWarrior(new WarriorData("player1", arr, "label", 0));
        try {
            war.loadWarriorGroups(warriorGroups);
        }
        catch(Exception e)
        {
            e.printStackTrace(System.err);
        }

        war.nextRound(0);

        Warrior warrior =  war.getWarrior(0);
        assertFalse(warrior.isAlive());
        assertEquals(0, war.getNumRemainingWarriors());
        assertEquals(0, warrior.getCpuState().getPc());

    }
}
