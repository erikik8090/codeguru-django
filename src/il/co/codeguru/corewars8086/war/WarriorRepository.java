package il.co.codeguru.corewars8086.war;

import java.util.*;

import il.co.codeguru.corewars8086.gui.LoadAddressChecker;
import il.co.codeguru.corewars8086.gui.PlayersPanel;
import il.co.codeguru.corewars8086.gui.widgets.*;
import il.co.codeguru.corewars8086.utils.Logger;


public class WarriorRepository {

    /** Maximum initial code size of a single warrior */	
    public final static int MAX_WARRIOR_SIZE = 512;

    public List<WarriorGroup> getWarriorGroups() {
        return warriorGroups;
    }

    private List<WarriorGroup> warriorGroups;
    private WarriorGroup zombieGroup;
    private Map<String,Integer> warriorNameToGroup;  // map name to group index in warriorGroups

    private EventMulticasterScore scoreEventsCaster;
    private ScoreEventListener scoreListener;

    public WarriorRepository() {
        warriorNameToGroup = new HashMap<>();
        warriorGroups = new ArrayList<>();

        scoreEventsCaster = new EventMulticasterScore();
        scoreListener = scoreEventsCaster.proxy;
    }

    public void addScoreEventListener(ScoreEventListener lis) {
        scoreEventsCaster.add(lis);
        scoreEventsCaster.doneAdding();
    }

    public void addScore(String name, float value) {
        Integer groupIndex = warriorNameToGroup.get(name);
        if (groupIndex == null) {// zombies
            return;
        }
        WarriorGroup group = warriorGroups.get(groupIndex);
        int subIndex = group.addScoreToWarrior(name, value);
        if(scoreEventsCaster.isEnabled())
            scoreListener.scoreChanged(name, value, groupIndex, subIndex);
    }

    public int getNumberOfGroups() {
        return warriorGroups.size();
    }

    public String[] getGroupNames() {
        List<String> names = new ArrayList<>();
        for (WarriorGroup group : warriorGroups) {
            names.add(group.getName());
        }
        return names.toArray(new String[0]);
    }

    private byte[] truncToSize(byte[] arr) {
        if (arr.length > MAX_WARRIOR_SIZE)
            return Arrays.copyOf(arr, MAX_WARRIOR_SIZE);
        return arr;
    }

    // it's an ugly singleton but that's the only reasonable way War and WarriorRepository can communicate about fixed addresses
    static LoadAddressChecker m_loadAddressChecker;


    public boolean loadWarriors(PlayersPanel.Code[] files, PlayersPanel.Code[] zombies, boolean isInDebug)
    {
        warriorNameToGroup.clear();
        warriorGroups.clear();

        Logger.log("Found " + Integer.toString(files.length) + " survivors, " + Integer.toString(zombies.length) + " zombies");
        m_loadAddressChecker = null; // reset it before potentially being used again

        Arrays.sort(files, (o1, o2) -> o1.getName().compareToIgnoreCase(o2.getName()));

        WarriorGroup currentGroup = null;
        for(PlayersPanel.Code c: files)
        {
            String name = c.getName();
            if (name.isEmpty()) {
                Logger.error("All players must have a name for starting a competition");
                return false;
            }
            byte[] bin = c.getBin();
            if (bin == null || bin.length == 0) {
                Logger.error("Player " + name + " does not have any code, can't start competition");
                return false;
            }

            int startAddr = -1;
            if (!c.startAddrRandom && isInDebug) {
                if (m_loadAddressChecker == null) {
                    // having it in the competition window is an ugly hack but is the only way for it to get to the random
                    // loading where it will be needed later
                    m_loadAddressChecker = new LoadAddressChecker(files.length + zombies.length);
                }
                startAddr = m_loadAddressChecker.addCheck(c.startAddress, c.getBin().length, name);
                if (startAddr == -2)
                    return false;
            }

            WarriorData data = new WarriorData(name, truncToSize(bin), c.getLabel(), startAddr);
            if (c.player.wtype != PlayersPanel.EWarriorType.SINGLE)
            {
                if (c.getLabel().endsWith("0")) {
                    // start a new group!
                    currentGroup = new WarriorGroup(name.substring(0, name.length()-1));
                    currentGroup.addWarrior(data);
                    warriorNameToGroup.put(name, warriorGroups.size());
                }
                else if (c.getLabel().endsWith("1")) {
                    currentGroup.addWarrior(data);
                    warriorNameToGroup.put(name, warriorGroups.size());
                    warriorGroups.add(currentGroup);
                    currentGroup = null;
                }
                else {
                    Logger.error("Unexpected suffix for warrior name. expected 1 or 2: " + name);
                }
            } else {
                currentGroup = new WarriorGroup(name);
                currentGroup.addWarrior(data);
                warriorNameToGroup.put(name, warriorGroups.size());
                warriorGroups.add(currentGroup);
                currentGroup = null;
            }
        }

        if (warriorGroups.isEmpty()) {
            Logger.error("no players to start a competition with");
            return false;
        }

        if (!readZombiesFromUI(zombies, m_loadAddressChecker))
            return false;

        return true;
    }


	private boolean readZombiesFromUI(PlayersPanel.Code[] zombieFiles, LoadAddressChecker loadAddressChecker) {
        zombieGroup = null;
        if (zombieFiles == null || zombieFiles.length == 0)
            return true;

        zombieGroup = new WarriorGroup("ZoMbIeS");
        for (PlayersPanel.Code c : zombieFiles) {
            String name = c.getName();
            if (name == null) {
                Logger.error("All zombies must have a name for starting a competition");
                return false;
            }
            byte[] bin = c.getBin();
            if (bin == null) {
                Logger.error("Zombie " + name + " does not have any code, can't start competition");
                return false;
            }

            int startAddress = -1;
            if (!c.startAddrRandom) {
                startAddress = loadAddressChecker.addCheck(c.startAddress, c.bin.length, name);
                if (startAddress == -2)
                    return false;
            }

            WarriorData data = new WarriorData(name, truncToSize(bin), c.getLabel(), startAddress);
            zombieGroup.addWarrior(data);
        }
        return true;
    }

    /**
     * @return the warrior groups corresponding to a given list of indices, and
     * the zombies group.
     * 
     * @param groupIndices  Required warrior groups indices.
     */
    public WarriorGroup[] createGroupList(int[] groupIndices) {
        ArrayList<WarriorGroup> groupsList = new ArrayList<>();

        // add requested warrior groups
        for (int groupIndex : groupIndices) {
            groupsList.add(warriorGroups.get(groupIndex));
        }

        // add zombies (if exist)
        if (zombieGroup != null) {
            groupsList.add(zombieGroup);
        }

        WarriorGroup[] groups = new WarriorGroup[groupsList.size()];
        groupsList.toArray(groups);
        return groups;
    }
}