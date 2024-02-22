import SimulatorMemory from './SimulatorMemory';

export class SimulatorState {
    constructor(registers, memory) {
        this.registers = Array(16).fill(0);
        for (let i = 0; registers && i < this.registers.length; ++i)
            this.registers[i] = registers[i] & 0xffff_ffff;
        this.memory = memory ? memory.clone() : new SimulatorMemory();
    }

    getPC() {
        return this.registers[15];
    }

    advancePC() {
        this.registers[15] += 4;
    }

    clone() {
        return new SimulatorState(this.registers, this.memory);
    }

    static reconstruct(o) {
        return new SimulatorState(o.registers, o.memory ? SimulatorMemory.reconstruct(o.memory) : o.memory);
    }
}