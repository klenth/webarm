class InvalidFieldValueError extends Error {}

export default class Bitfield {
    // bits: how many bits wide this field is
    // offset: index of bottom bit (20 means at bottom of number)
    constructor(bits, offset=0) {
        this.bits = bits;
        this.offset = offset;
        if (bits === 32 && offset === 0) {
            this.mask = 0xffff_ffff;
        } else if (bits === 32) {
            throw new Error(`Invalid Bitfield: bits=32, offset=${offset}`);
        } else
            this.mask = ((1 << bits) - 1) << offset;
    }

    asConstant(value) {
        return new ConstantBitfield(this.bits, this.offset, value);
    }

    getAndCheck(word) {
        return this.get(word);
    }

    get(word) {
        return (word & this.mask) >>> this.offset;
    }

    set(word, v) {
        return (word & ~this.mask) | (v << this.offset);
    }

    checkAndSet(word, v) {
        if (((v << this.offset) & ~this.mask) !== 0)
            throw new InvalidFieldValueError('Setting field value of ' + v + ' not in ' + this.bits + '-bit range');
        return this.set(word, v);
    }

    setZeros(word) {
        return word & ~this.mask;
    }

    setOnes(word) {
        return word | this.mask;
    }
}

class ConstantBitfield extends Bitfield {
    constructor(bits, offset, value) {
        super(bits, offset);
        this.value = value;
    }

    getAndCheck(word) {
        const wv = super.getAndCheck(word);
        if (wv !== this.value)
            throw new InvalidFieldValueError('Got field value of ' + wv + ', expected ' + this.value);
        return wv;
    }

    checkAndSet(word, v) {
        if (v !== this.value)
            throw new InvalidFieldValueError('Setting field value of ' + v + ', expected ' + this.value);
        return super.checkAndSet(word, v);
    }
}