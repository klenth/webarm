import Bitfield from '../bits/Bitfield.js';

class UnalignedAccess extends Error {
    constructor(message) {
        super(message);
    }
}

export default class SimulatorMemory {
    constructor(overrides) {
        this.overrides = {};
        if (overrides)
            Object.assign(this.overrides, overrides);
        else
            this.overrides = {};
    }

    clone() {
        return new SimulatorMemory(this.overrides);
    }

    checkWordAlignment(address) {
        if ((address & 0x3) !== 0)
            throw new UnalignedAccess('Unaligned word read to address ' + address);
    }

    readWord(address) {
        this.checkWordAlignment(address);
        return this.overrides[address >> 2] || 0;
    }

    readByte(address) {
        const word = this.overrides[address >> 2] || null;
        if (word === null)
            return 0;
        const byte = address & 0x3;
        return (word >>> ((3 - byte) << 3)) & 0xff;
    }

    writeWord(address, value) {
        this.checkWordAlignment(address);
        this.overrides[address >> 2] = (value & 0xffff_ffff);
    }

    writeByte(address, value) {
        const word = this.overrides[address >> 2] || 0;
        const byte = address & 0x3;
        this.overrides[address >> 2] = new Bitfield(8, (3 - byte) << 3).set(word, value);
    }

    static reconstruct(o) {
        return new SimulatorMemory(o.overrides);
    }
}
