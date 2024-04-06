import * as AST from '../grammar/arm32Ast';
import * as I from './Instruction';
import { rotateRight } from '../bits/arithmetic.js';
import SimulatorMemory from './SimulatorMemory';
import * as StandardLibary from './StandardLibrary.js';

export class AssemblyError extends Error {
    constructor(message, node) {
        super(message);
        this.node = node;
    }
}

export class InvalidOperandsError extends AssemblyError {
    constructor(opcode, operandsSpec, node) {
        super(`Invalid operands [${operandSpecToString(operandsSpec)}] for opcode ${opcode}`, node);
    }
}

let stdlib = null;
function resolveImport(symbol) {
    if (!stdlib)
        stdlib = StandardLibary.assemble();
    if (symbol in stdlib.exports)
        return stdlib;
    else
        return null;
}

export function assemble(ast, startAddress = 0) {
    const importedSymbols = {}, symbols = {};
    let addressLineMap = {};
    let dataMaps = [];
    let address = startAddress;

    // Import any externs
    const imports = new Set();
    for (let extern of ast.externs) {
        const imp = resolveImport(extern.item.symbol);
        if (!imp)
            throw new AssemblyError(`Unknown external symbol ${extern.item.symbol}`, extern);
        imports.add(imp);
        importedSymbols[extern.item.symbol] = imp.symbols[extern.item.symbol];
    }

    function registerSymbol(symbol) {
        if (symbol in symbols || symbol in importedSymbols)
            throw new AssemblyError(`Duplicate symbol: ${symbol}`)
        symbols[symbol] = address;
    }

    ast.lines.forEach(line => {
        try {
            let padding = 0, dataSize = 0;

            if (line.item instanceof AST.Directive) {
                const data = assembleDirective(line.item);
                dataSize = data.size(address);
                padding = data.padding ? data.padding(address) : 0;
                dataMaps = [...dataMaps, data];
            } else if (line.item instanceof AST.Instruction) {
                const assemblers = assembleInstruction(line.item);
                const data = {
                    data: (mapper, mem, addr) => {
                        assemblers.forEach((assembler, i) => mem.writeWordUnaligned(addr + 4 * i, assembler(mapper).encode()));
                    },
                    size: () => 4 * assemblers.length // instructions are always 4 bytes
                };
                dataSize = data.size(address);
                dataMaps = [...dataMaps, data];
            } else if (line.item !== null)
                console.error("Line that is neither a directive nor an instruction in AST: " + line);

            address += padding;
            if (line.label)
                registerSymbol(line.label);
            if (!(address in addressLineMap))
                addressLineMap[address] = line.lineNumber;
            address += dataSize;
        } catch (ex) {
            if (ex instanceof AssemblyError) {
                ex.node = line;
                throw ex;
            }
        }
    });

    address = startAddress;
    const symbolAddressMapper = symbol => {
        if (symbol === '.')
            return address;
        else if (symbol in symbols)
            return symbols[symbol];
        else if (symbol in importedSymbols)
            return importedSymbols[symbol];
        else
            throw new AssemblyError("Unknown symbol: " + symbol);
    };

    const mem = new SimulatorMemory();
    dataMaps.forEach(dataMap => {
        const padding = dataMap.padding ? dataMap.padding(address) : 0;
        address += padding;
        dataMap.data(symbolAddressMapper, mem, address);
        address += dataMap.size(address);
    });

    // Now that the code is assembled, process exports
    const exports = {};
    for (const exp of ast.exports) {
        if (exp.item.symbol in symbols)
            exports[exp.item.symbol] = symbols[exp.item.symbol];
        else
            throw new AssemblyError(`No symbol ${exp.item.symbol} to export`, exp);
    }

    // Add imports (from externs) in
    for (const imp of imports) {
        // Check that there is no overlap between imp's code and ours
        // [a, b): [startAddress, address)
        // [c, d): [imp.startAddress, imp.startAddress + imp.codeLength)
        // [a, b) overlaps with [c, d) iff a ∈ [c, d) || c ∈ [a, b)
        if ((startAddress >= imp.startAddress && startAddress < imp.startAddress + imp.codeLength)
            || (imp.startAddress >= address && imp < address))
            throw new AssemblyError(`Code overlaps with imported library (starting at address 0x${imp.startAddress.toHexString(16)})`);

        for (let i = imp.startAddress; i < imp.startAddress + imp.codeLength; i += 4)
            mem.writeWord(i, imp.code.readWord(i));
    }

    return {
        code: mem,
        startAddress: startAddress,
        codeLength: address - startAddress,
        addressLineMap: addressLineMap,
        symbols: symbols,
        exports: exports,
    };
}

