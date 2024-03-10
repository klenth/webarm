export function zeroPad(s, minLength) {
    while (s.length < minLength)
        s = '0' + s;
    return s;
}

export function hex(number) {
    return (+number).toString(16).toUpperCase();
}

export function decimal(number) {
    const sign = (number < 0) ? '-' : '';
    if (number < 0)
        number = -number;
    const s = '' + number;
    if (s.length <= 4)
        return sign + s;

    const r = s.length % 3 || 3;
    const groups = Array(Math.ceil(s.length / 3)).fill(0).map((_, i) =>
        (i === 0) ? s.slice(0, r) : s.slice(3 * (i - 1) + r, 3 * i + r));
    return sign + groups.join(',');
}

export function hexWord(word) {
    const nibble0 = (word & 0x0000_ffff) >>> 0,
        nibble1 = ((word >>> 16) & 0xffff) >>> 0;
    return zeroPad(hex(nibble1), 4) + ' ' + zeroPad(hex(nibble0), 4);
}

export function hexWordBytes(word) {
    const byte0 = (word & 0x0000_00ff) >>> 0,
        byte1 = ((word >> 8) & 0xff) >>> 0,
        byte2 = ((word >> 16) & 0xff) >>> 0,
        byte3 = ((word >> 24) & 0xff) >>> 0;
    const s0 = zeroPad(hex(byte0), 2),
        s1 = zeroPad(hex(byte1), 2),
        s2 = zeroPad(hex(byte2), 2),
        s3 = zeroPad(hex(byte3), 2);
    return `${s3} ${s2} ${s1} ${s0}`;
}

export function decimalWordSigned(word) {
    word = (+word & 0xffff_ffff) >> 0;
    let s = decimal(word);
    if (word > 0)
        s = '+' + s;
    return s;
}

export function decimalWordUnsigned(word) {
    word = (+word & 0xffff_ffff) >>> 0;
    return decimal(word);
}
