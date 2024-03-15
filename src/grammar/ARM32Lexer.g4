lexer grammar ARM32Lexer;

options {
    caseInsensitive = true;
}

COMMENT
    : ';' -> skip, mode(M_COMMENT)
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

LBRACE
    : '{'
    ;

RBRACE
    : '}'
    ;

BANG
    : '!'
    ;

HYPHEN
    : '-'
    ;

PLUS
    : '+'
    ;

DOUBLE_QUOTE
    : '"' -> more, mode(M_DOUBLE_STRING)
    ;

SINGLE_QUOTE
    : ['] -> more, mode(M_SINGLE_STRING)
    ;

OPCODE
    // Opcodes that can be followed by S and Cond
    : ('AND' | 'EOR' | 'SUB' | 'RSB' | 'ADD' | 'ADC' | 'SBC' | 'RSC'
        | 'ORR' | 'MOV' | 'BIC' | 'MVN' | 'MUL' | 'MLA' | 'LSL' | 'ASL'
        | 'LSR' | 'ASR' | 'ROR') ( | 'S' | COND | 'S' COND | COND 'S')

    // Opcodes that can be followed by a Cond (but not S)
    | ('CMP' | 'CMN' | 'TST' | 'TEQ'
        | 'B' | 'BL' | 'BX'
        | 'STOP' | 'BREAK' | 'SWI') COND?

    // Special cases
    | ('LDR' | 'STR') 'B'? COND?
    | ('LDM' | 'STM') ('FA' | 'FD' | 'EA' | 'ED' | 'IA' | 'IB' | 'DA' | 'DB') COND?
    | 'NOP'
    ;

fragment COND
    : 'EQ' | 'NE' | 'CS' | 'CC' | 'MI' | 'PL' | 'VS' | 'VC'
        | 'HI' | 'LS' | 'GE' | 'LT' | 'GT' | 'LE' | 'AL'
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
    | '0x' [0-9a-f] ([_0-9a-f]* [0-9a-f])?
    | '0b' [01] ([01_]* [01])?
    ;

INT
    : '-'? INT_STEM
    ;

DCD
    : 'DCD'
    ;

DCB
    : 'DCB'
    ;

EQU
    : 'EQU'
    ;

FILL
    : 'FILL'
    ;

ALIGN
    : 'ALIGN'
    ;

ID
    : '.' [a-z_] [a-z0-9_]*
    ;

NEWLINE
    : [\r\n]+
    ;

WS
    : [ \t]+ -> skip
    ;

INVALID
    : .
    ;

mode M_COMMENT;

COMMENT_NL
    : [\r\n] -> mode(DEFAULT_MODE), type(NEWLINE)
    ;

COMMENT_TEXT
    : . -> skip
    ;

mode M_DOUBLE_STRING;

STRING
    : '"'   -> mode(DEFAULT_MODE)
    ;

DOUBLE_STRING_NEWLINE
    : [\r\n]    -> type(INVALID), mode(DEFAULT_MODE)
    ;

DOUBLE_STRING_TEXT
    : (. | '\\"')    -> more
    ;

mode M_SINGLE_STRING;

SINGLE_STRING
    : [']   -> type(STRING), mode(DEFAULT_MODE)
    ;

SINGLE_STRING_NEWLINE
    : [\r\n]    -> type(INVALID), mode(DEFAULT_MODE)
    ;

SINGLE_STRING_TEXT
    : (. | '\\\'')     -> more
    ;