function assembleDirective(d) {
    if (d instanceof AST.DCD)
        return handleDCD(d);
    else if (d instanceof AST.DCB)
        return handleDCB(d);
    else if (d instanceof AST.EquateDirective)
        return handleEquate(d);
    else if (d instanceof AST.FillDirective)
        return handleFill(d);
    else if (d instanceof AST.AlignDirective)
        return handleAlign(d);
    else
        console.assert(false, 'Unhandled directive: ' + d);
}

function handleDCD(d) {
    const words = d.words;
    return {
        data: (mapper, mem, addr) => {
            words.forEach((word, index) => {
                if (word instanceof AST.SymbolicExpression)
                    mem.writeWord(addr + 4 * index, word.evaluate(mapper));
                else
                    mem.writeWord(addr + 4 * index, word)
            });
        },
        size: _ => 4 * words.length,
        padding: addr => (4 - addr % 4) % 4,
    };
}

function handleDCB(d) {
    const bytes = d.bytes;
    return {
        data: (mapper, mem, addr) =>
            bytes.forEach((byte, index) => mem.writeByte(addr + index, byte)),
        size: () => bytes.length
    };
}

function handleEquate(d) {
    throw new AssemblyError('EQU not yet implemented');
}

function handleFill(d) {
    const bytes = d.bytes;
    const value = d.value;
    if (value < -128 || value > 255)
        throw new AssemblyError(`Out of range value ${d.value} in FILL (must be between -128 and 255)`);
    return {
        data: (mapper, mem, addr) => {
            if (bytes)
                for (let i = 0; i < bytes; ++i)
                    mem.writeByte(addr + i, value & 0xff);
        },
        size: () => bytes,
    };
}

function handleAlign(d) {
    const alignment = (d.bytes === null) ? 4 : d.bytes;
    return {
        data: () => [],
        size: addr => {
            if (addr % alignment === 0)
                return 0;
            return alignment - addr % alignment;
        }
    };
}

function assembleInstruction(i) {
    const opcode = i.opcode.toUpperCase();
    if (['CMP', 'CMN', 'MOV', 'MVN', 'TST', 'TEQ', 'CMP', 'CMN', 'AND', 'ANDS', 'EOR', 'EORS', 'ORR', 'ORRS', 'SUB', 'SUBS', 'RSB', 'RSBS', 'ADD', 'ADDS', 'ADC', 'ADCS', 'SBC', 'SBCS', 'RSC', 'RSCS'].indexOf(opcode) >= 0)
        return handleDataProcessingInstruction(i);
    else if (opcode === 'MUL' || opcode === 'MLA')
        return handleMultiplyInstruction(i);
    else if (['LSL', 'ASL', 'LSR', 'ASR', 'ROR'].indexOf(opcode) >= 0)
        return handleShiftPseudoInstruction(i);
    else if (['B', 'BL'].indexOf(opcode) >= 0)
        return handleBranchInstruction(i);
    else if (opcode === 'BX')
        return handleBranchAndExchangeInstruction(i);
    else if (opcode === 'LDR' && operandSpec(i.operands) === 'RIp')
        return handleLdrPseudoInstruction(i);
    else if (['LDR', 'LDRB', 'STR', 'STRB'].indexOf(opcode) >= 0)
        return handleSingleDataTransferInstruction(i);
    else if (opcode.startsWith('LDM') || opcode.startsWith('STM'))
        return handleBlockDataTransferInstruction(i);
    else if (opcode === 'STOP')
        return handleStopInstruction(i);
    else if (opcode === 'BREAK')
        return handleBreakInstruction(i);
    else if (opcode === 'NOP')
        return handleNopInstruction(i);
    else if (opcode === 'SWI')
        return handleSoftwareInterruptInstruction(i);

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

    let bits = flex.register.number() | (shiftBits << 5);
    if (amountImm !== null) {
        if ((amountImm & 0x1f) !== amountImm)
            throw new AssemblyError(`Invalid shift amount ${flex.amountImmediate}: must be five bits or less`)
        bits |= ((amountImm & 0x1f) << 7);
    } else if (amountReg !== null)
        bits |= 0b10000 | (amountReg.number() << 8);

    return bits;
}

