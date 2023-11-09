class AstNode {
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

class Program extends AstNode {
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

class Line extends AstNode {
    constructor(label, item) {
        super('line');
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

class Instruction extends AstNode {
    constructor(opcode, operands) {
        super(opcode);
        this.opcode = opcode;
        this.operands = operands;
    }

    children() {
        return this.operands;
    }

    static reconstruct(o) {
        return new Instruction(o.opcode, o.operands.map(AstNode.reconstruct));
    }
}

class Directive extends AstNode {
    constructor(name) {
        super(name);
    }
}

class DCD extends Directive {
    constructor(values) {
        super('DCD');
        this.values = values;
    }

    toString() {
        return 'DCD ' + this.values;
    }

    static reconstruct(o) {
        return new DCD(o.values);
    }
}

class EquateDirective extends Directive {
    constructor(value) {
        super('equ');
        this.value = value;
    }

    toString() {
        return 'equ ' + this.value;
    }

    static reconstruct(o) {
        return new EquateDirective(o.value);
    }
}

class FillDirective extends Directive {
    constructor(value) {
        super('FILL');
        this.value = value;
    }

    toString() {
        return 'FILL ' + this.value;
    }

    static reconstruct(o) {
        return new FillDirective(o.value);
    }
}

class Register extends AstNode {
    constructor(name) {
        super(name);
    }

    static reconstruct(o) {
        return new Register(o.name);
    }

    number() {
        return parseInt(this.name.slice(1));
    }
}

class FlexOperand extends AstNode {
    constructor(register, shift, amount) {
        super('flex');
        this.register = register;
        this.shift = shift;
        this.amount = amount;
    }

    children() {
        return [this.register];
    }

    toString() {
        return 'flex: ' + this.shift + ' #' + this.amount;
    }

    static reconstruct(o) {
        return new FlexOperand(AstNode.reconstruct(o.register), o.shift, o.amount);
    }
}

class OffsetOperand extends AstNode {
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

class PreindexedOperand extends AstNode {
    constructor(register, offset) {
        super('preindex');
        this.register = register;
        this.offset = offset;
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

class PostindexedOperand extends AstNode {
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

class Immediate extends AstNode {
    constructor(value) {
        super('immediate');
        this.value = value;
    }

    toString() {
        return 'immediate [' + this.value + ']';
    }

    static reconstruct(o) {
        return new Immediate(o.value);
    }
}

class PseudoImmediate extends AstNode {
    constructor(value) {
        super('pseudoimmediate');
        this.value = value;
    }

    toString() {
        return 'pseudoimmediate [' + this.value + ']';
    }

    static reconstruct(o) {
        return new PseudoImmediate(o.value);
    }
}

function logAst(node, log=console.log, levels=0) {
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
    AstNode: AstNode,
    Program: Program,
    Line: Line,
    Instruction: Instruction,
    Directive: Directive,
    DCD: DCD,
    EquateDirective: EquateDirective,
    FillDirective: FillDirective,
    Register: Register,
    FlexOperand: FlexOperand,
    OffsetOperand: OffsetOperand,
    PreindexedOperand: PreindexedOperand,
    PostindexedOperand: PostindexedOperand,
    Immediate: Immediate,
    PseudoImmediate: PseudoImmediate,
    logAst: logAst,
};

export default exports;
