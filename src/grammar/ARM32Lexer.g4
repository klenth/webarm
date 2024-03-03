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

BANG
    : '!'
    ;

OPCODE
    : ('MOV' | 'MVN' | 'ADR' | 'LDR' | 'ADD' | 'ADC' | 'SUB' | 'SBC' | 'RSB' | 'RSC' | 'AND' | 'EOR' | 'BIC' | 'ORR'
            | 'ROR' | 'RRX' | 'ASL' | 'LSL' | 'ASR' | 'LSR'
            | 'CMP' | 'CMN' | 'TST' | 'TEQ' | 'B' | 'BL' | 'BX' | 'END'
            | ('LDR' | 'STR') 'B'?
            | ('LDM' | 'STM') ('FA' | 'FD' | 'EA' | 'ED' | 'IA' | 'DB')
            | 'STOP' | 'BREAK' | 'NOP')
        -> mode(M_MNEMONIC)
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

SIGN
    : [-+]
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

EQU
    : 'equ'
    ;

FILL
    : 'FILL'
    ;

SHIFT
    : 'ASL' | 'LSL' | 'LSR' | 'ASR' | 'ROR'
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

mode M_MNEMONIC;

MNEMONIC_SEMI
    : ';' -> more, mode(M_COMMENT)
    ;

S
    : 'S'
    ;

COND
    : 'EQ' | 'NE' | 'CS' | 'HS' | 'CC' | 'LO' | 'MI' | 'PL' | 'VS' | 'VC' | 'HI' | 'LS'
    | 'GE' | 'LT' | 'GT' | 'LE' | 'AL'
    ;

MNEMONIC_WS
    : ' '   -> skip, mode(DEFAULT_MODE)
    ;

MNEMONIC_NEWLINE
    : [\r\n] -> mode(DEFAULT_MODE), type(NEWLINE)
    ;

MNEMONIC_OTHER
    : .     -> mode(DEFAULT_MODE), type(INVALID)
    ;
