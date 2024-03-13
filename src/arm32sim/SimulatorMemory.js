import Bitfield from '../bits/Bitfield.js';

class UnalignedAccess extends Error {
}

export default class SimulatorMemory {

    constructor(overrides, writtenAddresses) {
        this.overrides = { ...overrides };
        this.writtenAddresses = new Set(writtenAddresses);
    }

    clone() {
        return new SimulatorMemory(this.overrides, this.writtenAddresses);
    }

    checkWordAlignment(address) {
        if ((address & 0x3) !== 0)
            throw new UnalignedAccess('Unaligned word access to address ' + address);
    }

    readWord(address) {
        this.checkWordAlignment(address);
        return this.overrides[address >>> 2] || 0;
    }

    readByte(address) {
        const word = this.overrides[address >>> 2] || null;
        if (word === null)
            return 0;
        const byte = address & 0x3;
        return (word >>> ((3 - byte) << 3)) & 0xff;
    }

    writeWord(address, value) {
        this.checkWordAlignment(address);
        this.overrides[address >>> 2] = (value & 0xffff_ffff);
        this.writtenAddresses.add((address & 0xffff_fffc) >>> 0);
    }

    writeByte(address, value) {
        const word = this.overrides[address >>> 2] || 0;
        const byte = address & 0x3;
        this.overrides[address >>> 2] = new Bitfield(8, (3 - byte) << 3).set(word, value);
        this.writtenAddresses.add((address & 0xffff_fffc) >>> 0);
    }

    resetWrittenAddressesRecord() {
        this.writtenAddresses = new Set();
    }

    static reconstruct(o) {
        return new SimulatorMemory(o.overrides, o.writtenAddresses);
    }

    diff(o) {
        /*const addrs = {};
        for (const [thisAddr, thisValue] of Object.entries(this.overrides)) {
            if (o.overrides[thisAddr] !== thisValue)
                addrs[thisAddr] = true;
        }

        for (const [otherAddr, otherValue] of Object.entries(o.overrides)) {
            if (otherValue !== this.overrides[otherAddr])
                addrs[otherAddr] = true;
        }*/
        /*const addrs = new Set();
        this.writtenAddresses.forEach(addr => {
            if (this.readWord(addr) !== o.readWord(addr))
                addrs.add(addr);
        });

        return addrs;*/

        return this.writtenAddresses;
    }
}
