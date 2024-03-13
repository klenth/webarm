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
    : lab=label? NEWLINE+ {
        $l = new AST.Line($ctx.start.line, $lab.text, null);;
    }
    | lab=label? inst=instruction NEWLINE+ {
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
    : op=OPCODE (operands+=operand (COMMA operands+=operand)*)? {
        $i = new AST.Instruction($op.text, $operands.map(o => o.op));;
    }
    ;

operand
returns [AstNode op]
    : LBRACK r=register RBRACK COMMA i=immediate {
        $op = new AST.PostindexedOperand($r.reg, $i.value);;
    }
    | LBRACK r=register RBRACK COMMA s=symbol {
        $op = new AST.PostindexedOperand($r.reg, $s.text);;
    }
    | LBRACK r=register RBRACK COMMA HYPHEN? roff=register {
        $op = new AST.PostindexedOperand($r.reg, new AST.SignedRegister($HYPHEN.text, $roff.reg.name));;
    }
    | LBRACK r=register RBRACK COMMA HYPHEN? roff=register COMMA f=flexOperandSpec {
        $op = new AST.PostindexedOperand(
            $r.reg,
            new AST.FlexOperand(
                new AST.SignedRegister($HYPHEN.text, $roff.reg.name),
                $f.ctx.op.text,
                $f.ctx.amount !== null ? $f.ctx.amount.text : null,
                $f.ctx.register() !== null ? $f.ctx.register().reg : null
            )
        );;
    }
    | r=register COMMA f=flexOperandSpec {
        $op = new AST.FlexOperand($r.reg, $f.ctx.op.text, $f.ctx.amount !== null ? $f.ctx.amount.text : null, $f.ctx.register() !== null ? $f.ctx.register().reg : null);;
    }
    | wr=writebackRegister {
        $op = $wr.reg;;
    }
    | r=register {
        $op = $r.reg;;
    }
    /*
    | LBRACK r=register COMMA o=offset? RBRACK BANG {
        $op = new AST.PreindexedOperand($r.reg, parseInt($o.off));;
    }
    | LBRACK r=register RBRACK COMMA o=offset {
        $op = new AST.PostindexedOperand($r.reg, parseInt($o.off));;
    }
    | LBRACK r=register (COMMA o=offset)? RBRACK {
        $op = new AST.OffsetOperand($r.reg, $o.off);;
    }*/
    | LBRACK r=register RBRACK {
        $op = new AST.PreindexedOperand($r.reg, null, null);;
    }
    | LBRACK r=register COMMA i=immediate RBRACK BANG? {
        $op = new AST.PreindexedOperand($r.reg, $i.value, !!$BANG.text);;
    }
    | LBRACK r=register COMMA s=symbol RBRACK BANG? {
        $op = new AST.PreindexedOperand($r.reg, $s.text, !!$BANG.text);;
    }
    | LBRACK r=register COMMA HYPHEN? roff=register RBRACK BANG? {
        $op = new AST.PreindexedOperand($r.reg, new AST.SignedRegister($HYPHEN.text, $roff.reg.name), !!$BANG.text);;
    }
    | LBRACK r=register COMMA HYPHEN? roff=register COMMA f=flexOperandSpec RBRACK BANG? {
        $op = new AST.PreindexedOperand(
            $r.reg,
            new AST.FlexOperand(
                new AST.SignedRegister($HYPHEN.text, $roff.reg.name),
                $f.ctx.op.text,
                $f.ctx.amount !== null ? $f.ctx.amount.text : null,
                $f.ctx.register() !== null ? $f.ctx.register().reg : null
            ),
            !!$BANG.text
        );;
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
    | LBRACE rs=registerSet RBRACE {
        $op = $rs.registers;;
    }
    ;

register
returns [Register reg]
    : r=REGISTER {
        $reg = new AST.Register($r.text);;
    }
    ;

writebackRegister
returns [WritebackRegister reg]
    : r=REGISTER BANG {
        $reg = new AST.WritebackRegister($r.text);;
    }
    ;

flexOperandSpec
    : op=OPCODE {['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0}? POUND amount=INT
    | op=OPCODE {['ASL', 'LSL', 'LSR', 'ASR', 'ROR'].indexOf($op.text.toUpperCase()) >= 0}? register
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
    | EQUALS s=symbol {
        $value = new AST.PseudoImmediate($s.text);;
    }
    ;

symbol
returns [String text]
    : t=ID {
        $text = $t.text;;
    }
    ;

registerSet
returns [RegisterSet registers]
    : r1=register HYPHEN r2=register (COMMA child=registerSet)? {
        $registers = new AST.RegisterSet($r1.reg, $r2.reg, $child.ctx ? $child.registers : null);;
    }
    | r1=register (COMMA child=registerSet)? {
        $registers = new AST.RegisterSet($r1.reg, $r1.reg, $child.ctx ? $child.registers : null);;
    }
    ;

directive
returns [Directive d]
    : DCD (dcd_values+=dcd_value (COMMA dcd_values+=dcd_value)*) {
        $d = new AST.DCD($dcd_values.map(node => node.n));;
    }
    | DCB (dcb_values+=dcb_value (COMMA dcb_values+=dcb_value)*) {
        $d = new AST.DCB($dcb_values.map(node => node.n));;
    }
    | EQU value=INT {
        $d = new AST.EquateDirective($value.text);;
    }
    | FILL value=INT {
        $d = new AST.FillDirective($value.text);;
    }
    | ALIGN (value=INT)? {
        $d = new AST.AlignDirective($value.text);;
    }
    ;

dcd_value
returns [AstNode n]
    : INT {
        $n = $INT.text;;
    }
    | symbol {
        $n = $symbol.text;;
    }
    ;

dcb_value
returns [AstNode n]
    : INT {
        $n = $INT.text;;
    }
    | STRING {
        $n = $STRING.text;;
    }
    ;
