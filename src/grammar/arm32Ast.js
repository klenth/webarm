class AstNode {
    constructor(name) {
        this.name = name;
    }

    children() {
        return [];
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
}

class Line extends AstNode {
    constructor(label, item) {
        super('line');
        this.label = label;
        this.item = item;
    }

    children() {
        return this.item;
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
}

class EquateDirective extends Directive {
    constructor(value) {
        super('equ');
        this.value = value;
    }
}

class FillDirective extends Directive {
    constructor(value) {
        super('FILL');
        this.value = value;
    }
}

class Register extends AstNode {
    constructor(name) {
        super(name);
    }
}

class FlexOperand extends AstNode {
    constructor(register, shift, amount) {
        super('flex');
        this.register = register;
        this.shift = shift;
        this.amount = amount;
    }
}

class OffsetOperand extends AstNode {
    constructor(register, offset) {
        super('offset');
        this.register = register;
        this.offset = offset ? parseInt(offset) : null;
    }
}

class PreindexedOperand extends AstNode {
    constructor(register, offset) {
        super('preindex');
        this.register = register;
        this.offset = offset;
    }
}

class PostindexedOperand extends AstNode {
    constructor(register, offset) {
        super('postindex');
        this.register = register;
        this.offset = offset;
    }
}

class Immediate extends AstNode {
    constructor(value) {
        super('immediate');
        this.value = value;
    }
}

class PseudoImmediate extends AstNode {
    constructor(value) {
        super('pseudoimmediate');
        this.value = value;
    }
}

const exports = {
    AST: {
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
    }
};

export default exports;
