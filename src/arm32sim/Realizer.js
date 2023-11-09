import AST from '../grammar/arm32Ast';
import I from './Instruction';

export default function realize(ast) {
    const instructions = ast.lines.map(line => {
        if (line instanceof AST.Directive)
            return [];
        else if (line instanceof AST.Instruction)
            return realizeInstruction(line);
    }).flatten();
}

function realizeInstruction(i) {
    if (['TST', 'TEQ', 'CMP', 'CMN'].indexOf(i.opcode) >= 0)
        return handleIntegerTestCompareInstruction(i);
    else if (['AND', 'ANDS', 'EOR', 'EORS', 'SUB', 'SUBS', 'RSB', 'RSBS', 'ADD', 'ADDS', 'ADC', 'ADCS', 'SBC', 'SBCS', 'RSC', 'RSCS'].indexOf(i.opcode) >= 0)
        return handleIntegerDataProcessingInstruction(i);
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
    const opc = (ops === 'AND') ?   0b000
        : (ops === 'EOR') ?         0b001
        : (ops === 'SUB') ?         0b010
        : (ops === 'RSB') ?         0b011
        : (ops === 'ADD') ?         0b100
        : (ops === 'ADC') ?         0b101
        : (ops === 'SBC') ?         0b110
        : (ops === 'RSC') ?         0b111
        : null;

    if (spec === 'RRI') {
        return new I.IntegerDataProcessingImmediateInstruction({

        });
    } else if (spec === 'RRR') {

    } else if (spec === 'RRRf') {

    } else
        throw "Invalid operands: " + spec;
}

function operandSpec(operands) {
    let spec = "";
    for (let op of operands) {
        if (op instanceof AST.Register)
            spec += "R";
        else if (op instanceof AST.Immedate)
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