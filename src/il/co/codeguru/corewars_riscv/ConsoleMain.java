package il.co.codeguru.corewars_riscv;

import il.co.codeguru.corewars_riscv.gui.PlayersPanel;
import il.co.codeguru.corewars_riscv.utils.Logger;
import il.co.codeguru.corewars_riscv.war.Competition;
import il.co.codeguru.corewars_riscv.war.WarriorGroup;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class ConsoleMain {
    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Usage: " + System.getProperty("sun.java.command").split(" ")[0] + " path-to-warriors");
            System.exit(0);
        }
        Logger.outputToStdout();

        //TODO: Load config file - useNewMemory, battlePerGroup(?)

        List<PlayersPanel.Code> binaries = loadBinaryFiles(args[0]);

        Competition competition = new Competition();
        boolean ok = competition.getWarriorRepository().loadWarriors(
                binaries.toArray(new PlayersPanel.Code[0]),
                new PlayersPanel.Code[]{},
                false
        );
        if(!ok) throw new RuntimeException("Failed to load warriors");

        competition.runCompetition(100, competition.getWarriorRepository().getNumberOfGroups(), false, false);
        Logger.log("Seed: " + competition.getSeed());
        try {
            while (competition.continueRun()) ;
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }

        for(WarriorGroup group : competition.getWarriorRepository().getWarriorGroups())
        {
            System.out.println(group.getName() + " : " + group.getGroupScore());
        }

        //TODO: Output it in a file

    }

    /**
     * Directory structure:
 *      root_path:
 *          team_name1:
 *              code1.bin
 *              code2.bin
 *          team_name2:
 *              ...
 *          ...
     */
    public static List<PlayersPanel.Code> loadBinaryFiles(String path) {
        File folder = new File(path);
        File[] teamDirList = folder.listFiles();
        if (teamDirList == null) {
            throw new NullPointerException(path + " is not a valid path or doesn't exist");
        }
        List<PlayersPanel.Code> ans = new ArrayList<>(teamDirList.length);


        for (File dir : teamDirList) {
            PlayersPanel.PlayerInfo teamInfo = new PlayersPanel.PlayerInfo(dir.getName(), dir.getName());
            File[] codeList = dir.listFiles();
            if (codeList != null) {
                for (int codeIndex = 0; codeIndex < codeList.length; codeIndex++) {
                    File codeFile = codeList[codeIndex];
                    if(codeFile.getName().endsWith(".bin")) {
                        try {
                            byte[] code = Files.readAllBytes(codeFile.toPath());
                            PlayersPanel.Code codeObject = new PlayersPanel.Code(teamInfo, codeIndex);
                            codeObject.bin = code;
                            codeObject.name = teamInfo.getName();
                            ans.add(codeObject);
                        } catch (IOException e) {
                            e.printStackTrace(System.err);
                        }
                    }
                }
            }
        }
        return ans;
    }
}

