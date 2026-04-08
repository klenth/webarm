import * as Assembler from './Assembler.js';
import { parse, ParseError } from './Parser.js';

export function assemble() {
    const ast = parse(CODE);
    return Assembler.assemble(ast, 0x1f_0000);
}

const CODE = `
EXPORT  .std_srand
EXPORT  .std_rand
EXPORT  .std_print
EXPORT  .std_println
EXPORT  .std_print_number
EXPORT  .std_mod10
EXPORT  .std_div10

        ALIGN
.std_srand
        LDR     R1, =.rand_seed
        STR     R0, [R1]
        MOV     PC, LR

        ALIGN
.std_rand
        MOV     R3, LR
        LDR     R0, .rand_seed
        LDR     R1, =1_664_525
        MUL     R0, R1, R0
        LDR     R1, =1_013_904_223
        ADD     R0, R0, R1
        LSR     R0, R0, #8
        STR     R0, .rand_seed
        MOV     PC, R3

.rand_seed
        DCD     0

        ALIGN
.std_print  
        STMFD   SP!, {R7,LR}
        LDR     R7, =0xCA11_0011
        MOV     R1, R0
.print_top
        LDRB    R0, [R1], #1
        CMP     R0, #0
        BEQ     .print_end
        SWI
        B       .print_top
.print_end
        LDMFD   SP!, {R7,PC}

        ALIGN
.std_println
        STMFD   SP!, {R7,LR}
        BL      .std_print
        LDR     R7, =0xCA11_0011
        MOV     R0, #0x0A
        SWI
        LDMFD   SP!, {R7,PC}

        ALIGN
.std_print_number
        STMFD   SP!, {R5-R9,LR}
        CMP     R1, #20
        MOVHI   R1, #20
        MOV     R9, R1
        LDR     R6, =.print_number_buffer_end
        SUB     R6, R6, #1
        LDR     R7, =1
        LSRS    R8, R0, #31
        RSBNE   R0, R0, #0
        MOV     R5, R0
.print_number_top
        MOV     R0, R5
        MOV     R1, #10
        BL      .std_mod10
        ADD     R0, R0, #0x30   ; 0x30 == '0'
        STRB    R0, [R6, -R7]!
        MOV     R0, R5
        MOV     R1, #10
        BL      .std_div10
        MOVS    R5, R0
        BNE     .print_number_top
        
        ; Zeropad if needed
        LDR     R2, =.print_number_buffer_end
        SUB     R0, R2, R6
        SUBS    R0, R0, #1
        SUBS    R0, R0, R9
.print_number_pad_top
        BGE     .print_number_pad_bottom
        MOV     R3, #0x30
        STRB    R3, [R6, -R7]!
        ADDS    R0, R0, #1
        B       .print_number_pad_top
.print_number_pad_bottom
        MOVS    R8, R8
        MOVNE   R8, #0x2D
        STRBNE  R8, [R6, -R7]!
        MOV     R0, R6
        BL      .std_print
        LDMFD   SP!, {R5,R6,R7,R8,R9,PC}
        
.print_number_buffer
        FILL    24
.print_number_buffer_end

        ALIGN
.std_mod10  
        CMP     R0, #16
        BCC     .mod10_end
        MOV     R1, R0, LSR #4
        AND     R0, R0, #0xf
        TST     R1, #1
        ADDNE   R1, R1, #5
        ADD     R0, R0, R1
        B       .std_mod10
.mod10_end
        CMP     R0, #10
        SUBCS   R0, R0, #10
        MOV     PC, LR
        
        ALIGN
.std_div10
        STMFD   SP!, {R5,LR}
        LSRS    R1, R0, #31
        RSBNE   R0, R0, #0
        MOVNE   R4, #1
        MOVEQ   R4, #0
        LSR     R1, R0, #1
        MOV     R0, #0
        MOV     R5, #0x2000_0000        ; R5: current bit of R0
        
        MOV     R3, #0xA000_0000        ; 2^29 * 5
.div10_top
        CMP     R3, #2
        BEQ     .div10_end
        CMP     R1, R3
        ORRCS   R0, R0, R5
        SUBCS   R1, R1, R3
        LSR     R5, R5, #1
        LSR     R3, R3, #1
        B       .div10_top
.div10_end
        MOVS    R4, R4
        RSBNE   R0, R0, #0
        LDMFD   SP!, {R5,PC}

`;