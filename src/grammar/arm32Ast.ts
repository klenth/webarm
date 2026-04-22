import { AssemblyError } from '../arm32sim/Assembler';
import { parseMnemonic } from './arm32Mnemonic';

type SymbolAddressMapper = (symbol: string) => number;

export function parseImmediate(text: string): number {
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

function registerNumber(registerText: string): number {
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
    name: string;
    className: string;

    constructor(name: string) {
        this.name = name;
        this.className = this.constructor.name;
    }

    children(): AstNode[] {
        return [];
    }

    toString(): string {
        return this.name;
    }

    static reconstruct(o: { className?: string }): AstNode | null | undefined {
        if (o === null)
            return null;
        else if (o === undefined)
            return undefined;

        const className: string | undefined = o.className;
        if (!className)
            throw new Error('No className found!');
        if (typeof(exports[className]) !== 'undefined')
            return exports[className].reconstruct(o);
        else
            throw new Error('No class found called "' + className + '"');
    }
}

export class Program extends AstNode {
    externs: Extern[]
    exports: Export[]
    lines: Line[]

    constructor(externs: Extern[], exports: Export[], lines: Line[]) {
        super('program');
        this.externs = externs;
        this.exports = exports;
        this.lines = lines;
    }

    override children() {
        return [...this.externs, ...this.exports, ...this.lines];
    }

    static reconstruct(o: { [key in keyof Program]: any }): Program {
        return new Program(
            o.externs.map(AstNode.reconstruct),
            o.exports.map(AstNode.reconstruct),
            o.lines.map(AstNode.reconstruct)
        );
    }
}

export class Extern extends AstNode {

    symbol: string;

    constructor(symbol: string) {
        super('extern');
        this.symbol = symbol;
    }

    override toString() {
        return `EXTERN ${this.symbol}`;
    }

    static reconstruct(o: { [key in keyof Extern]: any }): Extern {
        return new Extern(o.symbol);
    }
}

export class Export extends AstNode {

    symbol: string;

    constructor(symbol: string) {
        super('export');
        this.symbol = symbol;
    }

    override toString() {
        return `EXPORT ${this.symbol}`;
    }

    static reconstruct(o: { [key in keyof Export]: any }): Export {
        return new Export(o.symbol);
    }
}

export class Line extends AstNode {
    lineNumber: number;
    label: string | null;
    item: Instruction | Directive | null;

    constructor(lineNumber: number, label: string | null, item: Instruction | Directive | null) {
        super('line');
        this.lineNumber = lineNumber;
        this.label = label;
        this.item = item;
    }

    override children() {
        return this.item ? [this.item] : [];
    }

    override toString() {
        if (this.label)
            return '[' + this.label + '] ' + super.toString();
        return super.toString();
    }

    static reconstruct(o: { [key in keyof Line]: any }): Line {
        return new Line(o.lineNumber, o.label, AstNode.reconstruct(o.item) as Instruction | Directive | null);
    }
}

export class Instruction extends AstNode {
    opcode: number;
    s: number;
    cond: string;
    operands: AstNode[]

    constructor(mnemonic: string, operands: AstNode[]) {
        super(mnemonic);
        const { OpCode, S, Cond } = parseMnemonic(mnemonic);
        this.opcode = OpCode;
        this.s = S;
        this.cond = Cond;
        this.operands = operands;
    }

    override children() {
        return this.operands;
    }

    static reconstruct(o: { [key in keyof Instruction]: any }): Instruction {
        // return new Instruction(o.opcode, o.s, o.cond, o.operands.map(AstNode.reconstruct));
        throw new Error("Yes, we really do need reconstruct()");
    }
}

export class Directive extends AstNode {
}

export class DCD extends Directive {
    values: (string | SymbolicExpression)[];

    constructor(values: (string | SymbolicExpression)[]) {
        super('DCD');
        this.values = values;
    }

    override toString() {
        return 'DCD ' + this.values;
    }

    get words(): (number | SymbolicExpression)[] {
        const words = [];
        for (let value of this.values) {
            if (value instanceof SymbolicExpression)
                words.push(value);  // it's a symbol
            else {
                const word = parseImmediate(value);
                if (word < -2147483648 || word >= 4294967296)
                    throw new AssemblyError(`Numeric value ${value} out of range for a word`, this);
                words.push(word & 0xffff_ffff);
            }
        }

        return words;
    }

    static reconstruct(o: { [key in keyof DCD]: any }): DCD {
        return new DCD(o.values);
    }
}

export class DCB extends Directive {

    values: string[];

    constructor(values: string[]) {
        super('DCB');
        this.values = values;
    }

    override toString() {
        return 'DCB ' + this.values;
    }

    get bytes(): number[] {
        const bytes: number[] = [];
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
                    throw new AssemblyError(`Numeric value ${value} out of range for a byte`, this);
                bytes.push((byte >>> 0) & 0xff);
            }
        }

        return bytes;
    }

    static reconstruct(o: { [key in keyof DCB]: any }): DCB {
        return new DCB(o.values);
    }
}

