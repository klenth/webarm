parser grammar ARM32Parser;

@header {
import * as AST from './arm32Ast';
}

options {
    tokenVocab = ARM32Lexer;
}

program
returns [Program p]
    : NEWLINE* (lines+=line)* EOF {
        $p = new AST.Program($lines.map(l => l.l));
    }
    ;

line
returns [Line l]
    : lab=label? inst=instruction NEWLINE+ {
        $l = new AST.Line($ctx.start.line, $lab.text, $inst.i);
    }
    | lab=label? dir=directive NEWLINE+ {
        $l = new AST.Line($ctx.start.line, $lab.text, $dir.d);;
    }
    ;

label
    : ID
    ;

instruction
returns [Instruction i]
    : op=opcode s=S? cond=COND? (operands+=operand (COMMA operands+=operand)*)? {
        $i = new AST.Instruction($op.text, $s.text || '', $cond.text || '', $operands.map(o => o.op));;
    }
    ;

opcode
    : OPCODE
    ;

operand
returns [AstNode op]
    : r=register f=flexOperandSpec {
        $op = new AST.FlexOperand($r.reg, $f.ctx.op.text, $f.ctx.amount !== null ? $f.ctx.amount.text : null, $f.ctx.register() !== null ? $f.ctx.register().reg : null);;
    }
    | r=register {
        $op = $r.reg;;
    }
    | LBRACK r=register COMMA o=offset? RBRACK BANG {
        $op = new AST.PreindexedOperand($r.reg, parseInt($o.off));;
    }
    | LBRACK r=register RBRACK COMMA o=offset {
        $op = new AST.PostindexedOperand($r.reg, parseInt($o.off));;
    }
    | LBRACK r=register (COMMA o=offset)? RBRACK {
        $op = new AST.OffsetOperand($r.reg, $o.off);;
    }
    | i=immediate {
        $op = $i.value;;
    }
    | pi=pseudoImmediate {
        $op = $pi.value;;
    }
    | s=symbol {
        $op = $s.text;;
    }
    ;

register
returns [Register reg]
    : r=REGISTER {
        $reg = new AST.Register($r.text);;
    }
    ;

flexOperandSpec
    : op=OPCODE {['LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0}? POUND amount=INT
    | op=OPCODE {['LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0}? register
    ;

offset
returns [AstNode off]
    : r=register {
        $off = $r.reg;;
    }
    | r=register COMMA f=flexOperandSpec {
        $off = new AST.FlexOperand($r.reg, $f.ctx.op.text, parseInt($f.ctx.amount.text));;
    }
    | i=immediate {
        $off = $i.value;;
    }
    ;

immediate
returns [Immediate value]
    : POUND v=INT {
        $value = new AST.Immediate($v.text);;
    }
    ;

pseudoImmediate
returns [PseudoImmediate value]
    : EQUALS v=INT {
        $value = new AST.PseudoImmediate($v.text);;
    }
    ;

symbol
returns [String text]
    : t=ID {
        $text = $t.text;;
    }
    ;

directive
returns [Directive d]
    : DCD (values+=INT (COMMA values+=INT)*) {
        $d = new AST.DCD($values.map(s => parseInt(s.text)));;
    }
    | EQU value=INT {
        $d = new AST.EquateDirective(parseInt($value.text));;
    }
    | FILL value=INT {
        $d = new AST.FillDirective(parseInt($value.text));;
    }
    ;
