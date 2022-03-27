grammar ARM32;

@header {
import AST from './arm32Ast';
}

program
returns [Program p]
    : (lines+=line)* EOF {
        $p = new AST.Program($lines.map(l => l.l));
    }
    ;

line
returns [Line l]
    : lab=label? inst=instruction {
        $l = new AST.Line($lab.text, $inst.i);
    }
    | lab=label? dir=directive {
        $l = new AST.Line($lab.text, $dir.d);;
    }
    ;

label
    : ID
    ;

instruction
returns [Instruction i]
    : op=opcode (operands+=operand (COMMA operands+=operand)*)? {
        $i = new AST.Instruction($op.text, $operands.map(o => o.op));;
    }
    ;

opcode
    : OPCODE_NONFLEX
    | OPCODE_FLEX
    ;

operand
returns [AstNode op]
    : r=register COMMA f=flexOperandSpec {
        $op = new AST.FlexOperand($r.reg, $f.ctx.op.text, parseInt($f.ctx.amount.text));;
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
    : op=OPCODE_FLEX POUND amount=INT
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
        $value = new AST.Immediate(parseInt($v.text));;
    }
    ;

pseudoImmediate
returns [PseudoImmediate value]
    : EQUALS v=INT {
        $value = new AST.PseudoImmediate(parseInt($v.text));;
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

COMMENT
    : ';' (~[\n])* ('\n' | EOF) -> skip
    ;

fragment COND
    : 'EQ' | 'NE' | 'CS' | 'HS' | 'CC' | 'LO' | 'MI' | 'PL' | 'VS' | 'VC' | 'HI' | 'LS'
    | 'GE' | 'LT' | 'GT' | 'LE' | 'AL';

OPCODE_FLEX
    : 'LSL'
    | 'ASR'
    | 'LSR'
    ;

OPCODE_NONFLEX
    /* opcodes of the form XXX{S}{cond} */
    : (('MOV' | 'MVN' | 'ADR' | 'LDR' | 'ADD' | 'ADC' | 'SUB' | 'SBC' | 'RSB' | 'RSC' | 'AND' | 'EOR' | 'BIC' | 'ORR'
            | 'ROR' | 'RRX')
        'S'?
        COND?)

    /* opcodes of the form XXX{cond} */
    | (('CMP' | 'CMN' | 'TST' | 'TEQ' | 'B' | 'BL' | 'END') COND?)

    /* opcodes of the form XXX{B}{cond} */
    | (('LDR' | 'STR') 'B'? COND?)

    /* opcodes of the form XXX{dir}{cond} */
    | (('LDM' | 'STM') ('FA' | 'FD' | 'EA' | 'ED' | 'IA' | 'DB')? COND?)
    ;

COMMA
    : ','
    ;

LBRACK
    : '['
    ;

RBRACK
    : ']'
    ;

BANG
    : '!'
    ;

REGISTER
    : 'R' [0-9]
    | 'R1' [0-5]
    | 'SP'
    | 'LR'
    | 'PC'
    ;

POUND
    : '#'
    ;

EQUALS
    : '='
    ;

fragment INT_STEM
    : [0-9] ([0-9_]* [0-9])?
    | '0' ('x' | 'X') [0-9a-fA-F] ([_0-9a-fA-F]* [0-9a-fA-F])?
    | '0' ('b' | 'B') [01] ([01_]* [01])?
    ;

INT
    : '-'? INT_STEM
    ;

DCD
    : 'DCD'
    ;

EQU
    : 'equ'
    ;

FILL
    : 'FILL'
    ;

ID
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

WS
    : [ \r\n\t]+ -> skip
    ;
