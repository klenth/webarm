import SimulatorMemory from './SimulatorMemory';
import Bitfield from '../bits/Bitfield.js';

const Nbf = new Bitfield(1, 3),
    Zbf = new Bitfield(1, 2),
    Cbf = new Bitfield(1, 1),
    Vbf = new Bitfield(1, 0);
export class SimulatorState {
    constructor(registers, memory, nzcv, numSteps) {
        this.registers = Array(16).fill(0);
        for (let i = 0; registers && i < this.registers.length; ++i)
            this.registers[i] = registers[i] & 0xffff_ffff;
        this.memory = memory ? memory.clone() : new SimulatorMemory();
        this.nzcv = nzcv || 0b0000;
        this.numSteps = numSteps || 0;
    }

    getPC() {
        return this.registers[15];
    }

    advancePC() {
        this.registers[15] += 4;
    }

    clone() {
        return new SimulatorState(this.registers, this.memory, this.nzcv, this.numSteps);
    }

    get N() {
        return Nbf.get(this.nzcv);
    }

    set N(n) {
        this.nzcv = Nbf.set(this.nzcv, n);
    }

    get Z() {
        return Zbf.get(this.nzcv);
    }

    set Z(z) {
        this.nzcv = Zbf.set(this.nzcv, z);
    }

    get C() {
        return Cbf.get(this.nzcv);
    }

    set C(c) {
        this.nzcv = Cbf.set(this.nzcv, c);
    }

    get V() {
        return Vbf.get(this.nzcv);
    }

    set V(v) {
        this.nzcv = Vbf.set(this.nzcv, v);
    }

    static reconstruct(o) {
        return new SimulatorState(
            o.registers,
            o.memory ? SimulatorMemory.reconstruct(o.memory) : o.memory,
            o.nzcv,
            o.numSteps
        );
    }
}