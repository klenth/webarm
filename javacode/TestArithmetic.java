package javacode;

public class TestArithmetic {

    public static void testAdditionOverflow(int arg1, int arg2, int cin) {
        long uarg1 = ((long)arg1) & 0xffff_ffffL;
        long uarg2 = ((long)arg2) & 0xffff_ffffL;
        long usum = uarg1 + uarg2 + cin;
        System.out.printf("uarg1 = %d, uarg2 = %d, cin = %d, usum = %d\n", uarg1, uarg2, cin, usum);

        boolean unsigned = (usum ^ (usum & 0xffff_ffffL)) != 0L;
        
        boolean signed;
        long sum = arg1 + arg2 + cin;
        if (sum >= 0)
            signed = sum > Integer.MAX_VALUE;
        else
            signed = sum < Integer.MIN_VALUE;

        System.out.printf("Unsigned overflow? %s\n", unsigned);
        System.out.printf("  Signed overflow? %s\n", signed);
    }
}
