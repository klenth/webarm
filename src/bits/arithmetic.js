export function testAdditionOverflow(arg1, arg2, c) {
    let cout = 0, v = 0;

    const uarg1 = (arg1 & 0xffff_ffff) >>> 0,
        uarg2 = (arg2 & 0xffff_ffff) >>> 0;
    const usum = uarg1 + uarg2;
    if (arg1 >= 0 && arg2 >= 0) {
        cout = usum > 0xffff_ffff;
        v = usum > 0x7fff_ffff;
    }

    return {
        'unsigned': c !== 0,
        'signed': v !== 0,
    }
}