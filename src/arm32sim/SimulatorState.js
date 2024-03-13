import SimulatorMemory from './SimulatorMemory.js';
import { RegisterBank } from './RegisterBank.js';
import Bitfield from '../bits/Bitfield.js';
import { IOBuffer } from './IOBuffer.js';

const Nbf = new Bitfield(1, 3),
    Zbf = new Bitfield(1, 2),
    Cbf = new Bitfield(1, 1),
    Vbf = new Bitfield(1, 0);

export class SimulatorState {
    constructor(registers, memory, nzcv, numSteps, state, stdin, stdout) {
        this.registers = new RegisterBank(registers);
        if (!registers)
            this.registers.set(13, 0xFF00_0000);
        this.memory = memory ? memory.clone() : new SimulatorMemory();
        this.nzcv = nzcv || 0b0000;
        this.numSteps = numSteps || 0;
        this.state = state || 'running';
        this.stdin = stdin || new IOBuffer();
        this.stdout = stdout || new IOBuffer();
    }

    getPC() {
        return this.registers.get(15);
    }

    advancePC() {
        this.registers.set(15, this.registers.get(15) + 4);
    }

    clone() {
        return new SimulatorState(this.registers, this.memory, this.nzcv, this.numSteps, this.state, this.stdin, this.stdout);
    }

    get SP() {
        return this.registers.get(13);
    }

    set SP(sp) {
        this.registers.set(13, sp);
    }

    get LR() {
        return this.registers.get(14);
    }

    set LR(lr) {
        this.registers.set(14, lr);
    }

    get PC() {
        return this.registers.get(15);
    }

    set PC(pc) {
        this.registers.set(15, pc);
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

    continue() {
        this.state = 'running';
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
            RegisterBank.reconstruct(o.registers),
            o.memory ? SimulatorMemory.reconstruct(o.memory) : o.memory,
            o.nzcv,
            o.numSteps,
            o.state,
            IOBuffer.reconstruct(o.stdin),
            IOBuffer.reconstruct(o.stdout)
        );
    }

    diff(o) {
        const registers = [];
        const nzcv = this.nzcv ^ o.nzcv;
        const mem = this.memory.diff(o.memory);

        for (let i = 0; i < 16; ++i)
            registers[i] = (this.registers.get(i) !== o.registers.get(i));

        return {
            registers: registers,
            nzcv: { N: Nbf.get(nzcv), Z: Zbf.get(nzcv), C: Cbf.get(nzcv), V: Vbf.get(nzcv) },
            memory: mem,
        };
    }
}