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
import * as arithmetic from '../bits/arithmetic';
import {testAdditionOverflow, testSubtractionOverflow} from '../bits/arithmetic';

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
    ++newState.numSteps;
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

function testCondition(cond, state) {
    switch (cond) {
        case 0b1110:    // AL (default, most common)
            return true;
        case 0b0000:    // EQ
            return state.Z !== 0;
        case 0b0001:    // NE
            return state.Z === 0;
        case 0b0010:    // CS/HS
            return state.C !== 0;
        case 0b0011:    // CC/LO
            return state.C === 0;
        case 0b0100:    // MI
            return state.N !== 0;
        case 0b0101:    // PL
            return state.N === 0;
        case 0b0110:    // VS
            return state.V !== 0;
        case 0b0111:    // VC
            return state.V === 0;
        case 0b1000:    // HI
            return state.C !== 0 && state.Z === 0;
        case 0b1001:    // LS
            return state.C === 0 || state.Z !== 0;
        case 0b1010:    // GE
            return state.N === state.V;
        case 0b1011:    // LT
            return state.N !== state.V;
        case 0b1100:    // GT
            return state.Z === 0 && state.N === state.V;
        case 0b1101:    // LE
            return state.Z !== 0 || state.N !== state.V;
        case 0b1111:    // reserved, error
            console.assert(false, "Condition code of 1111!");
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
    const Cond = instr.get('Cond');
    if (!testCondition(Cond, state))
        return;

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

    function testCV(arg1, arg2, cin) {
        let of;
        switch (OpCode) {
            // TODO: logical operations
            case 0b0100:    // ADD
            case 0b1011:    // CMN
                cin = 0;
            // eslint-disable-next-line no-fallthrough
            case 0b0101:    // ADC
                of = testAdditionOverflow(arg1, arg2, cin);
                return { 'C': of.unsigned, 'V': of.signed };

            case 0b0011:    // RSB
            case 0b0111:    // RSC
                const temp = arg1;
                arg1 = arg2;
                arg2 = temp;
            // eslint-disable-next-line no-fallthrough
            case 0b0010:    // SUB
            case 0b0110:    // SBC
            case 0b1010:    // CMP
                cin = (OpCode === 0b0111 || OpCode === 0b0110) ? cin : 0;
                of = testSubtractionOverflow(arg1, arg2, cin);
                return { 'C': of.unsigned, 'V': of.signed };
            default:
                console.warn("Unimplemented C/V flags for opcode " + OpCode.toString(16));
                return { 'C': 0, 'V': 0 };
        }
    }

    const I = instr.get('I');   // is Operand2 an immediate?
    const S = instr.get('S');   // are we setting condition codes?
    const Rd = instr.get('Rd'); // destination register
    const Rn = instr.get('Rn'); // operand 1
    const Operand2 = instr.get('Operand2');
    const RnValue = state.registers[Rn];

    let result;
    let resultCV;
    if (I) {
        const Rotate = new Bitfield(4, 8).get(Operand2);
        const Imm = new Bitfield(8, 0).get(Operand2);
        const rotatedOperand = rotateRight(Imm, 2 * Rotate);
        console.debug('rotatedOperand = ' + rotatedOperand + ', Imm = ' + Imm);
        // TODO: handle carry in
        result = evaluate(RnValue, rotatedOperand, state.C);
        if (S === 0b1)
            resultCV = testCV(RnValue, rotatedOperand, state.C);
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

        result = evaluate(RnValue, operand, state.C);
        if (S === 0b1)
            resultCV = testCV(RnValue, operand, state.C);
    }

    result &= 0xffff_ffff;

    console.debug('result = ' + result);
    if ((OpCode & 0b1100) !== 0b1000) {
        console.debug('    saving in R' + Rd);
        // The instruction is not TST, TEQ, CMP, or CMN - the value goes into Rd
        state.registers[Rd] = result;
    }

    console.debug('S = ', S);
    // TODO: handle logical operation status bits correctly
    if (S) {
        console.debug('Updating condition codes');
        state.N = (result >>> 31) & 1;
        state.Z = (result === 0) ? 1 : 0;

        if (resultCV) {
            state.C = resultCV.C;
            state.V = resultCV.V;
        }
    }
}