export class EquateDirective extends Directive {

    value: string;

    constructor(value: string) {
        super('EQU');
        this.value = value;
    }

    override toString() {
        return 'equ ' + this.value;
    }

    static reconstruct(o: { [key in keyof EquateDirective]: any }): EquateDirective {
        return new EquateDirective(o.value);
    }
}

export class FillDirective extends Directive {
    bytesText: string;
    valueText: string;

    constructor(bytesText: string, valueText: string) {
        super('FILL');
        this.bytesText = bytesText;
        this.valueText = valueText;
    }

    override toString() {
        return 'FILL ' + this.bytesText + (this.valueText ? ' ' + this.valueText : '');
    }

    get bytes() {
        return parseImmediate(this.bytesText);
    }

    get value() {
        return (this.valueText === null) ? null : parseImmediate(this.valueText);
    }

    static reconstruct(o: { [key in keyof FillDirective]: any }): FillDirective {
        return new FillDirective(o.bytesText, o.valueText);
    }
}

export class AlignDirective extends Directive {
    value: string;

    constructor(value: string) {
        super('ALIGN');
        this.value = value;
    }

    override toString() {
        return this.value ? `ALIGN ${this.value}` : 'ALIGN';
    }

    get bytes() {
        return this.value ? parseImmediate(this.value) : null;
    }

    /*
    static reconstruct(o) {
        return new AlignDirective(o.value);
    }
     */
}

export class Register extends AstNode {
    /*static reconstruct(o) {
        return new Register(o.name);
    }*/

    number(): number {
        return registerNumber(this.name);
    }
}

export class WritebackRegister extends Register {
    /*static reconstruct(o) {
        return new WritebackRegister(o.name);
    }*/
}

export class SignedRegister extends AstNode {
    sign: "-" | "";
    name: string;

    constructor(sign: "-" | "", name: string) {
        super(sign + name);
        this.sign = sign;
        this.name = name;
    }

    /*
    static reconstruct(o) {
        return new SignedRegister(o.sign, o.name);
    }*/

    number() {
        return registerNumber(this.name);
    }
}

export class RegisterSet extends AstNode {
    startRegister: Register;
    endRegister: Register;
    childRegisterSet: RegisterSet | null;

    constructor(startRegister: Register, endRegister: Register, childRegisterSet: RegisterSet | null) {
        super('{}');
        this.startRegister = startRegister;
        this.endRegister = endRegister;
        this.childRegisterSet = childRegisterSet;
    }

    /*
    static reconstruct(o) {
        return new RegisterSet(o.startRegister, o.endRegister, o.childRegisterSet);
    }*/

    get bits(): number {
        let bits = this.childRegisterSet?.bits ?? 0;
        for (let i = this.startRegister.number(); i <= this.endRegister.number(); ++i)
            bits |= (1 << i);
        return bits;
    }
}

export class FlexOperand extends AstNode {

    register: Register;
    shift: string;
    amountImmediateText: string | null;
    amountRegister: Register | null;

    constructor(register: Register, shift: string, amountImmediate: string | null, amountRegister: Register | null) {
        super('flex');
        this.register = register;
        this.shift = shift;
        if (!amountImmediate && !amountRegister)
            throw new Error("Exactly one of amountImmediate and amountRegister should be specified");
        this.amountImmediateText = amountImmediate;
        this.amountRegister = amountRegister;
    }

    override children(): Register[] {
        if (this.amountRegister)
            return [this.register, this.amountRegister];
        else
            return [this.register];
    }

    override toString() {
        if (this.amountRegister)
            return 'flex: ' + this.shift;
        else
            return 'flex: ' + this.shift + ' #' + this.amountImmediate;
    }