function packRotatedImmediateOperand(imm, immString) {
    // ARM allows the immediate to be at most 8 bits, rotated an even number of bits (0..30) in the word
    // There are doubtless more efficient ways to compute this, but for our purposes brute force is plenty: just take a
    // mask of 8 bits and rotate it through all possible positions, stopping once we find one that hits all bits.
    imm = imm >> 0; // make sure imm is treated as signed
    const mask = 0xff;
    for (let rot = 0; rot <= 30; rot += 2) {
        // const rotated = rotateRight(mask, rot);
        const immRotated = rotateRight(imm, 32 - rot) & 0xff;
        if (rotateRight((immRotated << 24) >> 24, rot) === imm) {
            return (rot << 7) | (rotateRight(imm, 32 - rot) & 0xff);
        }
    }

    throw new AssemblyError(`Value ${immString} not in range: must be expressible as eight bits rotated within a 32-bit field`)
}

function handleDataProcessingInstruction(i) {
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
            Rn: i.operands[1].number(),
            Rd: i.operands[0].number(),
            Operand2: packRotatedImmediateOperand(i.operands[2].value, i.operands[2].text)
        })];
    } else if (spec === 'RRS') {
        return [mapper => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: i.operands[1].number(),
            Rd: i.operands[0].number(),
            Operand2: packRotatedImmediateOperand(i.operands[2].evaluate(mapper), i.operands[2])
        })];
    } if (spec === 'RRR') {
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: i.operands[1].number(),
            Rd: i.operands[0].number(),
            Operand2: +i.operands[2].number()
        })];
    } else if (spec === 'RRRf') {
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: opc,
            S: Sbit,
            Rn: i.operands[1].number(),
            Rd: i.operands[0].number(),
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
            Rn: i.operands[0].number(),
            Rd: 0,
            Operand2: i.operands[1].number()
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
            Rd: i.operands[0].number(),
            Operand2: i.operands[1].number()
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
    } else if (spec === 'RS'
        && ['TST', 'TEQ', 'CMP', 'CMN'].indexOf(OpCode) >= 0) {
        // No destination register
        return [mapper => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: +i.operands[0].number(),
            Rd: 0,
            Operand2: packRotatedImmediateOperand(i.operands[1].evaluate(mapper), i.operands[1])
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
    } else if (spec === 'RS'
        && ['MOV', 'MVN'].indexOf(OpCode) >= 0) {
        // No Rn
        return [mapper => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b1,
            OpCode: opc,
            S: Sbit,
            Rn: 0,
            Rd: +i.operands[0].number(),
            Operand2: packRotatedImmediateOperand(i.operands[1].evaluate(mapper), i.operands[1])
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
            Rd: i.operands[0].number(),
            Operand2: packFlexOperand(i.operands[1])
        })];
    } else
        throw new InvalidOperandsError(OpCode, spec, i);
}

function handleMultiplyInstruction(i) {
    const OpCode = i.opcode.toUpperCase();
    const S = i.s;
    const Cond = i.cond;

    const spec = operandSpec(i.operands);

    const cond = parseCond(Cond);
    const Sbit = S ? 0b1 : 0b0;

    if (OpCode === 'MUL' && spec === 'RRR'
        || OpCode === 'MLA' && spec === 'RRRR') {
        // MUL Rd, Rm, Rs
        const A = (OpCode === 'MLA');
        const Rd = i.operands[0].number(),
            Rm = i.operands[1].number(),
            Rs = i.operands[2].number(),
            Rn = (spec === 'RRRR') ? i.operands[3].number() : 0b0000;

        if (Rd === Rm)
            throw new AssemblyError(`Destination register must not be the same as the first operand in ${OpCode}`);
        else if (Rd === 15 || Rm === 15 || Rs === 15 || Rn === 15)
            throw new AssemblyError(`R15 (PC) cannot be used as destination or operand in ${OpCode}`);

        return [() => new I.MultiplyInstruction({
            Cond: cond,
            '[bits27-22]': 0b00_0000,
            A: A,
            S: Sbit,
            Rd: Rd,
            Rn: Rn,
            Rs: Rs,
            '[bits7-4]': 0b1001,
            Rm: Rm
        })];
    } else
        throw new InvalidOperandsError(OpCode, spec, i);
}

