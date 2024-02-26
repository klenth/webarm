import * as AST from '../grammar/arm32Ast';
import * as I from './Instruction';

export function realize(ast) {
    return ast.lines.flatMap(line => {
        if (line.item instanceof AST.Directive)
            return [];
        else if (line.item instanceof AST.Instruction)
            return realizeInstruction(line.item);
        else {
            console.error("Line that is neither a directive nor an instruction in AST: " + line);
            return [];
        }
    });
}

/*
const BASIC_MNEMONIC_PATTERN = /^(CMP|CMN|TST|TEQ|MOV|MVN|ADR|LDR|ADD|ADC|SUB|SBC|RSB|RSC|AND|EOR|BIC|ORR|ROR|RRX|LSR|ASR|LSL)(S?)(EQ|NE|CS|HS|CC|LO|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL|)$/i;

function realizeInstruction(i) {
    let match = BASIC_MNEMONIC_PATTERN.exec(i.opcode);
    if (match) {
        const OpCode = match[1];
        const S = (match[2] !== '');
        const Cond = match[3];
        if (['CMP', 'CMN', 'MOV', 'MVN', 'TST', 'TEQ', 'CMP', 'CMN', 'AND', 'ANDS', 'EOR', 'EORS', 'SUB', 'SUBS', 'RSB', 'RSBS', 'ADD', 'ADDS', 'ADC', 'ADCS', 'SBC', 'SBCS', 'RSC', 'RSCS'].indexOf(OpCode) >= 0)
            return handleIntegerDataProcessingInstruction(i, OpCode, S, Cond);
    }

    console.error("Unhandled opcode in realizeInstruction(): " + i.opcode);
    return [];
}
*/

function realizeInstruction(i) {
    if (['CMP', 'CMN', 'MOV', 'MVN', 'TST', 'TEQ', 'CMP', 'CMN', 'AND', 'ANDS', 'EOR', 'EORS', 'SUB', 'SUBS', 'RSB', 'RSBS', 'ADD', 'ADDS', 'ADC', 'ADCS', 'SBC', 'SBCS', 'RSC', 'RSCS'].indexOf(i.opcode) >= 0)
        return handleIntegerDataProcessingInstruction(i);

    console.error("Unhandled opcode in realizeInstruction(): " + i.opcode);
    return [];
}


function parseCond(cond) {
    switch (cond.toUpperCase()) {
        case '':
        case 'AL':
            return 0b1110;
        case 'EQ':
            return 0b0000;
        case 'NEQ':
            return 0b0001;
        case 'CS':
        case 'HS':
            return 0b0010;
        case 'CC':
        case 'LO':
            return 0b0011;
        case 'MI':
            return 0b0100;
        case 'PL':
            return 0b0101;
        case 'VS':
            return 0b0110;
        case 'VC':
            return 0b0111;
        case 'HI':
            return 0b1000;
        case 'LS':
            return 0b1001;
        case 'GE':
            return 0b1010;
        case 'LT':
            return 0b1011;
        case 'GT':
            return 0b1100;
        case 'LE':
            return 0b1101;
        default:
            console.assert(false, 'Invalid condition suffix: ' + cond);
    }
}

function handleIntegerDataProcessingInstruction(i) {
    const OpCode = i.opcode;
    const S = i.s;
    const Cond = i.cond;

    const spec = operandSpec(i.operands);

    const cond = parseCond(Cond);
    const opc =
          (OpCode === 'AND') ?         0b0000
        : (OpCode === 'EOR') ?         0b0001
        : (OpCode === 'SUB') ?         0b0010
        : (OpCode === 'RSB') ?         0b0011
        : (OpCode === 'ADD') ?         0b0100
        : (OpCode === 'ADC') ?         0b0101
        : (OpCode === 'SBC') ?         0b0110
        : (OpCode === 'RSC') ?         0b0111
        : (OpCode === 'TST') ?         0b1000
        : (OpCode === 'TEQ') ?         0b1001
        : (OpCode === 'CMP') ?         0b1010
        : (OpCode === 'CMN') ?         0b1011
        : (OpCode === 'ORR') ?         0b1100
        : (OpCode === 'MOV') ?         0b1101
        : (OpCode === 'BIC') ?         0b1110
        : (OpCode === 'MVN') ?         0b1111
        : null;

    console.debug('In realizer for ' + OpCode + ', S = ', S);
    const Sbit = !!S
        || ['TST', 'TEQ', 'CMP', 'CMN'].indexOf(OpCode) >= 0;

    /*
    if (spec === 'RRI') {
        return new I.IntegerDataProcessingImmediateInstruction({
            cond: cond,
            '[bits27-24]': 0b0010,
            opc: opc,
            S: i.S,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            imm12: +i.operands[2].value,
        });
    } else if (spec === 'RRR') {
        return new I.IntegerDataProcessingRegisterInstruction({
            cond: cond,
            '[bits27-24]': 0b0000,
            'opc': opc,
            S: i.S,
            Rn: +i.operands[0].number(),

        });
    } */
    if (spec === 'RRI') {
        // TODO: handle rotated immediates
        return new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[2].value & 0xff
        });
    } else if (spec === 'RRR') {
        // TODO: handle shifts
        return new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[2].number()
        });
    } else if (spec === 'RRRf') {
        console.error("Unhandled operand specs: " + spec);
    } else if (spec === 'RR'
            && ['TST', 'TEQ', 'CMP', 'CMN'].indexOf(OpCode) >= 0) {
        // No destination register
        return new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[0].number(),
            Rd: 0,
            Operand2: +i.operands[1].number()
        });
    } else if (spec === 'RR'
            && ['MOV', 'MVN'].indexOf(OpCode) >= 0) {
        // No Rn
        return new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: 0,
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[1].number()
        });
    } else if (spec === 'RI'
            && ['MOV', 'MVN'].indexOf(OpCode) >= 0) {
        // No Rn
        return new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: 0,
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[1].value & 0xff
        });
    } else
        throw "Invalid operands: " + spec;
}

function operandSpec(operands) {
    let spec = "";
    for (let op of operands) {
        if (op instanceof AST.Register)
            spec += "R";
        else if (op instanceof AST.Immediate)
            spec += "I";
        else if (op instanceof AST.FlexOperand)
            spec += "Rf";
        else if (op instanceof AST.PseudoImmediate)
            spec += "Ip";
        else
            throw "Invalid operand type: " + op.prototype.constructor.name;
    }

    return spec;
}