    /*
    static reconstruct(o) {
        return new FlexOperand(AstNode.reconstruct(o.register), o.shift,
            o.amountImmediateText,
            o.amountRegister ? AstNode.reconstruct(o.amountRegister) : null);
    }
     */

    get amountImmediate(): number | null {
        if (this.amountImmediateText !== null)
            return parseImmediate(this.amountImmediateText);
        else
            return null;
    }
}

export class PreindexedOperand extends AstNode {

    register: Register;
    offset: string;
    writeback: string;

    constructor(register: Register, offset: string, writeback: string) {
        super('preindex');
        this.register = register;
        this.offset = offset;
        this.writeback = writeback;
    }

    override children(): Register[] {
        return [this.register];
    }

    override toString() {
        return '[ , ' + this.offset + ']!';
    }

    /*
    static reconstruct(o) {
        return new PreindexedOperand(AstNode.reconstruct(o.register), o.offset);
    }
     */
}

export class PostindexedOperand extends AstNode {

    register: Register;
    offset: string;

    constructor(register: Register, offset: string) {
        super('postindex');
        this.register = register;
        this.offset = offset;
    }

    override children(): Register[] {
        return [this.register];
    }

    override toString() {
        return '[ ], ' + this.offset;
    }

    /*
    static reconstruct(o) {
        return new PostindexedOperand(AstNode.reconstruct(o.register), o.offset);
    }
     */
}

export class Immediate extends AstNode {

    text: string;

    constructor(text: string) {
        super('immediate');
        this.text = text;
    }

    override toString() {
        return 'immediate [' + this.text + ']';
    }

    get value(): number {
        return parseImmediate(this.text);
    }

    /*
    static reconstruct(o) {
        return new Immediate(o.text);
    }*/
}

export class PseudoImmediate extends AstNode {

    text: string | SymbolicExpression;

    constructor(text: string) {
        super('pseudoimmediate');
        this.text = text;
    }

    override toString() {
        return 'pseudoimmediate [' + this.text + ']';
    }

    get value(): number | SymbolicExpression {
        if (this.text instanceof SymbolicExpression)
            return this.text;
        else
            return parseImmediate(this.text);
    }

    children(): SymbolicExpression[] {
        if (this.text instanceof AstNode)
            return [this.text];
        else
            return [];
    }

    /*
    static reconstruct(o) {
        return new PseudoImmediate(o.text);
    }*/
}

export class SymbolicExpression extends AstNode {

    evaluate(mapper: SymbolAddressMapper): number {
        throw new Error('evaluate() not overridden');
    }
}

export class BinaryOp extends SymbolicExpression {
    static _OPS: { [op: string]: (l: number, r: number) => number } = {
        '+': (l, r) => l + r,
        '-': (l, r) => l - r,
        '*': (l, r) => l * r,
        '/': (l, r) => l / r,
        '%': (l, r) => l % r
    };

    op: string;
    left: SymbolicExpression;
    right: SymbolicExpression;

    constructor(op: string, left: SymbolicExpression, right: SymbolicExpression) {
        super(op);
        this.op = op;
        this.left = left;
        this.right = right;
    }

    override evaluate(mapper: SymbolAddressMapper) {
        const l = this.left.evaluate(mapper), r = this.right.evaluate(mapper);
        return BinaryOp._OPS[this.op](l, r);
    }

    override children(): SymbolicExpression[] {
        return [this.left, this.right];
    }
}

export class CurrentAddressExpression extends SymbolicExpression {
    constructor() {
        super('.');
    }

    override evaluate(mapper: SymbolAddressMapper) {
        return mapper('.');
    }
}

export class SymbolExpression extends SymbolicExpression {

    symbol: string;

    constructor(symbol: string) {
        super(symbol);
        this.symbol = symbol;
    }

    override evaluate(mapper: SymbolAddressMapper) {
        return mapper(this.symbol);
    }
}

export class NumberExpression extends SymbolicExpression {

    text: string;

    constructor(text: string) {
        super(text);
        this.text = text;
    }

    override evaluate(mapper: SymbolAddressMapper) {
        return parseImmediate(this.text);
    }
}

export function logAst(node: AstNode, log: ((text: string) => void)=console.log, levels=0) {
    if (!node)
        return;

    let s = '';

    for (let i = 0; i < levels; ++i)
        s += '  ';

    log(s + '{' + node.constructor.name + '} ' + node.toString());
    for (let child of node.children())
        logAst(child, log, levels + 1);
}

/*
const exports: { [name: string]: typeof AstNode } = {
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
*/