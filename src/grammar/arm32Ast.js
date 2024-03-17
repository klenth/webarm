import { AssemblyError } from '../arm32sim/Assembler.js';
import { parseMnemonic } from './arm32Mnemonic.js';

export function parseImmediate(text) {
    if (text.startsWith("-"))
        return -parseImmediate(text.slice(1));
    text = text.replaceAll("_", "").toLowerCase();
    if (text.startsWith("0x"))
        return parseInt(text.slice(2), 16);
    else if (text.startsWith("0b"))
        return parseInt(text.slice(2), 2);
    else
        return parseInt(text, 10);
}

function registerNumber(registerText) {
    registerText = registerText.toUpperCase();
    switch (registerText) {
        case 'SP':
            return 13;
        case 'LR':
            return 14;
        case 'PC':
            return 15;
        default:
            return parseInt(registerText.slice(1));
    }
}

export class AstNode {
    constructor(name) {
        this.name = name;
        this.className = this.constructor.name;
    }

    children() {
        return [];
    }

    toString() {
        return this.name;
    }

    static reconstruct(o) {
        if (o === null)
            return null;
        else if (o === undefined)
            return undefined;

        const className = o.className;
        if (!className)
            throw new Error('No className found!');
        if (typeof(exports[className]) !== 'undefined')
            return exports[className].reconstruct(o);
        else
            throw new Error('No class found called "' + className + '"');
    }
}

export class Program extends AstNode {
    constructor(externs, exports, lines) {
        super('program');
        this.externs = externs;
        this.exports = exports;
        this.lines = lines;
    }

    children() {
        return [...this.externs, ...this.exports, ...this.lines];
    }

    static reconstruct(o) {
        return new Program(
            o.externs.map(AstNode.reconstruct),
            o.exports.map(AstNode.reconstruct),
            o.lines.map(AstNode.reconstruct)
        );
    }
}

export class Extern extends AstNode {
    constructor(symbol) {
        super('extern');
        this.symbol = symbol;
    }

    toString() {
        return `EXTERN ${this.symbol}`;
    }

    static reconstruct(o) {
        return new Extern(o.symbol);
    }
}

export class Export extends AstNode {
    constructor(symbol) {
        super('export');
        this.symbol = symbol;
    }

    toString() {
        return `EXPORT ${this.symbol}`;
    }

    static reconstruct(o) {
        return new Export(o.symbol);
    }
}

export class Line extends AstNode {
    constructor(lineNumber, label, item) {
        super('line');
        this.lineNumber = lineNumber;
        this.label = label;
        this.item = item;
    }

    children() {
        return [this.item];
    }

    toString() {
        if (this.label)
            return '[' + this.label + '] ' + super.toString();
        return super.toString();
    }

    static reconstruct(o) {
        return new Line(o.label, AstNode.reconstruct(o.item));
    }
}

export class Instruction extends AstNode {
    constructor(mnemonic, operands) {
        super(mnemonic);
        const { OpCode, S, Cond } = parseMnemonic(mnemonic);
        this.opcode = OpCode;
        this.s = S;
        this.cond = Cond;
        this.operands = operands;
    }

    children() {
        return this.operands;
    }

    static reconstruct(o) {
        return new Instruction(o.opcode, o.s, o.cond, o.operands.map(AstNode.reconstruct));
    }
}

export class Directive extends AstNode {
}

export class DCD extends Directive {
    constructor(values) {
        super('DCD');
        this.values = values;
    }

    toString() {
        return 'DCD ' + this.values;
    }

    get words() {
        const words = [];
        for (let value of this.values) {
            if (value instanceof SymbolicExpression)
                words.push(value);  // it's a symbol
            else {
                const word = parseImmediate(value);
                if ((word & 0xffff_ffff) >>> 0 !== word) {
                    throw new AssemblyError(`Numeric value ${value} out of range for a word`);
                }
                words.push(word);
            }
        }

        return words;
    }

    static reconstruct(o) {
        return new DCD(o.values);
    }
}

export class DCB extends Directive {
    constructor(values) {
        super('DCB');
        this.values = values;
    }

    toString() {
        return 'DCB ' + this.values;
    }

