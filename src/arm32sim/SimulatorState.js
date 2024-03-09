import SimulatorMemory from './SimulatorMemory';
import Bitfield from '../bits/Bitfield.js';

const Nbf = new Bitfield(1, 3),
    Zbf = new Bitfield(1, 2),
    Cbf = new Bitfield(1, 1),
    Vbf = new Bitfield(1, 0);

export class SimulatorState {
    constructor(registers, memory, nzcv, numSteps, state) {
        this.registers = Array(16).fill(0);
        this.registers[13] = 0xFF000000;
        for (let i = 0; registers && i < this.registers.length; ++i)
            this.registers[i] = registers[i] & 0xffff_ffff;
        this.memory = memory ? memory.clone() : new SimulatorMemory();
        this.nzcv = nzcv || 0b0000;
        this.numSteps = numSteps || 0;
        this.state = state || 'running';
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

    get SP() {
        return this.registers[13];
    }

    set SP(sp) {
        this.registers[13] = sp & 0xffff_ffff;
    }

    get LR() {
        return this.registers[14];
    }

    set LR(lr) {
        this.registers[14] = lr & 0xffff_ffff;
    }

    get PC() {
        return this.registers[15];
    }

    set PC(pc) {
        this.registers[15] = pc & 0xffff_ffff;
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

    get running() {
        return this.state !== 'stopped';
    }

    get broken() {
        return this.state === 'broken';
    }

    get stopped() {
        return this.state === 'stopped';
    }

    get interrupted() {
        return this.state === 'interrupted';
    }

    stop() {
        this.state = 'stopped';
    }

    break() {
        this.state = 'broken';
    }

    interrupt() {
        this.state = 'interrupted';
    }

    static reconstruct(o) {
        if (!o)
            return new SimulatorState();
        return new SimulatorState(
            o.registers,
            o.memory ? SimulatorMemory.reconstruct(o.memory) : o.memory,
            o.nzcv,
            o.numSteps,
            o.state,
        );
    }
}