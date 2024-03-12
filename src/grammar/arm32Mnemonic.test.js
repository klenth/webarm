import { parseMnemonic } from './arm32Mnemonic.js';

describe('parseMnemonic', () => {
    const pM = parseMnemonic;
    const d = { S: '', Cond: '' };

    test('Opcodes that can have S and Cond', () => {
        expect(pM('ADD')).toStrictEqual({ OpCode: 'ADD', S: '', Cond: '' });
        expect(pM('SubS')).toStrictEqual({ OpCode: 'Sub', S: 'S', Cond: '' });
        expect(pM('MULEQ')).toStrictEqual({ OpCode: 'MUL', S: '', Cond: 'EQ' });
        expect(pM('MLASEQ')).toStrictEqual({ OpCode: 'MLA', S: 'S', Cond: 'EQ' });
        expect(pM('orreqs')).toStrictEqual({ OpCode: 'orr', S: 'S', Cond: 'EQ' });
    });

    test('Opcodes that can have Cond but not S', () => {
        expect(pM('CMP')).toStrictEqual({ OpCode: 'CMP', S: '', Cond: '' });
        expect(pM('BLT')).toStrictEqual({ OpCode: 'B', S: '', Cond: 'LT' });
        expect(pM('BLLT')).toStrictEqual({ OpCode: 'BL', S: '', Cond: 'LT' });
        expect(pM('STOp')).toStrictEqual({ OpCode: 'STOp', S: '', Cond: '' });
        expect(pM('SWIAL')).toStrictEqual({ OpCode: 'SWI', S: '', Cond: 'AL' });
    });

    test('LDR/STR', () => {
        expect(pM('LDR')).toStrictEqual({ ...d, OpCode: 'LDR' });
        expect(pM('LDRB')).toStrictEqual({ ...d, OpCode: 'LDRB' });
        expect(pM('STRNE')).toStrictEqual({ ...d, OpCode: 'STR', Cond: 'NE' });
        expect(pM('STRBCC')).toStrictEqual({ ...d, OpCode: 'STRB', Cond: 'CC' });
    });

    //FA|FD|EA|ED|IA|IB|DA|DB
    test('LDM/STM', () => {
        expect(() => pM('LDM')).toThrowError(Error);
        expect(pM('LDMDA')).toStrictEqual({ ...d, OpCode: 'LDMDA' });
        expect(pM('STMIACS')).toStrictEqual({ ...d, OpCode: 'STMIA', Cond: 'CS' });
    });

    test('NOP', () => {
        expect(pM('NOP')).toStrictEqual({ ...d, OpCode: 'NOP' });
        expect(() => pM('NOPS')).toThrowError(Error);
        expect(() => pM('nopeq')).toThrowError(Error);
    });
});
