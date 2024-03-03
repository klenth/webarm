import * as AST from '../grammar/arm32Ast';
import * as I from './Instruction';
import { rotateRight } from '../bits/arithmetic.js';

export class AssemblyError extends Error {
    constructor(message, node) {
        super(message);
        this.node = node;
    }
}

export function realize(ast) {
    const symbols = {};
    let addressLineMap = {};
    let instructionMaps = [];
    ast.lines.forEach(line => {
        if (line.item === null && line.label)
            symbols[line.label] = instructionMaps.length;
        else if (line.item instanceof AST.Directive)
            return;
        else if (line.item instanceof AST.Instruction) {
            if (line.label) {
                if (line.label in symbols)
                    throw new AssemblyError('Duplicate symbol: ' + line.label);
                symbols[line.label] = instructionMaps.length;
            }
            addressLineMap[4 * instructionMaps.length] = line.lineNumber;
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

    const realizedInstructions = [];
    for (i = 0; i < instructionMaps.length; ++i) {
        realizedInstructions.push(instructionMaps[i](symbolAddressMapper));
    }

    return {
        code: realizedInstructions,
        addressLineMap: addressLineMap,
    };
}

function realizeInstruction(i) {
    const opcode = i.opcode.toUpperCase();
    if (['CMP', 'CMN', 'MOV', 'MVN', 'TST', 'TEQ', 'CMP', 'CMN', 'AND', 'ANDS', 'EOR', 'EORS', 'SUB', 'SUBS', 'RSB', 'RSBS', 'ADD', 'ADDS', 'ADC', 'ADCS', 'SBC', 'SBCS', 'RSC', 'RSCS'].indexOf(opcode) >= 0)
        return handleIntegerDataProcessingInstruction(i);
    else if (['B', 'BL'].indexOf(opcode) >= 0)
        return handleBranchInstruction(i);
    else if (opcode === 'LDR' && operandSpec(i.operands) === 'RIp')
        return handleLdrPseudoInstruction(i);
    else if (['LDR', 'LDRB', 'STR', 'STRB'].indexOf(opcode) >= 0)
        return handleSingleDataTransferInstruction(i);
    else if (opcode === 'STOP')
        return handleStopInstruction(i);
    else if (opcode === 'BREAK')
        return handleBreakInstruction(i);
    else if (opcode === 'NOP')
        return handleNopInstruction(i);

    throw new AssemblyError("Unhandled opcode: " + i.opcode, i);
}


function parseCond(cond) {
    switch (cond.toUpperCase()) {
        case '':
        case 'AL':
            return 0b1110;
        case 'EQ':
            return 0b0000;
        case 'NE':
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
        case "ASL":
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

function packRotatedImmediateOperand(imm, immString) {
    // ARM allows the immediate to be at most 8 bits, rotated an even number of bits (0..30) in the word
    // There are doubtless more efficient ways to compute this, but for our purposes brute force is plenty: just take a
    // mask of 8 bits and rotate it through all possible positions, stopping once we find one that hits all bits.
    imm = imm >>> 0; // make sure imm is treated as unsigned
    const mask = 0xff;
    let rot;
    for (rot = 0; rot <= 30; rot += 2) {
        const rotated = rotateRight(mask, rot);
        if ((imm & rotated) === imm) {
            console.debug(`For immediate ${imm}, using rot = ${rot}, imm = ${rotateRight(imm, 32 - rot)}`)
            return (rot << 7) | (rotateRight(imm, 32 - rot));
        }

    }

    throw new AssemblyError(`Value ${immString} not in range: must be expressible as eight bits rotated within a 32-bit field`)
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
            Operand2: packRotatedImmediateOperand(i.operands[2].value, i.operands[2].text)
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
            Operand2: packRotatedImmediateOperand(i.operands[1].value, i.operands[1].text)
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
            Operand2: packRotatedImmediateOperand(i.operands[1].value, i.operands[1].text)
        })];
    } else if (spec === 'RRf'
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
            Operand2: packFlexOperand(i.operands[1])
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
            'offset': (i.operands[0].value - 4) & 0xff_ffff,
        })];
    } else if (spec === 'S') {
        const symbol = i.operands[0];
        return [(mapper) => new I.BranchInstruction({
            Cond: cond,
            '[bits27-25]': 0b101,
            'L': (OpCode === 'BL') ? 0b1 : 0b0,
            'offset': (mapper(symbol) - mapper('.') - 4) & 0xff_ffff,
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

function handleSingleDataTransferInstruction(i) {
    const cond = parseCond(i.cond);
    const spec = operandSpec(i.operands);
    const OpCode = i.opcode.toUpperCase();
    const B = (OpCode === 'LDRB' || OpCode === 'STRB') ? 0b1 : 0b0;
    const L = (OpCode === 'LDR' || OpCode === 'LDRB') ? 0b1 : 0b0;

    function getOffsetU(imm) {
        const U = (imm < 0) ? 0 : 1;
        const Offset = (Math.abs(imm) & 0xfff) >>> 0;
        if (imm !== (U ? Offset : -Offset))
            throw new AssemblyError(`Offset out of range for ${i.opcode}: ${imm}`);
        return {
            U: U,
            Offset: Offset,
        };
    }

    if (spec === 'RI') {
        const imm = i.operands[1].value - 4;
        const {U, Offset} = getOffsetU(imm);
        return [() => new I.SingleDataTransferInstruction({
            Cond: cond,
            '[bits27-26]': 0b01,
            I: 0b0,     // I=0 means offset is immediate
            P: 0b1,     // preindexed
            U: U,
            B: B,
            W: 0b0,
            L: L,
            Rn: 15,     // immediate offset: PC-relative
            Rd: i.operands[0].number(),
            Offset: Offset,
        })];
    } else if (spec === 'RS') {
        return [(mapper) => {
            const diff = mapper(i.operands[1]) - mapper('.') - 4;
            const {U, Offset} = getOffsetU(diff);
            return new I.SingleDataTransferInstruction({
                Cond: cond,
                '[bits27-26]': 0b01,
                I: 0b0,     // I=0 means offset is immediate
                P: 0b1,     // preindexed
                U: U,
                B: B,
                W: 0b0,
                L: L,
                Rn: 15,     // immediate offset: PC-relative
                Rd: i.operands[0].number(),
                Offset: Offset,
            });
        }];
    } else if (spec === 'RPre[I]' || spec === 'RPre[Null]' || spec === 'RPost[I]') {
        const imm = i.operands[1].offset?.value || 0;
        const { U, Offset } = getOffsetU(imm);
        const P = spec.startsWith('RPre') ? 0b1 : 0b0;
        const W = (P && i.operands[1].writeback) ? 0b1 : 0b0;
        return [() => new I.SingleDataTransferInstruction({
            Cond: cond,
            '[bits27-26]': 0b01,
            I: 0b0,     // I=0 means immediate offset
            P: P,
            U: U,
            B: B,
            W: W,
            L: L,
            Rn: i.operands[1].register.number(),
            Rd: i.operands[0].number(),
            Offset: Offset,
        })];
    } else if (spec === 'RPre[S]' || spec === 'RPost[S]') {
        const P = spec.startsWith('RPre') ? 0b1 : 0b0;
        const W = (P && i.operands[1].writeback) ? 0b1 : 0b0;
        return [(mapper) => {
            const diff = mapper(i.operands[1].offset) - mapper('.');
            const {U, Offset} = getOffsetU(diff);
            return new I.SingleDataTransferInstruction({
                Cond: cond,
                '[bits27-26]': 0b01,
                I: 0b0,
                P: P,
                U: U,
                B: B,
                W: W,
                L: L,
                Rn: i.operands[1].register.number(),
                Rd: i.operands[0].number(),
                Offset: Offset,
            });
        }];
    } else if (spec === 'RPre[Rs]' || spec === 'RPost[Rs]') {
        const U = (i.operands[1].offset.sign === '-') ? 0b0 : 0b1;
        console.debug(`U = ${U}`);
        const P = spec.startsWith('RPre') ? 0b1 : 0b0;
        const W = (P && i.operands[1].writeback) ? 0b1 : 0b0;
        return [() => new I.SingleDataTransferInstruction({
            Cond: cond,
            '[bits27-26]': 0b01,
            I: 0b1,     // not immediate
            P: P,
            U: U,
            B: B,
            W: W,
            L: L,
            Rn: i.operands[1].register.number(),
            Rd: i.operands[0].number(),
            Offset: i.operands[1].offset.number()
        })];
    } else if (spec === 'RPre[Rf]' || spec === 'RPost[Rf]') {
        if (i.operands[1].offset.amountRegister !== null)
            throw new AssemblyError(`LDR/STR does not allow shifting by register`, i);
        console.log(i.operands[1].offset.register.sign);
        const U = (i.operands[1].offset.register.sign === '-') ? 0b0 : 0b1;
        console.debug(`U = ${U}`);
        const P = spec.startsWith('RPre') ? 0b1 : 0b0;
        const W = (P && i.operands[1].writeback) ? 0b1 : 0b0;
        return [() => new I.SingleDataTransferInstruction({
            Cond: cond,
            '[bits27-26]': 0b01,
            I: 0b1,     // not immediate
            P: P,
            U: U,
            B: B,
            W: W,
            L: L,
            Rn: i.operands[1].register.number(),
            Rd: i.operands[0].number(),
            Offset: packFlexOperand(i.operands[1].offset)
        })];
    } else
        throw new AssemblyError(`Invalid operands ${spec} for opcode ${OpCode}`, i);
}

function handleStopInstruction(i) {
    const cond = parseCond(i.cond);
    return [() => new I.StopInstruction({
        Cond: cond,
        '[bits27-25]': 0b011,
        '[bits24-5]': 0,
        '[bit4]': 0b1,
        '[bits3-0]': 0b0000,
    })];
}

function handleBreakInstruction(i) {
    const cond = parseCond(i.cond);
    return [() => new I.BreakInstruction({
        Cond: cond,
        '[bits27-25]': 0b011,
        '[bits24-5]': 0,
        '[bit4]': 0b1,
        '[bits3-0]': 0b0001,
    })];
}

function handleNopInstruction(_) {
    // Treat NOP as 'MOV R0, R0'
    return [() => new I.DataProcessingInstruction({
        Cond: 0b1110,
        '[bits27-26]': 0b00,
        I: 0b0,
        OpCode: 0b1101,     // MOV
        S: 0b0,
        Rn: 0,
        Rd: 0,
        Operand2: 0
    })];
}

function operandSpec(operands) {
    function opSpec(op) {
        if (op === null)
            return "Null";
        else if (op instanceof AST.Register)
            return "R";
        else if (op instanceof AST.SignedRegister)
            return "Rs";
        else if (op instanceof AST.PreindexedOperand)
            return "Pre[" + opSpec(op.offset) + "]";
        else if (op instanceof AST.PostindexedOperand)
            return "Post[" + opSpec(op.offset) + "]";
        else if (op instanceof AST.Immediate)
            return "I";
        else if (op instanceof AST.FlexOperand)
            return "Rf";
        else if (op instanceof AST.PseudoImmediate)
            return "Ip";
        else if (typeof op === 'string')
            return "S";
        else
            console.assert(false, "Invalid operand type: " + op.prototype.constructor.name);
    }

    let spec = "";
    operands.forEach(op => spec += opSpec(op));

    return spec;
}