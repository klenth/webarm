import SimulatorMemory from './SimulatorMemory';
import SimulatorState from './SimulatorState';
import { Instruction } from './Instruction.js';

function step(state) {
    const newState = state.clone();
    const pc = newState.getPC();
    newState.advancePC();
    const instr = state.memory.readWord(pc);
    execute(instr, newState);
    return newState;
}

function execute(instrCode, state) {
    const instr = Instruction.fromCode(instrCode);
    console.log("Executing " + instr.mnemonic());
}

export { step };
