lexer grammar ARM32Lexer;

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
            | 'ROR' | 'RRX' | 'LSL' | 'ASR' | 'LSR'
            | 'CMP' | 'CMN' | 'TST' | 'TEQ' | 'B' | 'BL' | 'END'
            | ('LDR' | 'STR') 'B'?
            | ('LDM' | 'STM') ('FA' | 'FD' | 'EA' | 'ED' | 'IA' | 'DB'))
        -> mode(M_MNEMONIC)
    ;

REGISTER
    : 'R' [0-9]
    | 'R1' [0-5]
    | 'SP'
    | 'LR'
    | 'PC'
    | 'BL'
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

SHIFT
    : 'LSL' | 'LSR' | 'ASR' | 'ROR'
    ;

ID
    : '.' [a-zA-Z_] [a-zA-Z0-9_]*
    ;

NL
    : [\r\n]+
    ;

WS
    : [ \t]+ -> skip
    ;


mode M_COMMENT;

COMMENT_NL
    : [\r\n] -> mode(DEFAULT_MODE), type(NL)
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

MNEMONIC_OTHER
    : .     -> more, mode(DEFAULT_MODE)
    ;
