package il.co.codeguru.corewars8086.cpu.riscv;

import org.junit.*;
import static org.junit.Assert.*;

public class CpuTest {
    private Cpu cpu;

    @Before
    public void setUp()
    {
        cpu = new Cpu();
    }

    @Test
    public void pass()
    {
        assertTrue(true);
    }
}

