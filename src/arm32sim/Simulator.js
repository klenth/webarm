import SimulatorMemory from './SimulatorMemory';
import SimulatorState from './SimulatorState';
import {
    decode,
    DataProcessingInstruction,
    MultiplyInstruction,
    SingleDataTransferInstruction,
    BlockDataTransferInstruction,
    BranchInstruction,
    BranchAndExchangeInstruction,
    StopInstruction,
    BreakInstruction, SoftwareInterruptInstruction
} from './Instruction.js';
import Bitfield from '../bits/Bitfield.js';
import { testAdditionOverflow, testSubtractionOverflow, rotateRight } from '../bits/arithmetic.js';

class UnimplementedException {
    constructor(message) {
        this.message = message;
    }

    toString() {
        return this.message;
    }
}

class SimulatorError extends Error {
    constructor(message, state) {
        super(message);
        this.state = state;
    }
}

export function step(state) {
    if (!state.running || state.numSteps >= 1_000_000) {
        return state;
    }
    const newState = state.clone();
    ++newState.numSteps;
    const pc = newState.PC;
    newState.advancePC();
    const instr = state.memory.readWord(pc);
    if (instr === 0)
        newState.stop();   // auto-halt on zero
    else {
        try {
            execute(instr, newState);
        } catch (ex) {
            throw new SimulatorError(ex.message, state);
        }
    }
    return newState;
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
    if (instr === null)
        throw new SimulatorError(`Error decoding instruction 0x${instrCode.toString(16)}`)
    //console.log("Executing " + instr.mnemonic());

    if (instr instanceof DataProcessingInstruction)
        executeDataProcessingInstruction(state, instr);
    else if (instr instanceof MultiplyInstruction)
        executeMultiplyInstruction(state, instr);
    else if (instr instanceof SingleDataTransferInstruction)
        executeSingleDataTransferInstruction(state, instr);
    else if (instr instanceof BlockDataTransferInstruction)
        executeBlockDataTransferInstruction(state, instr);
    else if (instr instanceof BranchInstruction)
        executeBranchInstruction(state, instr);
    else if (instr instanceof BranchAndExchangeInstruction)
        executeBranchAndExchangeInstruction(state, instr);
    else if (instr instanceof StopInstruction)
        executeStopInstruction(state, instr);
    else if (instr instanceof BreakInstruction)
        executeBreakInstruction(state, instr);
    else if (instr instanceof SoftwareInterruptInstruction)
        executeSoftwareInterruptInstruction(state, instr);
    else
        throw new SimulatorError(`Unimplemented instruction ${instr.mnemonic()}`);
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
                //console.warn("Unimplemented C/V flags for opcode " + OpCode.toString(16));
                // Note: C/V flags unimplemented for logical instructions (this is probably not an issue)
                return { 'C': 0, 'V': 0 };
        }
    }

    const I = instr.get('I');   // is Operand2 an immediate?
    const S = instr.get('S');   // are we setting condition codes?
    const Rd = instr.get('Rd'); // destination register
    const Rn = instr.get('Rn'); // operand 1
    const Operand2 = instr.get('Operand2');
    const RnValue = state.registers.get(Rn);

    let result;
    let resultCV;
    if (I) {
        const Rotate = new Bitfield(4, 8).get(Operand2);
        const Imm = new Bitfield(8, 0).get(Operand2);
        const rotatedOperand = rotateRight(Imm, 2 * Rotate);

        result = evaluate(RnValue, rotatedOperand, state.C);
        if (S === 0b1)
            resultCV = testCV(RnValue, rotatedOperand, state.C);
    } else {
        const Shift = new Bitfield(8, 4).get(Operand2);
        const Rm = new Bitfield(4, 0).get(Operand2);
        const ShiftType = new Bitfield(2, 5).get(Operand2);
        const RmValue = state.registers.get(Rm);
        let operand;
        if ((Shift & 1) === 0b0) {
            // Amount to shift is encoded in top 5 bits of Shift
            const ShiftAmount = new Bitfield(5, 7).get(Operand2);
            operand = shift(RmValue, ShiftAmount, ShiftType);
        } else {
            // Amount to shift is the bottom bit of a register specified in top 4 bits
            const Rs = new Bitfield(4, 8).get(Operand2);
            const RsValue = state.registers.get(Rs);
            operand = shift(RmValue, RsValue & 0xff, ShiftType);
        }

        result = evaluate(RnValue, operand, state.C);
        if (S === 0b1)
            resultCV = testCV(RnValue, operand, state.C);
    }

    result &= 0xffff_ffff;

    //console.debug('result = ' + result);
    if ((OpCode & 0b1100) !== 0b1000) {
        //console.debug('    saving in R' + Rd);
        // The instruction is not TST, TEQ, CMP, or CMN - the value goes into Rd
        state.registers.set(Rd, result);
    }

    //console.debug('S = ', S);
    // TODO: handle logical operation status bits correctly
    if (S) {
        //console.debug('Updating condition codes');
        state.N = (result >>> 31) & 1;
        state.Z = (result === 0) ? 1 : 0;

        if (resultCV) {
            state.C = resultCV.C;
            state.V = resultCV.V;
        }
    }
}

function executeMultiplyInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (!testCondition(Cond, state))
        return;

    const { A, S, Rd, Rn, Rs, Rm } = instr.fieldValues;

    const product = (state.registers.get(Rm) * state.registers.get(Rs)) & 0xffff_ffff;
    const result = (A ? product + state.registers.get(Rn) : product) & 0xffff_ffff;

    state.registers.set(Rd, result);
    if (S) {
        state.Z = (result === 0);
        state.N = (result & 0x8000_0000) !== 0;
    }
}

function executeSingleDataTransferInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (!testCondition(Cond, state))
        return;

    const {I, P, U, B, W, L, Rn, Rd, Offset} = instr.fieldValues;
    const baseAddress = state.registers.get(Rn);
    let adjustedAddress = baseAddress;

    if (!I) {
        // immediate offset
        const off = (Offset << 20) >> 20;
        adjustedAddress += U ? off : -off;
    } else {
        const shiftSrc = Offset & 0x10;
        if (shiftSrc !== 0)
            throw new SimulatorError(`LDR/STR asked to shift by register amount`, state);
        const offRegister = new Bitfield(4, 0).get(Offset);
        // shift(value, bits, typeEncoded)
        const shiftBits = new Bitfield(5, 7).get(Offset);
        const shiftType = new Bitfield(2, 5).get(Offset);

        const offAmount = shift(state.registers.get(offRegister), shiftBits, shiftType);
        adjustedAddress += U ? offAmount : -offAmount;
    }

    const targetAddress = P ? adjustedAddress : baseAddress;

    if (L && !B) {          // LDR (load word) - most common
        const alignedAddress = targetAddress & 0xffff_fffc;
        const wordOffset = targetAddress & 0x0000_0003;
        state.registers.set(Rd, rotateRight(state.memory.readWord(alignedAddress), 8 * wordOffset));
    } else if (!L && !B) {  // STR (store word)
        const alignedAddress = targetAddress & 0xffff_fffc;
        state.memory.writeWord(alignedAddress, state.registers.get(Rd));
    } else if (L && B)      // LDRB (load byte)
        state.registers.set(Rd, state.memory.readByte(targetAddress));
    else //(!L && B)        // STRB (store byte)
        state.memory.writeByte(targetAddress, state.registers.get(Rd) & 0xff);

    if (!P || W) {
        // writeback into base register
        state.registers.set(Rn, adjustedAddress);
    }
}

function executeBlockDataTransferInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (!testCondition(Cond, state))
        return;

    const { P, U, W, L, Rn, RegisterList } = instr.fieldValues;
    // P=1: pre (final value of Rn is last addr written)
    // P=0: post (final value of Rn is past last addr written)
    // U=1: up (increase addr from base)
    // U=0: down (decrease addr from base)
    // W: writeback
    // L=1: load (L=0: store)

    let address = state.registers.get(Rn) & 0xffff_fffc; // align the address

    // The spec is that the lowest-numbered register is always loaded from / stored to the numerically lowest address —
    // *not* the address nearest the base. There's probably a more efficient way to handle this, but this has the virtue
    // of simplicity.
    if (U) {
        for (let reg = 0; reg < 16; ++reg) {
            if ((RegisterList & (1 << reg)) !== 0) {
                if (P)
                    address += 4;

                if (L)
                    state.registers.set(reg, state.memory.readWord(address));
                else
                    state.memory.writeWord(address, state.registers.get(reg));

                if (!P)
                    address += 4;
            }
        }
    } else {
        for (let reg = 15; reg >= 0; --reg) {
            if ((RegisterList & (1 << reg)) !== 0) {
                if (P)
                    address -=4;

                if (L)
                    state.registers.set(reg, state.memory.readWord(address));
                else
                    state.memory.writeWord(address, state.registers.get(reg));

                if (!P)
                    address -= 4;
            }
        }
    }

    if (W)
        state.registers.set(Rn, address);
}

function executeBranchInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (!testCondition(Cond, state))
        return;

    const L = instr.get('L');
    const offset = (instr.get('offset') << 8) >> 6;

    const pc = state.getPC();

    if (L)
        state.LR = pc;

    state.PC = pc + offset; // the assembler is supposed to take prefetch into account
}

function executeBranchAndExchangeInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (!testCondition(Cond, state))
        return;

    const Rn = instr.get('Rn');
    // the documentation isn't specific as to what happens if the address is unaligned - I will just force it to be
    // aligned by discarding the bottom two bits.
    state.PC = state.registers.get(Rn) & 0xffff_fffc;
}

function executeStopInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (testCondition(Cond, state))
        state.stop();
}

function executeBreakInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (testCondition(Cond, state))
        state.break();
}

function executeSoftwareInterruptInstruction(state, instr) {
    const Cond = instr.get('Cond');
    if (testCondition(Cond, state))
        state.interrupt();
}
