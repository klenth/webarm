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

    writeWord(address, value) {
        this.checkWordAlignment(address);
        this.overrides[address >> 2] = (value & 0xffff_ffff);
    }

    static reconstruct(o) {
        return new SimulatorMemory(o.overrides);
    }
}
