function asSigned(n) {
    return n >> 0;
}

function asUnsigned(n) {
    return n >>> 0;
}

export function testAdditionOverflow(arg1, arg2, c) {
    let signed, unsigned;

    arg1 = asSigned(arg1);
    arg2 = asSigned(arg2);

    const uarg1 = asUnsigned(arg1 & 0xffff_ffff),
        uarg2 = asUnsigned(arg2 & 0xffff_ffff);
    c = asUnsigned(c);

    const sum = arg1 + arg2 + c;
    const usum = uarg1 + uarg2 + c;

    unsigned = (usum - asUnsigned(usum & 0xffff_ffff)) !== 0;
    if (sum >= 0)
        signed = sum > 2147483647;
    else
        signed = sum < -2147483648;

    return {
        'unsigned': unsigned,
        'signed': signed,
    }
}

export function testSubtractionOverflow(arg1, arg2, c) {
    return testAdditionOverflow(arg1, -asSigned(arg2), c);
}
