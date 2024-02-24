import SimulatorMemory from './SimulatorMemory';

export class SimulatorState {
    constructor(registers, memory, nzcv) {
        this.registers = Array(16).fill(0);
        for (let i = 0; registers && i < this.registers.length; ++i)
            this.registers[i] = registers[i] & 0xffff_ffff;
        this.memory = memory ? memory.clone() : new SimulatorMemory();
        this.nzcv = nzcv || 0b0000;
    }

    getPC() {
        return this.registers[15];
    }

    advancePC() {
        this.registers[15] += 4;
    }

    clone() {
        return new SimulatorState(this.registers, this.memory, this.nzcv);
    }

    get N() {
        return (this.nzcv >>> 3) & 1;
    }

    set N(n) {
        this.nzcv |= (n & 1) << 3;
    }

    get Z() {
        return (this.nzcv >>> 2) & 1;
    }

    set Z(z) {
        this.nzcv |= (z & 1) << 2;
    }

    get C() {
        return (this.nzcv >>> 1) & 1;
    }

    set C(c) {
        this.nzcv |= (c & 1) << 1;
    }

    get V() {
        return this.nzcv & 1;
    }

    set V(v) {
        this.nzcv |= v & 1;
    }

    static reconstruct(o) {
        return new SimulatorState(
            o.registers,
            o.memory ? SimulatorMemory.reconstruct(o.memory) : o.memory,
            o.nzcv
        );
    }
}