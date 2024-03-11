import SimulatorState from './SimulatorState';
import SimulatorMemory from './SimulatorMemory';
import Bitfield from '../bits/Bitfield';
import * as format from '../format.js';
import * as bits from '../bits/arithmetic.js';
import In from 'antlr4';

export class InstructionFormatError extends Error {}

const INSTRUCTION_DECODERS = [];

const registerInstructionDecoder = function(decoder) {
    INSTRUCTION_DECODERS.push(decoder);
}

const registerOpcodeDecoder = function(mask, value, decoder) {
    registerInstructionDecoder(
        code => ((code & mask) === value) ? decoder(code) : null
    );
}

export function decode(code) {
    let instr;
    for (let decoder of INSTRUCTION_DECODERS) {
        instr = decoder(code);
        if (instr)
            return instr;
    }
    return null;
}

function decodeFieldValues(word, format) {
    const fields = format.fields;
    const fieldValues = {};
    for (let name of Object.keys(fields))
        fieldValues[name] = fields[name].getAndCheck(word);

    return fieldValues;
}

export class Instruction {
    constructor(fieldValues) {
        this.fieldValues = { ...fieldValues };
    }

    format() {
        throw "format() not overridden";
    }

    mnemonic() {
        return "mnemonic() not overridden";
    }

    get(fieldName) {
        return this.fieldValues[fieldName];
    }

    encode() {
        const fields = this.format().fields;
        let word = 0;
        for (let name of Object.keys(fields))
            word = fields[name].checkAndSet(word, this.get(name));
        return word;
    }

    toString() {
        return this.mnemonic();
    }
}

export class InstructionFormat {
    constructor(fields) {
        this.fields = fields;

        let bits = 0;
        for (let name of Object.keys(this.fields)) {
            const field = this.fields[name];
            if (field.get(bits) !== 0)
                throw new InstructionFormatError('Instruction format has field overlap! [' + name + ']');
            bits = field.setOnes(bits);
        }

        console.debug(`bits = ${bits}`);
        if ((bits ^ 0xffff_ffff) !== 0)
            throw new InstructionFormatError('Instruction format does not cover all 32 bits!');
    }
}

export class BranchInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-25]': new Bitfield(3, 25).asConstant(0b101),
        'L': new Bitfield(1, 24),
        'offset': new Bitfield(24, 0)
    });

    format() {
        return BranchInstruction._format;
    }

    mnemonic() {
        if (this.get('L'))
            return 'BL';
        else
            return 'B';
    }

    toString() {
        let { Cond, L, offset } = this.fieldValues;
        offset = ((offset << 8) >> 6) + 4;
        const addr = (offset >= 0) ? `#0x${format.hex(offset)}`
            : `#-0x${format.hex(-offset)}`;
        return `B${L ? 'L' : ''}${condToString(Cond)} ${addr}`;
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, BranchInstruction._format);
        return new BranchInstruction(fieldValues);
    }
}

export class BranchAndExchangeInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-4]': new Bitfield(24, 4).asConstant(0b0001_0010_1111_1111_1111_0001),
        Rn: new Bitfield(4, 0)
    });

    format() {
        return BranchAndExchangeInstruction._format;
    }

    mnemonic() {
        return 'BX';
    }

    toString() {
        const { Cond, Rn } = this.fieldValues;
        return `BX${condToString(Cond)} ${registerToString(Rn)}`;
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, BranchAndExchangeInstruction._format);
        return new BranchAndExchangeInstruction(fieldValues);
    }
}

