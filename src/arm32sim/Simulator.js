import SimulatorMemory from './SimulatorMemory';
import SimulatorState from './SimulatorState';
import {
    Instruction,
    decode,
    IntegerDataProcessingImmediateInstruction,
    IntegerDataProcessingRegisterInstruction,
    DataProcessingInstruction
} from './Instruction.js';
import Bitfield from '../bits/Bitfield';

class UnimplementedException {
    constructor(message) {
        this.message = message;
    }

    toString() {
        return this.message;
    }
}

export function step(state) {
    const newState = state.clone();
    const pc = newState.getPC();
    newState.advancePC();
    const instr = state.memory.readWord(pc);
    execute(instr, newState);
    return newState;
}

function rotateRight(value, bits) {
    const rightBits = new Bitfield(bits, 0).get(value);
    value >>>= bits;
    value |= (rightBits << (32 - bits));
    return value;
}

function shift(value, bits, typeEncoded) {
    switch (typeEncoded) {
        case 0b00:
            return value << bits;
        case 0b01:
            return value >>> bits;
        case 0b10:
            return value >> bits;
        case 0b11:
            return rotateRight(value, bits);
        default:
            throw new UnimplementedException("Unimplemented shift type: " + typeEncoded.toString(2));
    }
}

function evalBinary(mnemonic, val1, val2) {
    switch (mnemonic) {
        case 'AND':
            return val1 & val2;
        case 'EOR':
            return val1 ^ val2;
        case 'SUB':
            return val1 - val2;
        case 'RSB':
            return val2 - val1;
        case 'ADD':
            return val1 + val2;
        case 'ADC':
        case 'RSC':
            throw "unimplemented op with carry";
    }
}

function execute(instrCode, state) {
    const instr = decode(instrCode);
    if (instr === null) {
        console.error("Error decoding instruction: " + instrCode.toString(16));
        return;
    }
    console.log("Executing " + instr.mnemonic());

    if (instr instanceof DataProcessingInstruction) {
        executeDataProcessingInstruction(state, instr);
    } else
        console.error("Unimplemented instruction: " + instr.mnemonic());
}

function executeDataProcessingInstruction(state, instr) {
    const OpCode = instr.get('OpCode');

    function evaluate(arg1, arg2, c) {
        switch (OpCode) {
            case 0b0000: // AND
            case 0b1000: // TST
                return arg1 & arg2;
            case 0b0001: // EOR
            case 0b1001: // TEQ
                return arg1 ^ arg2;
            case 0b0010: // SUB
            case 0b1010: // CMP
                return arg1 - arg2;
            case 0b0011: // RSB
                return arg2 - arg1;
            case 0b0100: // ADD
            case 0b1011: // CMN
                return arg1 + arg2;
            case 0b0101: // ADC
                return arg1 + arg2 + c;
            case 0b0110: // SBC
                return arg1 - arg2 + c - 1;
            case 0b0111: // RSC
                return arg2 - arg1 + c - 1;
            case 0b1100: // ORR
                return arg1 | arg2;
            case 0b1101: // MOV
                return arg2;
            case 0b1110: // BIC
                return arg1 & ~arg2;
            case 0b1111: // MVN
                return ~arg2;
            default:
                throw new UnimplementedException("evaluate() unimplemented for opcode " + OpCode.toString(2));
        }
    }

    // TODO: handle Cond
    const I = instr.get('I');   // is Operand2 an immediate?
    const S = instr.get('S');   // are we setting condition codes?
    const Rd = instr.get('Rd'); // destination register
    const Rn = instr.get('Rn'); // operand 1
    const Operand2 = instr.get('Operand2');
    const RnValue = state.registers[Rn];

    let result;
    if (I) {
        const Rotate = new Bitfield(4, 8).get(Operand2);
        const Imm = new Bitfield(8, 0).get(Operand2);
        const rotatedOperand = rotateRight(Imm, 2 * Rotate);
        console.debug('rotatedOperand = ' + rotatedOperand + ', Imm = ' + Imm);
        // TODO: handle carry in
        result = evaluate(RnValue, rotatedOperand);
    } else {
        const Shift = new Bitfield(8, 4).get(Operand2);
        const Rm = new Bitfield(4, 0).get(Operand2);
        const ShiftType = new Bitfield(2, 5).get(Operand2);
        const RmValue = state.registers[Rm];
        let operand;
        if ((Shift & 1) === 0b0) {
            // Amount to shift is encoded in top 5 bits of Shift
            const ShiftAmount = new Bitfield(5, 7).get(Operand2);
            operand = shift(RmValue, ShiftAmount, ShiftType);
        } else {
            // Amount to shift is the bottom bit of a register specified in top 4 bits
            const Rs = new Bitfield(4, 8).get(Operand2);
            const RsValue = state.registers[Rs];
            operand = shift(RmValue, RsValue & 0xff, ShiftType);
        }

        result = evaluate(RnValue, operand);
    }

    console.debug('result = ' + result);
    if ((OpCode & 0b1100) !== 0b1000) {
        // The instruction is not TST, TEQ, CMP, or CMN - the value goes into Rd
        state.registers[Rd] = result;
    }

    // TODO: handle carry out, condition codes in general
}