    get bytes() {
        const bytes = [];
        for (const value of this.values) {
            if (value[0] === '"' || value[0] === "'") {
                for (let i = 1; i + 1 < value.length; ++i) {
                    if (value[i] === '\\' && i + 2 < value.length) {
                        const c = value[i + 1];
                        if (c === 'n')
                            bytes.push(0x0a);
                        else if (c === '0')
                            bytes.push(0);
                        else if (c === 't')
                            bytes.push(0x09);
                        else if (c === 'r')
                            bytes.push(0x0d);
                        else
                            bytes.push(value.charCodeAt(i + 1));
                        ++i;
                    } else
                        bytes.push(value.charCodeAt(i));
                }
            } else {
                const byte = parseImmediate(value) >>> 0;
                if (byte < -128 || byte > 255)
                    throw new AssemblyError(`Numeric value ${value} out of range for a byte`);
                bytes.push((byte >>> 0) & 0xff);
            }
        }

        return bytes;
    }

    static reconstruct(o) {
        return new DCB(o.values);
    }
}

export class EquateDirective extends Directive {
    constructor(value) {
        super('EQU');
        this.value = value;
    }

    toString() {
        return 'equ ' + this.value;
    }

    static reconstruct(o) {
        return new EquateDirective(o.value);
    }
}

export class FillDirective extends Directive {
    constructor(bytesText, valueText) {
        super('FILL');
        this.bytesText = bytesText;
        this.valueText = valueText;
    }

    toString() {
        return 'FILL ' + this.bytesText + (this.valueText ? ' ' + this.valueText : '');
    }

    get bytes() {
        return parseImmediate(this.bytesText);
    }

    get value() {
        return (this.valueText === null) ? null : parseImmediate(this.valueText);
    }

    static reconstruct(o) {
        return new FillDirective(o.bytesText, o.valueText);
    }
}

export class AlignDirective extends Directive {
    constructor(value) {
        super('ALIGN');
        this.value = value;
    }

    toString() {
        return this.value ? `ALIGN ${this.value}` : 'ALIGN';
    }

    get bytes() {
        return this.value ? parseImmediate(this.value) : null;
    }

    static reconstruct(o) {
        return new AlignDirective(o.value);
    }
}

export class Register extends AstNode {
    static reconstruct(o) {
        return new Register(o.name);
    }

    number() {
        return registerNumber(this.name);
    }
}

export class WritebackRegister extends Register {
    static reconstruct(o) {
        return new WritebackRegister(o.name);
    }
}

export class SignedRegister extends AstNode {
    constructor(sign, name) {
        super(sign + name);
        this.sign = sign;
        this.name = name;
    }

    static reconstruct(o) {
        return new SignedRegister(o.sign, o.name);
    }

    number() {
        return registerNumber(this.name);
    }
}

export class RegisterSet extends AstNode {
    constructor(startRegister, endRegister, childRegisterSet) {
        super('{}');
        this.startRegister = startRegister;
        this.endRegister = endRegister;
        this.childRegisterSet = childRegisterSet;
    }

    static reconstruct(o) {
        return new RegisterSet(o.startRegister, o.endRegister, o.childRegisterSet);
    }

    get bits() {
        let bits = this.childRegisterSet?.bits || 0;
        for (let i = this.startRegister.number(); i <= this.endRegister.number(); ++i)
            bits |= (1 << i);
        return bits;
    }
}

export class FlexOperand extends AstNode {
    constructor(register, shift, amountImmediate, amountRegister) {
        super('flex');
        this.register = register;
        this.shift = shift;
        if (!amountImmediate && !amountRegister)
            throw new Error("Exactly one of amountImmediate and amountRegister should be specified");
        this.amountImmediateText = amountImmediate;
        this.amountRegister = amountRegister;
    }

    children() {
        if (this.amountRegister)
            return [this.register, this.amountRegister];
        else
            return [this.register];
    }

    toString() {
        if (this.amountRegister)
            return 'flex: ' + this.shift;
        else
            return 'flex: ' + this.shift + ' #' + this.amount;
    }

    static reconstruct(o) {
        return new FlexOperand(AstNode.reconstruct(o.register), o.shift,
            o.amountImmediateText,
            o.amountRegister ? AstNode.reconstruct(o.amountRegister) : null);
    }

    get amountImmediate() {
        if (this.amountImmediateText !== null)
            return parseImmediate(this.amountImmediateText);
        else
            return null;
    }
}