export class DataProcessingInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-26]': new Bitfield(2, 26).asConstant(0b00),
        I: new Bitfield(1, 25),
        OpCode: new Bitfield(4, 21),
        S: new Bitfield(1, 20),
        Rn: new Bitfield(4, 16),
        Rd: new Bitfield(4, 12),
        Operand2: new Bitfield(12, 0)
    });

    static _opcodes = {
        0b0000: 'AND',
        0b0001: 'EOR',
        0b0010: 'SUB',
        0b0011: 'RSB',
        0b0100: 'ADD',
        0b0101: 'ADC',
        0b0110: 'SBC',
        0b0111: 'RSC',
        0b1000: 'TST',
        0b1001: 'TEQ',
        0b1010: 'CMP',
        0b1011: 'CMN',
        0b1100: 'ORR',
        0b1101: 'MOV',
        0b1110: 'BIC',
        0b1111: 'MVN'
    }

    format() {
        return DataProcessingInstruction._format;
    }

    mnemonic() {
        let m = DataProcessingInstruction._opcodes[this.get('OpCode')];
        if (this.get('S') && ['TST', 'TEQ', 'CMP', 'CMN'].indexOf(m) < 0)
            m += 'S';

        return m;
    }

    toString() {
        const {Cond, I, OpCode, S, Rn, Rd, Operand2} = this.fieldValues;
        const opcode = this.mnemonic();

        let op2String;
        if (I) {
            const rotate = (Operand2 & 0xf00) >>> 8;
            const imm = ((Operand2 & 0x0ff) << 24) >> 24;
            const op = bits.rotateRight(imm, 2 * rotate) >>> 0;

            op2String = `#0x${format.hex(op)}`;
        } else {
            const Rm = Operand2 & 0xf;
            const shiftType = (Operand2 & 0x60) >>> 5;
            const shiftOp = ['LSL', 'LSR', 'ASR', 'ROR'][shiftType];
            if ((Operand2 & 0x10) === 0) {
                // shift amount is immediate
                const shiftAmount = (Operand2 & 0xf80) >>> 7;
                if (shiftAmount !== 0)
                    op2String = `${registerToString(Rm)}, ${shiftOp} #0x${format.hex(shiftAmount)}`;
                else
                    op2String = `${registerToString(Rm)}`;
            } else {
                // shift amount is in a register
                const Rs = Operand2 >>> 8;
                op2String = `${registerToString(Rm)}, ${shiftOp} ${registerToString(Rs)}`;
            }
        }

        if ([0b1000, 0b1001, 0b1010, 0b1011].indexOf(OpCode) >= 0)
            // TST/TEQ/CMP/CMN - no Rd
            return `${opcode}${condToString(Cond)} ${registerToString(Rn)}, ${op2String}`;
        else if ([0b1101, 0b1111].indexOf(OpCode) >= 0)
            // MOV/MVN - no Rn
            return `${opcode}${condToString(Cond)} ${registerToString(Rd)}, ${op2String}`;
        else
            return `${opcode}${condToString(Cond)} ${registerToString(Rd)}, ${registerToString(Rn)}, ${op2String}`;
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, DataProcessingInstruction._format);
        return new DataProcessingInstruction(fieldValues);
    }
}

export class MultiplyInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-22]': new Bitfield(6, 22),
        A: new Bitfield(1, 21),
        S: new Bitfield(1, 20),
        Rd: new Bitfield(4, 16),
        Rn: new Bitfield(4, 12),
        Rs: new Bitfield(4, 8),
        '[bits7-4]': new Bitfield(4, 4).asConstant(0b1001),
        Rm: new Bitfield(4, 0)
    });

    format() {
        return MultiplyInstruction._format;
    }

    mnemonic() {
        const A = this.get('A');
        return A ? 'MLA' : 'MUL';
    }

    toString() {
        const { Cond, A, S, Rd, Rn, Rs, Rm } = this.fieldValues;
        if (A)
            return `MLA${S? 'S' : ''}${condToString(Cond)} ${registerToString(Rd)}, ${registerToString(Rm)}, ${registerToString(Rs)}, ${registerToString(Rn)}`;
        else
            return `MUL${S? 'S' : ''}${condToString(Cond)} ${registerToString(Rd)}, ${registerToString(Rm)}, ${registerToString(Rs)}`;
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, MultiplyInstruction._format);
        return new MultiplyInstruction(fieldValues);
    }
}

export class SingleDataTransferInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-26]': new Bitfield(2, 26).asConstant(0b01),
        I: new Bitfield(1, 25),         // is the offset immediate?
        P: new Bitfield(1, 24),         // pre- or post-index?
        U: new Bitfield(1, 23),         // up or down?
        B: new Bitfield(1, 22),         // byte or word?
        W: new Bitfield(1, 21),         // writeback?
        L: new Bitfield(1, 20),         // load or store?
        Rn: new Bitfield(4, 16),
        Rd: new Bitfield(4, 12),
        Offset: new Bitfield(12, 0)
    });

    format() {
        return SingleDataTransferInstruction._format;
    }

    mnemonic() {
        const B = this.get('B'), L = this.get('L');
        const prefix = L ? 'LDR' : 'STR';
        return B ? prefix + 'B' : prefix;
    }

    toString() {
        const { Cond, I, P, U, W, Rn, Rd, Offset } = this.fieldValues;
        const opcode = this.mnemonic();

        let offOperand;
        if (I === 0) {
            // immediate offset
            if (Offset === 0)
                offOperand = '';
            else
                offOperand = `, #${U ? '' : '-'}0x${format.hex(Offset)}`;
        } else {
            const Rm = Offset & 0xf;
            if ((Offset & 0x10) !== 0)
                throw new InstructionFormatError(`Invalid ${opcode} instruction`);
            const shiftType = (Offset & 0x60) >> 5;
            const shiftAmount = (Offset & 0xf80) >>> 7;
            if (shiftAmount === 0)
                offOperand = `, ${U ? '' : '-'}${registerToString(Rm)}`;
            else {
                const shiftOp = ['LSL', 'LSR', 'ASR', 'ROR'][shiftType];
                offOperand = `, ${U ? '' : '-'}${registerToString(Rm)}, ${shiftOp} #${shiftAmount}`;
            }
        }

        const preamble =`${opcode}${condToString(Cond)} ${registerToString(Rd)},`;
        if (P)
            return `${preamble} [${registerToString(Rn)}${offOperand}]${W ? '!' : ''}`;
        else {
            if (W)
                throw new InstructionFormatError(`Invalid ${opcode} instruction`);
            return `${preamble} [${registerToString(Rn)}]${offOperand}`;
        }
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, SingleDataTransferInstruction._format);
        return new SingleDataTransferInstruction(fieldValues);
    }
}