function handleShiftPseudoInstruction(i) {
    // These instructions are syntactic sugar for MOVs with shifts, e.g.
    // ASL  R1, R2, R3
    // is actually
    // MOV  R1, R2 ASL R3
    const OpCode = i.opcode.toUpperCase();
    const S = i.s;
    const Cond = i.cond;

    const spec = operandSpec(i.operands);

    const cond = parseCond(Cond);

    if (spec === 'RRR')
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: 0b1101, // MOV
            S: S ? 0b1 : 0b0,
            Rn: 0,
            Rd: i.operands[0].number(),
            Operand2: packFlexOperand({
                shift: OpCode,
                register: i.operands[1],
                amountImmediate: null,
                amountRegister: i.operands[2]
            })
        })];
    else if (spec === 'RRI')
        // ASL  R1, R2, #4 ->   MOV R1, R2 ASL #4
        return [() => new I.DataProcessingInstruction({
            Cond: cond,
            '[bits27-26]': 0b00,
            I: 0b0,
            OpCode: 0b1101, // MOV
            S: S? 0b1 : 0b0,
            Rn: 0,
            Rd: i.operands[0].number(),
            Operand2: packFlexOperand({
                shift: OpCode,
                register: i.operands[1],
                amountImmediate: i.operands[2].value,
                amountRegister: null
            })
        })];
    else
        throw new InvalidOperandsError(OpCode, spec, i);
}

function handleBranchInstruction(i) {
    const OpCode = i.opcode.toUpperCase();
    if (!!i.S)
        throw new AssemblyError("Opcode " + i.opcode + " cannot take an S!");

    function packOffset(off) {
        if ((off & 0x3) !== 0)
            throw new AssemblyError(`Unaligned branch offset: ${off}`)
        const packed = ((off >> 2) - 1) & 0xff_ffff;
        // test unpacking the offset to make sure it fits in the field
        const unpacked = (packed << 8) >> 6;
        if (unpacked + 4 !== off)
            throw new AssemblyError(`Branch offset ${off} out of range (must be within 32 MiB)`)
        return packed;
    }

    const spec = operandSpec(i.operands);
    const cond = parseCond(i.cond);
    if (spec === 'I') {
        return [() => new I.BranchInstruction({
            Cond: cond,
            '[bits27-25]': 0b101,
            'L': (OpCode === 'BL') ? 0b1 : 0b0,
            'offset': packOffset(i.operands[0].value),
        })];
    } else if (spec === 'S') {
        const symbol = i.operands[0];
        return [(mapper) => new I.BranchInstruction({
            Cond: cond,
            '[bits27-25]': 0b101,
            'L': (OpCode === 'BL') ? 0b1 : 0b0,
            'offset': packOffset(symbol.evaluate(mapper) - mapper('.'))
        })];
    } else
        throw new InvalidOperandsError(OpCode, spec, i);
}

function handleBranchAndExchangeInstruction(i) {
    if (!!i.S)
        throw new AssemblyError("Opcode " + i.opcode + " cannot take an S!");

    const spec = operandSpec(i.operands),
        cond = parseCond(i.cond);
    if (spec === 'R')
        return [() => new I.BranchAndExchangeInstruction({
            Cond: cond,
            '[bits27-4]': 0b0001_0010_1111_1111_1111_0001,
            Rn: i.operands[0].number()
        })];
    else
        throw new InvalidOperandsError(i.opcode, spec, i);
}

