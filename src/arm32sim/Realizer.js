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

function realizeInstruction(i) {
    if (['TST', 'TEQ', 'CMP', 'CMN'].indexOf(i.opcode) >= 0)
        return handleIntegerTestCompareInstruction(i);
    else if (['AND', 'ANDS', 'EOR', 'EORS', 'SUB', 'SUBS', 'RSB', 'RSBS', 'ADD', 'ADDS', 'ADC', 'ADCS', 'SBC', 'SBCS', 'RSC', 'RSCS'].indexOf(i.opcode) >= 0)
        return handleIntegerDataProcessingInstruction(i);
    console.warn("Unhandled opcode in realizeInstruction(): " + i.opcode);
    return [];
}

function handleIntegerTestCompareInstruction(i) {
    const spec = operandSpec(i.operands);

    const cond = 0b0000;
    const opc = (i.opcode === 'TST') ?  0b00
        : (i.opcode === 'TEQ') ?        0b01
        : (i.opcode === 'CMP') ?        0b10
        : (i.opcode === 'CMN') ?        0b11
        : null;

    if (spec === "RI") {
        return new I.IntegerTestCompareImmediateInstruction({
            cond: cond,
            opc: opc,
            Rn: i.operands[0].number(),
            imm12: i.operands[1].value,
        });
    } else if (spec === "RR") {
        return new I.IntegerTestCompareRegisterInstruction({
            cond: cond,
            opc: opc,
            Rn: i.operands[0].number(),
            imm5: 0b00000,
            stype: 0b00,
            Rm: i.operands[1].number(),
        });
    } else if (spec === "RRf") {
        throw "Not yet handled";
    } else
        throw "Invalid operands: " + spec;
}

function handleIntegerDataProcessingInstruction(i) {
    const spec = operandSpec(i.operands);

    let ops = i.opcode;
    const S = i.opcode.endsWith('S');
    if (S)
        ops = ops.slice(0, ops.length - 1);

    const cond = 0b0000;
    const opc = (ops === 'AND') ?   0b0000
        : (ops === 'EOR') ?         0b0001
        : (ops === 'SUB') ?         0b0010
        : (ops === 'RSB') ?         0b0011
        : (ops === 'ADD') ?         0b0100
        : (ops === 'ADC') ?         0b0101
        : (ops === 'SBC') ?         0b0110
        : (ops === 'RSC') ?         0b0111
        : (ops === 'TST') ?         0b1000
        : (ops === 'TEQ') ?         0b1001
        : (ops === 'CMP') ?         0b1010
        : (ops === 'CMN') ?         0b1011
        : (ops === 'ORR') ?         0b1100
        : (ops === 'MOV') ?         0b1101
        : (ops === 'BIC') ?         0b1110
        : (ops === 'MVN') ?         0b1111
        : null;

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
            S: i.S,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[2].value & 0xff
        });
    } else if (spec === 'RRR') {
        // TODO: handle shifts
        return new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: i.S,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[2].number()
        });
    } else if (spec === 'RRRf') {

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