export class BlockDataTransferInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-25]': new Bitfield(3, 25).asConstant(0b100),
        P: new Bitfield(1, 24),
        U: new Bitfield(1, 23),
        S: new Bitfield(1, 22),
        W: new Bitfield(1, 21),
        L: new Bitfield(1, 20),
        Rn: new Bitfield(4, 16),
        RegisterList: new Bitfield(16, 0)
    });

    format() {
        return BlockDataTransferInstruction._format;
    }

    mnemonic() {
        return this.get('L') ? 'LDM' : 'STM';
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, BlockDataTransferInstruction._format);
        return new BlockDataTransferInstruction(fieldValues);
    }
}

export class StopInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-25]': new Bitfield(3, 25).asConstant(0b011),
        '[bits24-5]': new Bitfield(20, 5).asConstant(0),
        '[bit4]': new Bitfield(1, 4).asConstant(1),
        '[bits3-0]': new Bitfield(4, 0).asConstant(0b0000)
    });

    format() {
        return StopInstruction._format;
    }

    mnemonic() {
        return 'STOP';
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, StopInstruction._format);
        return new StopInstruction(fieldValues);
    }
}

export class BreakInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-25]': new Bitfield(3, 25).asConstant(0b011),
        '[bits24-5]': new Bitfield(20, 5).asConstant(0),
        '[bit4]': new Bitfield(1, 4).asConstant(1),
        '[bits3-0]': new Bitfield(4, 0).asConstant(0b0001)
    });

    format() {
        return BreakInstruction._format;
    }

    mnemonic() {
        return 'BREAK';
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, BreakInstruction._format);
        return new BreakInstruction(fieldValues);
    }
}

export class SoftwareInterruptInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-24]': new Bitfield(4, 24).asConstant(0b1111),
        '[bits23-0]': new Bitfield(24, 0),
    });

    format() {
        return SoftwareInterruptInstruction._format;
    }

    mnemonic() {
        return 'SWI';
    }

    static fromCode(word) {
        const fieldValues = decodeFieldValues(word, SoftwareInterruptInstruction._format);
        return new SoftwareInterruptInstruction(fieldValues);
    }
}

export class DummyInstruction extends Instruction {
    static _format = new InstructionFormat({
        bits: new Bitfield(32, 0)
    });

    format() {
        return DummyInstruction._format;
    }

    mnemonic() {
        return '[dummy instruction]';
    }

    static fromCode(_) {
        throw new InstructionFormatError('Attempt to disassemble a dummy instruction!');
    }
}

registerOpcodeDecoder(0x0fff_fff0, 0x012f_ff10, BranchAndExchangeInstruction.fromCode);
registerOpcodeDecoder(0x0e00_001f, 0x0600_0010, StopInstruction.fromCode);
registerOpcodeDecoder(0x0e00_001f, 0x0600_0011, BreakInstruction.fromCode);
registerOpcodeDecoder(0x0c00_0000, 0x0400_0000, SingleDataTransferInstruction.fromCode);
registerOpcodeDecoder(0x0e00_0000, 0x0800_0000, BlockDataTransferInstruction.fromCode);
registerOpcodeDecoder(0x0e00_0000, 0x0a00_0000, BranchInstruction.fromCode);
registerOpcodeDecoder(0x0f80_00f0, 0x0000_0090, MultiplyInstruction.fromCode);
registerOpcodeDecoder(0x0c00_0000, 0x0000_0000, DataProcessingInstruction.fromCode);
registerOpcodeDecoder(0x0f00_0000, 0x0f00_0000, SoftwareInterruptInstruction.fromCode);

function condToString(cond) {
    if (cond === 0b1111)
        throw new InstructionFormatError('Invalid Cond field: 0b1111');
    return ['EQ', 'NE', 'HS', 'LO', 'MI', 'PL', 'VS', 'VC', 'HI', 'LS', 'GE', 'LT', 'GT', 'LE', ''][cond];
}

function registerToString(reg) {
    return 'R' + reg;
}
