import { AssemblyError } from '../arm32sim/Realizer.js';

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
            throw 'No className found!';
        if (typeof(exports[className]) !== 'undefined')
            return exports[className].reconstruct(o);
        else
            throw 'No class found called "' + className + '"';
    }
}

export class Program extends AstNode {
    constructor(lines) {
        super('program');
        this.lines = lines;
    }

    children() {
        return this.lines;
    }

    static reconstruct(o) {
        return new Program(o.lines.map(AstNode.reconstruct));
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
    constructor(opcode, s, cond, operands) {
        super(opcode);
        this.opcode = opcode;
        this.s = s;
        this.cond = cond;
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
    constructor(name) {
        super(name);
    }
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
            const word = parseImmediate(value);
            if ((word & 0xffff_ffff) >>> 0 !== word) {
                console.debug(`word & 0xffff_ffff = ${word & 0xffff_ffff}, word = ${word}`);
                throw new AssemblyError(`Numeric value ${value} out of range for a word`);
            }
            words.push(word);
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
                for (let i = 1; i + 1 < value.length; ++i)
                    bytes.push(value.charCodeAt(i));
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
    constructor(value) {
        super('FILL');
        this.value = value;
    }

    toString() {
        return 'FILL ' + this.value;
    }

    get bytes() {
        return parseImmediate(this.value);
    }

    static reconstruct(o) {
        return new FillDirective(o.value);
    }
}

export class Register extends AstNode {
    constructor(name) {
        super(name);
    }

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
            throw "Exactly one of amountImmediate and amountRegister should be specified";
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

/*
export class OffsetOperand extends AstNode {
    constructor(register, offset) {
        super('offset');
        this.register = register;
        this.offset = offset ? parseInt(offset) : null;
    }

    children() {
        return [this.register];
    }

    toString() {
        if (this.offset)
            return '[ , ' + this.offset + ']';
        else
            return '[ ]';
    }

    static reconstruct(o) {
        return new OffsetOperand(AstNode.reconstruct(o.register), o.offset);
    }
}
*/

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
        return parseImmediate(this.text);
    }

    static reconstruct(o) {
        return new PseudoImmediate(o.text);
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
    'Line': Line,
    'Instruction': Instruction,
    'Directive': Directive,
    'DCD': DCD,
    'DCB': DCB,
    'EquateDirective': EquateDirective,
    'FillDirective': FillDirective,
    'Register': Register,
    'WritebackRegister': WritebackRegister,
    'SignedRegister': SignedRegister,
    'RegisterSet': RegisterSet,
    'FlexOperand': FlexOperand,
    'PreindexedOperand': PreindexedOperand,
    'PostindexedOperand': PostindexedOperand,
    'Immediate': Immediate,
    'PseudoImmediate': PseudoImmediate,
};
