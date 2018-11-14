package il.co.codeguru.corewars8086.gui;

import il.co.codeguru.corewars8086.gui.widgets.Console;

import java.util.ArrayList;

public class LoadAddressChecker {
    static class AddressRange {
        String name;
        int start, end;
        AddressRange(String _name, int _start, int _end) { name = _name; start = _start; end = _end; }

        boolean overlaps(AddressRange a) {
            return this.start <= a.end && a.start <= this.end;
        }
    }
    private ArrayList<AddressRange> fixedRanges;
    public LoadAddressChecker(int capacity) {
        fixedRanges = new ArrayList<>(capacity);
    }
    public int addCheck(String startAddressStr, int len, String name) {
        // check input
        int startAddress;
        try {
            startAddress = Integer.parseInt(startAddressStr, 16);
        } catch (NumberFormatException e2) {
            Console.error("Player " + name + " fixed start address is not a valid hex number");
            return -2;
        }
        if (startAddress < 0 || startAddress > 0xffff) {
            Console.error("Player " + name + " fixed start address is out of 16 bit number range");
            return -2;
        }
        if (startAddress > 0xffff - len + 1) {
            Console.error("Player " + name + " fixed start address does not leave enough space for code (" + Integer.toString(len) + " bytes)");
            return -2;
        }
        AddressRange r = new AddressRange(name, startAddress, startAddress + len - 1); // both ends of the range are inclusive
        for(AddressRange a: fixedRanges) {
            if (a.overlaps(r)) {
                Console.error("Player " + name + " fixed start address overlaps with that of player " + a.name);
                return -2;
            }
        }
        fixedRanges.add(r);
        return startAddress;
    }

    public boolean checkOverlap(int startAddress, int len) {
        // check no overlap
        AddressRange r = new AddressRange(null, startAddress, startAddress + len - 1); // both ends of the range are inclusive
        for(AddressRange a: fixedRanges) {
            if (a.overlaps(r)) {
                return false;
            }
        }
        return true;
    }
}