function handleLdrPseudoInstruction(i) {
    // Already know this is LDR of an Ip (pseudo-immediate)
    let value = i.operands[1].value;
    const S = i.s;
    const Cond = i.cond;
    const cond = parseCond(Cond);
    const reg = i.operands[0].number();

    if (!!S)
        throw new AssemblyError(`${i.opcode} does not take S flag!`, i)

    return [
        () => new I.SingleDataTransferInstruction({
            Cond: cond,
            '[bits27-26]': 0b01,
            I: 0b0,     // offset is immediate (field is backwards from what you'd expect!)
            P: 0b1,     // preindex (so it doesn't writeback)
            U: 0b1,     // add offset to base
            B: 0b0,     // read a word, not a byte
            W: 0b0,     // don't writeback
            L: 0b1,     // load
            Rn: 15,     // use PC as base register
            Rd: reg,    // destination register
            Offset: 4   // read one word after PC (since PC has already moved to next instruction, this skips over B)
        }),
        () => new I.BranchInstruction({
            Cond: 0b1110,   // always
            '[bits27-25]': 0b101,
            L: 0b0,
            offset: 1   // branch one word past PC (just past the value to be LDRed
        }),
        (mapper) => new I.DummyInstruction({
                bits: (value instanceof AST.SymbolicExpression) ? value.evaluate(mapper) : value
        })
    ];
}

function handleSingleDataTransferInstruction(i) {
    const cond = parseCond(i.cond);
    const spec = operandSpec(i.operands);
    const OpCode = i.opcode.toUpperCase();
    const B = (OpCode === 'LDRB' || OpCode === 'STRB') ? 0b1 : 0b0;
    const L = (OpCode === 'LDR' || OpCode === 'LDRB') ? 0b1 : 0b0;

    if (!!i.s)
        throw new AssemblyError(`${i.opcode} does not take S flag!`, i)

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
            const diff = i.operands[1].evaluate(mapper) - mapper('.') - 4;
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
        if ((!P || W) && i.operands[1].register.number() === 15)
            throw new AssemblyError(`Writeback not allowed when base register is R15 (PC)`, i);
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
            const diff = i.operands[1].offset.evaluate(mapper) - mapper('.');
            const {U, Offset} = getOffsetU(diff);
            if ((!P || W) && i.operands[1].register.number() === 15)
                throw new AssemblyError(`Writeback not allowed when base register is R15 (PC)`, i);
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
        const P = spec.startsWith('RPre') ? 0b1 : 0b0;
        const W = (P && i.operands[1].writeback) ? 0b1 : 0b0;
        if ((!P || W) && i.operands[1].register.number() === 15)
            throw new AssemblyError(`Writeback not allowed when destination register is R15 (PC)`, i);
        if (i.operands[1].offset.number() === 15)
            throw new AssemblyError(`R15 (PC) not allowed as offset for opcode ${OpCode}`);
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
        const U = (i.operands[1].offset.register.sign === '-') ? 0b0 : 0b1;
        const P = spec.startsWith('RPre') ? 0b1 : 0b0;
        const W = (P && i.operands[1].writeback) ? 0b1 : 0b0;
        if ((!P || W) && i.operands[1].register.number() === 15)
            throw new AssemblyError(`Writeback not allowed when base register is R15 (PC)`, i);
        if (i.operands[1].offset.register.number() === 15)
            throw new AssemblyError(`R15 (PC) not allowed as offset for opcode ${OpCode}`);
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
        throw new InvalidOperandsError(OpCode, spec, i);
}