export class PreindexedOperand extends AstNode {
    constructor(register, offset, writeback) {
        super('preindex');
        this.register = register;
        this.offset = offset;
        this.writeback = writeback;
    }

    children() {
        return [this.register];
    }

    toString() {
        return '[ , ' + this.offset + ']!';
    }

    static reconstruct(o) {
        return new PreindexedOperand(AstNode.reconstruct(o.register), o.offset);
    }
}

export class PostindexedOperand extends AstNode {
    constructor(register, offset) {
        super('postindex');
        this.register = register;
        this.offset = offset;
    }

    children() {
        return [this.register];
    }

    toString() {
        return '[ ], ' + this.offset;
    }

    static reconstruct(o) {
        return new PostindexedOperand(AstNode.reconstruct(o.register), o.offset);
    }
}

export class Immediate extends AstNode {
    constructor(text) {
        super('immediate');
        this.text = text;
    }

    toString() {
        return 'immediate [' + this.text + ']';
    }

    get value() {
        return parseImmediate(this.text);
    }

    static reconstruct(o) {
        return new Immediate(o.text);
    }
}

export class PseudoImmediate extends AstNode {
    constructor(text) {
        super('pseudoimmediate');
        this.text = text;
    }

    toString() {
        return 'pseudoimmediate [' + this.text + ']';
    }

    get value() {
        if (this.text instanceof SymbolicExpression)
            return this.text;
        else
            return parseImmediate(this.text);
    }

    children() {
        if (this.text instanceof AstNode)
            return [this.text];
        else
            return [];
    }

    static reconstruct(o) {
        return new PseudoImmediate(o.text);
    }
}

export class SymbolicExpression extends AstNode {

    evaluate(mapper) {
        throw new Error('evaluate() not overridden');
    }
}

export class BinaryOp extends SymbolicExpression {
    _OPS = {
        '+': (l, r) => l + r,
        '-': (l, r) => l - r,
        '*': (l, r) => l * r,
        '/': (l, r) => l / r,
        '%': (l, r) => l % r
    };

    constructor(op, left, right) {
        super(op);
        this.op = op;
        this.left = left;
        this.right = right;
    }

    evaluate(mapper) {
        const l = this.left.evaluate(mapper), r = this.right.evaluate(mapper);
        return this._OPS[this.op](this.left.evaluate(mapper), this.right.evaluate(mapper));
    }

    children() {
        return [this.left, this.right];
    }
}

export class CurrentAddressExpression extends SymbolicExpression {
    constructor() {
        super('.');
    }

    evaluate(mapper) {
        return mapper('.');
    }
}

export class SymbolExpression extends SymbolicExpression {
    constructor(symbol) {
        super(symbol);
        this.symbol = symbol;
    }

    evaluate(mapper) {
        return mapper(this.symbol);
    }
}

export class NumberExpression extends SymbolicExpression {
    constructor(text) {
        super(text);
        this.text = text;
    }

    evaluate(mapper) {
        return parseImmediate(this.text);
    }
}

export function logAst(node, log=console.log, levels=0) {
    if (!node)
        return;

    let s = '';

    for (let i = 0; i < levels; ++i)
        s += '  ';

    log(s + '{' + node.constructor.name + '} ' + node.toString());
    for (let child of node.children())
        logAst(child, log, levels + 1);
}

const exports = {
    'AstNode': AstNode,
    'Program': Program,
    'Extern': Extern,
    'Export': Export,
    'Line': Line,
    'Instruction': Instruction,
    'Directive': Directive,
    'DCD': DCD,
    'DCB': DCB,
    'EquateDirective': EquateDirective,
    'FillDirective': FillDirective,
    'AlignDirective': AlignDirective,
    'Register': Register,
    'WritebackRegister': WritebackRegister,
    'SignedRegister': SignedRegister,
    'RegisterSet': RegisterSet,
    'FlexOperand': FlexOperand,
    'PreindexedOperand': PreindexedOperand,
    'PostindexedOperand': PostindexedOperand,
    'Immediate': Immediate,
    'PseudoImmediate': PseudoImmediate,
    'SymbolicExpression': SymbolicExpression,
    'BinaryOp': BinaryOp,
    'CurrentAddressExpression': CurrentAddressExpression,
    'SymbolExpression': SymbolExpression,
    'NumberExpression': NumberExpression,
};
