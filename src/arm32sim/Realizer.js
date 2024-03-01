import * as AST from '../grammar/arm32Ast';
import * as I from './Instruction';

export class AssemblyError extends Error {
    constructor(message, node) {
        super(message);
        this.node = node;
    }
}

export function realize(ast) {
    const symbols = {};
    let instructionMaps = [];
    ast.lines.forEach(line => {
        if (line.item instanceof AST.Directive)
            return;
        else if (line.item instanceof AST.Instruction) {
            if (line.label) {
                if (line.label in symbols)
                    throw new AssemblyError('Duplicate symbol: ' + line.label);
                symbols[line.label] = instructionMaps.length;
            }
            instructionMaps = [...instructionMaps, ...realizeInstruction(line.item)];
        } else {
            console.error("Line that is neither a directive nor an instruction in AST: " + line);;
        }
    });

    let i;
    const symbolAddressMapper = symbol => {
        if (symbol === '.')
            return 4 * i;
        else if (symbol in symbols)
            return 4 * symbols[symbol];
        else
            throw new AssemblyError("Unknown symbol: " + symbol);
    };

    console.debug(instructionMaps);
    const realizedInstructions = [];
    for (i = 0; i < instructionMaps.length; ++i) {
        realizedInstructions.push(instructionMaps[i](symbolAddressMapper));
    }

    console.debug('Realized instructions: ', realizedInstructions);

    return realizedInstructions;
}

function realizeInstruction(i) {
    const opcode = i.opcode.toUpperCase();
    if (['CMP', 'CMN', 'MOV', 'MVN', 'TST', 'TEQ', 'CMP', 'CMN', 'AND', 'ANDS', 'EOR', 'EORS', 'SUB', 'SUBS', 'RSB', 'RSBS', 'ADD', 'ADDS', 'ADC', 'ADCS', 'SBC', 'SBCS', 'RSC', 'RSCS'].indexOf(opcode) >= 0)
        return handleIntegerDataProcessingInstruction(i);
    else if (['B', 'BL'].indexOf(opcode) >= 0)
        return handleBranchInstruction(i);
    else if (opcode === 'LDR' && operandSpec(i.operands) === 'RIp')
        return handleLdrPseudoInstruction(i);
    else if (opcode === 'STOP')
        return handleStopInstruction(i);

    throw new AssemblyError("Unhandled opcode: " + i.opcode, i);
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

function packFlexOperand(flex) {
    let bits = 0;
    const amountImm = flex.amountImmediate, amountReg = flex.amountRegister;

    let shiftBits;
    switch (flex.shift.toUpperCase()) {
        case "LSL":
            shiftBits = 0b00;
            break;
        case "LSR":
            shiftBits = 0b01;
            break;
        case "ASR":
            shiftBits = 0b10;
            break;
        case "ROR":
            shiftBits = 0b11;
            break;
        default:
            console.assert(false,  "Invalid shift: " + flex.shift);
    }

    bits = flex.register.number() | (shiftBits << 5);
    if (amountImm !== null)
        bits |= ((amountImm & 0x1f) << 7);
    else if (amountReg !== null)
        bits |= 0b10000 | (amountReg.number() << 8);

    return bits;
}

function handleIntegerDataProcessingInstruction(i) {
    const OpCode = i.opcode.toUpperCase();
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

    const Sbit = !!S
        || ['TST', 'TEQ', 'CMP', 'CMN'].indexOf(OpCode) >= 0;

    if (spec === 'RRI') {
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[2].value & 0xff
        })];
    } else if (spec === 'RRR') {
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[2].number()
        })];
    } else if (spec === 'RRRf') {
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[1].number(),
            Rd: +i.operands[0].number(),
            Operand2: packFlexOperand(i.operands[2])
        })];
    } else if (spec === 'RR'
            && ['TST', 'TEQ', 'CMP', 'CMN'].indexOf(OpCode) >= 0) {
        // No destination register
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[0].number(),
            Rd: 0,
            Operand2: +i.operands[1].number()
        })];
    } else if (spec === 'RR'
            && ['MOV', 'MVN'].indexOf(OpCode) >= 0) {
        // No Rn
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: 0,
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[1].number()
        })];
    } else if (spec === 'RI'
            && ['TST', 'TEQ', 'CMP', 'CMN'].indexOf(OpCode) >= 0) {
        // No destination register
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[0].number(),
            Rd: 0,
            Operand2: +i.operands[1].value & 0xff
        })];
    } else if (spec === 'RI'
            && ['MOV', 'MVN'].indexOf(OpCode) >= 0) {
        // No Rn
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: 0,
            Rd: +i.operands[0].number(),
            Operand2: +i.operands[1].value & 0xff
        })];
    } else if (spec === 'RRf'
            && ['MOV', 'MVN'].indexOf(OpCode) >= 0) {
        // No Rn
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: 0,
            Rd: +i.operands[0].number(),
            Operand2: packFlexOperand(i.operands[1])
        })];
    } else
        throw new AssemblyError("Invalid operands " + spec + " for opcode " + OpCode, i);
}

function handleBranchInstruction(i) {
    const OpCode = i.opcode.toUpperCase();
    if (!!i.S)
        throw new AssemblyError("Opcode " + i.opcode + " cannot take an S!");

    const spec = operandSpec(i.operands);
    const cond = parseCond(i.cond);
    if (spec === 'I') {
        return [() => new I.BranchInstruction({
            Cond: cond,
            '[bits27-25]': 0b101,
            'L': (OpCode === 'BL') ? 0b1 : 0b0,
            'offset': i.operands[0].value & 0xff_ffff,
        })];
    } else if (spec === 'S') {
        const symbol = i.operands[0];
        return [(mapper) => new I.BranchInstruction({
            Cond: cond,
            '[bits27-25]': 0b101,
            'L': (OpCode === 'BL') ? 0b1 : 0b0,
            'offset': (mapper(symbol) - mapper('.')) & 0xff_ffff,
        })];
    } else
        throw new AssemblyError("Invalid operands " + spec + " for opcode " + OpCode, i);
}

function handleLdrPseudoInstruction(i) {
    // Already know this is LDR of an Ip (pseudo-immediate)
    let imm = i.operands[1].value;
    const S = i.s;
    const Cond = i.cond;
    const cond = parseCond(Cond);
    const reg = i.operands[0].number();

    if (!!S)
        throw new AssemblyError("LDRS should not be used with '=number'", i)

    let movByte = imm & 0xff;
    const instrs = [
        () => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: 0b1101, // MOV
            S: 0b0,
            Rn: 0,
            Rd: reg,
            Operand2: movByte
        })
    ];

    let rot = 12;
    for (imm >>>= 8; imm !== 0; imm >>>= 8, rot -= 4) {
        const bottomByte = imm & 0xff;
        if (bottomByte) {
            const operand2 = (rot << 8) | bottomByte;
            instrs.push(() => new I.DataProcessingInstruction({
                Cond: cond,
                '[bits27-26]': 0b00,
                I: 0b1,
                OpCode: 0b1100, // ORR
                S: 0b0,
                Rn: reg,
                Rd: reg,
                Operand2: operand2
            }));
        }
    }

    return instrs;
}

function handleStopInstruction(i) {
    const cond = parseCond(i.cond);
    return [() => new I.StopInstruction({
        Cond: cond,
        '[bits27-25]': 0b011,
        '[bits24-5]': 0,
        '[bit4]': 0b1,
        '[bits3-0]': 0b000,
    })];
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
        else if (typeof op === 'string')
            spec += "S";
        else
            console.assert(false, "Invalid operand type: " + op.prototype.constructor.name);
    }

    return spec;
}