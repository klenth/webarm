import *  as arithmetic from './arithmetic.js';

describe("testAdditionOverflow", () => {
    const t = arithmetic.testAdditionOverflow;
    const noOverflow = { 'unsigned': false, 'signed': false };
    const unsignedOverflow = { 'unsigned': true, 'signed': false };
    const signedOverflow = { 'unsigned': false, 'signed': true };
    const bothOverflow = { 'unsigned': true, 'signed': true };

    test("Non-overflow: pos + pos", () => {
        expect(t(5000, 2_000_000_000, 1)).toStrictEqual(noOverflow);
    });

    test("Non-overflow: pos + pos (max value)", () => {
        expect(t(0x8000_0000, 0x7fff_fffe, 1)).toStrictEqual(noOverflow);
    });

    test("Unsigned overflow", () => {
        expect(t(-200, -200, 0)).toStrictEqual(unsignedOverflow);
    });

    test("Unsigned overflow (min value)", () => {
        expect(t(0x8000_0000, 0x7fff_ffff, 1)).toStrictEqual(unsignedOverflow);
    });

    test("Non-overflow: pos + neg", () => {
        expect(t(2_000_000_000, -2_100_000_000, 1)).toStrictEqual(noOverflow);
    });

    test("Non-overflow: pos + neg (max value)", () => {
        expect(t(1_999_999_999, -2_000_000_001, 1)).toStrictEqual(noOverflow);
    });

    test("Non-overflow: neg + pos", () => {
        expect(t(-1_500_000_000, 1_400_000_000, 1)).toStrictEqual(noOverflow);
    });

    test("Non-overflow: neg + pos (max value)", () => {
        expect(t(500_000_000, -500_000_002, 1)).toStrictEqual(noOverflow);
    });

    test("Signed overflow: pos + pos", () => {
        expect(t(2_000_000_000, 2_100_000_000, 1)).toStrictEqual(signedOverflow);
    });

    test("Both overflow: neg + neg", () => {
        expect(t(-1_000_000_000, -2_000_000_000, 1)).toStrictEqual(bothOverflow);
    });
});