function handleBlockDataTransferInstruction(i) {
    const cond = parseCond(i.cond);
    const spec = operandSpec(i.operands);
    const OpCode = i.opcode.toUpperCase();
    const L = OpCode.startsWith('LDM') ? 0b1 : 0b0;
    let P, U;

    switch (OpCode) {
        case 'LDMED':
        case 'LDMIB':
        case 'STMFA':
        case 'STMIB':
            P = U = 0b1;
            break;
        case 'LDMFD':
        case 'LDMIA':
        case 'STMEA':
        case 'STMIA':
            P = 0b0;
            U = 0b1;
            break;
        case 'LDMEA':
        case 'LDMDB':
        case 'STMFD':
        case 'STMDB':
            P = 0b1;
            U = 0b0;
            break;
        case 'LDMFA':
        case 'LDMDA':
        case 'STMED':
        case 'STMDA':
            P = U = 0b0;
            break;

        default:
            throw new AssemblyError(`Unknown opcode ${i.opcode}`, i);
    }

    if (!!i.s)
        throw new AssemblyError(`${i.opcode} does not take S flag!`, i);

    const S = 0b0;  // don't support this
    const W = i.operands[0] instanceof AST.WritebackRegister ? 0b1 : 0b0;

    if (spec === 'R{R}' || spec === 'Rw{R}') {
        if (i.operands[0].number() === 15)
            throw new AssemblyError(`R15 (PC) cannot be the base register for opcode ${OpCode}`);
        return [() => new I.BlockDataTransferInstruction({
            Cond: cond,
            '[bits27-25]': 0b100,
            P: P,
            U: U,
            S: S,
            W: W,
            L: L,
            Rn: i.operands[0].number(),
            RegisterList: i.operands[1].bits
        })];
    } else
        throw new InvalidOperandsError(OpCode, spec, i);
}

function handleStopInstruction(i) {
    if (i.operands)
        throw new InvalidOperandsError('STOP', operandSpec(i.operands), i);
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
    if (i.operands)
        throw new InvalidOperandsError('BREAK', operandSpec(i.operands), i);
    const cond = parseCond(i.cond);
    return [() => new I.BreakInstruction({
        Cond: cond,
        '[bits27-25]': 0b011,
        '[bits24-5]': 0,
        '[bit4]': 0b1,
        '[bits3-0]': 0b0001,
    })];
}

function handleNopInstruction(i) {
    if (i.operands)
        throw new InvalidOperandsError('NOP', operandSpec(i.operands), i);
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

function handleSoftwareInterruptInstruction(i) {
    if (i.operands)
        throw new InvalidOperandsError('SWI', operandSpec(i.operands), i);
    const cond = parseCond(i.cond);
    return [() => new I.SoftwareInterruptInstruction({
        Cond: cond,
        '[bits27-24]': 0b1111,
        '[bits23-0]': 0,    // comment field (ignore)
    })];
}

function operandSpec(operands) {
    function opSpec(op) {
        if (op === null)
            return "Null";
        else if (op instanceof AST.Register)
            return "R";
        else if (op instanceof AST.WritebackRegister)
            return "Rw";
        else if (op instanceof AST.SignedRegister)
            return "Rs";
        else if (op instanceof AST.RegisterSet)
            return "{R}";
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
        else if (op instanceof AST.SymbolicExpression)
            return "S";
        else if (typeof(op) === 'string')
            console.error('Operand of type string!');
        else
            console.assert(false, "Invalid operand type: " + op.prototype.constructor.name);
    }

    let spec = "";
    operands.forEach(op => spec += opSpec(op));

    return spec;
}

function operandSpecToString(spec) {
    function specStringify(sp) {
        if (sp === '')
            return [];
        else if (sp.startsWith('Null'))
            return ['(empty)', ...specStringify(sp.slice(4))];
        else if (sp.startsWith('Rs'))
            return ['signed register', ...specStringify(sp.slice(2))];
        else if (sp.startsWith('Rw'))
            return ['writeback register', ...specStringify(sp.slice(2))];
        else if (sp.startsWith('Rf'))
            return ['shifted register', ...specStringify(sp.slice(2))];
        else if (sp.startsWith('R'))
            return ['register', ...specStringify(sp.slice(1))];
        else if (sp.startsWith('{R}'))
            return ['register set', ...specStringify(sp.slice(3))];
        else if (sp.startsWith('Pre['))
            return ['preindex', ...specStringify(sp.slice(sp.indexOf(']') + 1))];
        else if (sp.startsWith('Post['))
            return ['postindex', ...specStringify(sp.slice(sp.indexOf(']') + 1))];
        else if (sp.startsWith('Ip'))
            return ['=immediate', ...specStringify(sp.slice(2))];
        else if (sp.startsWith('I'))
            return ['immediate', ...specStringify(sp.slice(1))];
        else if (sp.startsWith('S'))
            return ['symbolic', ...specStringify(sp.slice(1))];
        else
            return [];
    }

    return specStringify(spec).join(', ');
}