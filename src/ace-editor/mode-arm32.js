//var oop = require("../lib/oop");
//var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

export class AssemblyARM32HighlightRules extends window.ace.acequire('ace/mode/text_highlight_rules').TextHighlightRules {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    constructor() {
        super();
        this.$rules = {
            start: [
                {
                    token: 'keyword.control.assembly',
                    // should cover every instruction listed in https://pages.cs.wisc.edu/~markhill/restricted/arm_isa_quick_reference.pdf
                    regex: '\\b(?:nop|(?:add|adc|sub|sbc|rsb|rsc|mov|mvn|and|eor|orr|bic|asl|lsl|asr|lsr|ror|mul|mla)s?(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?|(tst|teq|cmp|cmn|b|bl|bx|stop|break|mov|swi)(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?|ldrb?(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?b?|strb?(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?|(?:ldm|stm)(?:ia|ib|da|db|fd|ed|fa|ea)(?:eq|ne|cs|hs|cc|lo|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al)?)\\b',
                    caseInsensitive: true
                },
                {
                    token: 'variable.parameter.register.assembly',
                    //          first half are actual registers until spsr, where it changes to fields and flexible operands
                    regex: '\\b(?:r0|r1|r2|r3|r4|r5|r6|r7|r8|r9|r10|r11|r12|r13|r14|r15|fp|ip|sp|lr|pc|cpsr|spsr|c|f|s|x)\\b',
                    caseInsensitive: true
                },
                {
                    token: 'constant.character.hexadecimal.assembly',
                    regex: '#-?0x[A-F0-9_]+',
                    caseInsensitive: true
                },
                {
                    token: 'constant.character.binary.assembly',
                    regex: '#-?0b[01_]+',
                    caseInsensitive: true
                },
                {
                    token: 'constant.character.decimal.assembly',
                    regex: '#-?[0-9_]+'
                },
                {
                    token: 'string.assembly',
                    regex: /'([^\\']|\\.)*'/
                },
                {
                    token: 'string.assembly',
                    regex: /"([^\\"]|\\.)*"/
                },
                {
                    token: 'support.function.directive.assembly',
                    //regex: '(?:\\.section|\\.global|\\.text|\\.asciz|\\.asciiz|\\.ascii|\\.align|\\.byte|\\.end|\\.data|\\.equ|\\.extern|\\.include)'
                    regex: '(?:dcd|dcb|equ|fill|align)'
                },
                {
                    token: 'entity.name.function.assembly',
                    regex: '\\.[A-Z0-9_]+',
                    caseInsensitive: true
                },
                {
                    token: 'comment.assembly',
                    regex: ';.*$'
                },
            ]
        };

        this.normalizeRules();
    }
}

export default class AssemblyARM32Mode extends window.ace.acequire('ace/mode/text').Mode {
    constructor() {
        super();
        this.HighlightRules = AssemblyARM32HighlightRules;
    }
}
