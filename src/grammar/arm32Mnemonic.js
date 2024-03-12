const _MNEMONIC_PATTERN =
    /^((?<scond>(?<scond_opc>AND|EOR|SUB|RSB|ADD|ADC|SBC|RSC|ORR|MOV|BIC|MVN|MUL|MLA|LSL|ASL|LSR|ASR|ROR)(?<scond_scond>S?(EQ|NE|CS|CC|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL)?|(EQ|NE|CS|CC|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL)?S?))|(?<condonly>(?<condonly_opc>CMP|CMN|TST|TEQ|B|BL|BX|STOP|BREAK|SWI)(?<condonly_cond>EQ|NE|CS|CC|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL)?)|(?<ldrstr>(?<ldrstr_opc>(LDR|STR)B?)(?<ldrstr_cond>EQ|NE|CS|CC|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL)?)|(?<ldmstm>(?<ldmstm_opc>(LDM|STM)(FA|FD|EA|ED|IA|IB|DA|DB))(?<ldmstm_cond>EQ|NE|CS|CC|MI|PL|VS|VC|HI|LS|GE|LT|GT|LE|AL)?)|(?<nop>NOP))$/i;

export function parseMnemonic(mnemonic) {
    const match = _MNEMONIC_PATTERN.exec(mnemonic);
    if (!match)
        throw new Error(`Invalid instruction mnemonic: ${mnemonic}`);

    if (match.groups['scond']) {
        const scond = match.groups['scond_scond'].toUpperCase();
        const hasCond = scond.length >= 2;
        const hasS = (scond.length === 1 || scond.length === 3);
        const s = hasS ? 'S' : '';
        let cond;
        if (hasS && hasCond && scond[0] === 'S')
            cond = scond.slice(1);
        else if (hasS && hasCond)
            cond = scond.slice(0, 2);
        else if (hasCond)
            cond = scond;
        else
            cond = '';
        return {
            OpCode: match.groups['scond_opc'],
            S: s,
            Cond: cond
        };
    } else if (match.groups['condonly']) {
        return {
            OpCode: match.groups['condonly_opc'],
            S: '',
            Cond: match.groups['condonly_cond'] || ''
        };
    } else if (match.groups['ldrstr']) {
        return {
            OpCode: match.groups['ldrstr_opc'],
            S: '',
            Cond: match.groups['ldrstr_cond'] || ''
        };
    } else if (match.groups['ldmstm']) {
        return {
            OpCode: match.groups['ldmstm_opc'],
            S: '',
            Cond: match.groups['ldmstm_cond'] || ''
        };
    } else if (match.groups['nop']) {
        return {
            OpCode: match.groups['nop'],
            S: '',
            Cond: ''
        };
    } else
        throw new Error('Unexpected state in parsing instruction mnemonic');
}
