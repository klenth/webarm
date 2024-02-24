import SimulatorState from './SimulatorState';
import SimulatorMemory from './SimulatorMemory';
import Bitfield from '../bits/Bitfield';

export class InstructionFormatError extends Error {}

const INSTRUCTION_DECODERS = [];

const registerInstructionDecoder = function(decoder) {
    INSTRUCTION_DECODERS.push(decoder);
}

const registerOpcodeDecoder = function(bitfield, value, decoder) {
    registerInstructionDecoder(
        code => (bitfield.get(code) === value) ? decoder(code) : null
    );
}

export function decode(code) {
    let instr;
    for (let decoder of INSTRUCTION_DECODERS) {
        instr = decoder(code);
        if (instr)
            return instr;
    }
    return null;
}

function decodeFieldValues(word, format) {
    const fields = format.fields;
    const fieldValues = {};
    for (let name of Object.keys(fields))
        fieldValues[name] = fields[name].getAndCheck(word);

    return fieldValues;
}

export class Instruction {
    constructor(fieldValues) {
        this.fieldValues = { ...fieldValues };
        this.validate();
    }

    format() {
        throw "format() not overridden";
        return null;
    }

    validate() {
        throw "validate() not overridden";
    }

    mnemonic() {
        return "mnemonic() not overridden";
        return null;
    }

    get(fieldName) {
        return this.fieldValues[fieldName];
    }

    encode() {
        console.debug(this.format);
        const fields = this.format().fields;
        let word = 0;
        for (let name of Object.keys(fields))
            word = fields[name].checkAndSet(word, this.get(name));
        return word;
    }
}

export class InstructionFormat {
    constructor(fields) {
        this.fields = fields;

        let bits = 0;
        console.debug('Checking for field overlap:');
        for (let name of Object.keys(this.fields)) {
            const field = this.fields[name];
            if (field.get(bits) !== 0)
                throw new InstructionFormatError('Instruction format has field overlap! [' + name + ']');
            bits = field.setOnes(bits);
            console.debug('After ' + name + ', bits = ' + ((bits >>> 0).toString(2)));
        }

        if ((bits ^ 0xffff_ffff) !== 0)
            throw new InstructionFormatError('Instruction format does not cover all 32 bits!');
    }
}

export class IntegerTestCompareRegisterInstruction extends Instruction {
    format() {
        return new InstructionFormat({
            cond: new Bitfield(4, 28),
            '[bits27-23]': new Bitfield(5, 23).asConstant(0b0_0010),
            opc: new Bitfield(2, 21),
            '[bit20]': new Bitfield(1, 20).asConstant(1),
            Rn: new Bitfield(4, 16),
            '[Rd]': new Bitfield(4, 12).asConstant(0),
            imm5: new Bitfield(5, 7),
            stype: new Bitfield(2, 5),
            '[bit4]': new Bitfield(1, 4).asConstant(0),
            Rm: new Bitfield(4, 0)
        });
    }

    validate() {
        if (this.get('cond') === 0b1111)
            throw new InstructionFormatError('cond=1111');
    }

    mnemonic() {
        const opc = this.get('opc');
        if (opc === 0b00)
            return 'TST';
        else if (opc === 0b01)
            return 'TEQ';
        else if (opc === 0b10)
            return 'CMP';
        else
            return 'CMN';
    }
}

export class IntegerTestCompareImmediateInstruction extends Instruction {
    format() {
        return new InstructionFormat({
            cond: new Bitfield(4, 28),
            '[bits27-23]': new Bitfield(5, 23).asConstant(0b0_0110),
            opc: new Bitfield(2, 21),
            '[bit20]': new Bitfield(1, 20).asConstant(1),
            Rn: new Bitfield(4, 16),
            '[bits15-12': new Bitfield(4, 12).asConstant(0),
            imm12: new Bitfield(12, 0),
        });
    }

    validate() {
        if (this.get('cond') === 0b1111)
            throw new InstructionFormatError('cond=1111');
    }

    mnemonic() {
        const opc = this.get('opc');
        if (opc === 0b00)
            return 'TST';
        else if (opc === 0b01)
            return 'TEQ';
        else if (opc === 0b10)
            return 'CMP';
        else
            return 'CMN';
    }
}

export class IntegerDataProcessingRegisterInstruction extends Instruction {
    format() {
        return new InstructionFormat({
            cond: new Bitfield(4, 28),
            '[bits27-24]': new Bitfield(4, 24).asConstant(0b0000),
            opc: new Bitfield(3, 21),
            S: new Bitfield(1, 20),
            Rn: new Bitfield(4, 16),
            Rd: new Bitfield(4, 12),
            imm5: new Bitfield(5, 7),
            stype: new Bitfield(2, 5),
            '[bit4]': new Bitfield(1, 4).asConstant(0b0),
            Rm: new Bitfield(4, 0),
        });
    }

    validate() {
        if (this.get('cond') === 0b1111)
            throw new InstructionFormatError('cond=1111');
    }

    mnemonic() {
        const opc = this.get('opc');
        let m = null;
        if (opc === 0b000)
            m = 'AND';
        else if (opc === 0b001)
            m = 'EOR';
        else if (opc === 0b010)
            m = 'SUB';
        else if (opc === 0b111)
            m = 'RSB';
        else if (opc === 0b100)
            m = 'ADD';
        else if (opc === 0b101)
            m = 'ADC';
        else if (opc === 0b110)
            m = 'SBC';
        else if (opc === 0b111)
            m = 'RSC';

        if (this.get('S'))
            m += 'S';

        return m;
    }
}

/*[0b000, 0b001, 0b010, 0b111, 0b100, 0b101, 0b110, 0b111].forEach(value =>
    registerOpcodeDecoder(new Bitfield(7, 21), value, IntegerDataProcessingRegisterInstruction)
);*/

export class IntegerDataProcessingImmediateInstruction extends Instruction {
    static _format = new InstructionFormat({
        cond: new Bitfield(4, 28),
        '[bits27-24]': new Bitfield(4, 24).asConstant(0b0010),
        opc: new Bitfield(3, 21),
        S: new Bitfield(1, 20),
        Rn: new Bitfield(4, 16),
        Rd: new Bitfield(4, 12),
        imm12: new Bitfield(12, 0),
    });

    format() {
        return IntegerDataProcessingImmediateInstruction._format;
    }

    validate() {
        if (this.get('cond') === 0b1111)
            throw new InstructionFormatError('cond=1111');
    }

    mnemonic() {
        const opc = this.get('opc');
        let m = null;
        if (opc === 0b000)
            m = 'AND';
        else if (opc === 0b001)
            m = 'EOR';
        else if (opc === 0b010)
            m = 'SUB';
        else if (opc === 0b111)
            m = 'RSB';
        else if (opc === 0b100)
            m = 'ADD';
        else if (opc === 0b101)
            m = 'ADC';
        else if (opc === 0b110)
            m = 'SBC';
        else if (opc === 0b111)
            m = 'RSC';

        if (this.get('S'))
            m += 'S';

        return m;
    }

    static fromCode(word) {
        console.log('fromCode(): word = 0x' + word.toString(0x10));
        const fieldValues = decodeFieldValues(word, IntegerDataProcessingImmediateInstruction._format);
        console.log(fieldValues);
        return new IntegerDataProcessingImmediateInstruction(fieldValues);
    }
}

/*[0b000, 0b001, 0b010, 0b111, 0b100, 0b101, 0b110, 0b111].forEach(value =>
    registerOpcodeDecoder(new Bitfield(7, 21), 0b0010_000 | value, IntegerDataProcessingImmediateInstruction)
);*/

export class DataProcessingInstruction extends Instruction {
    static _format = new InstructionFormat({
        Cond: new Bitfield(4, 28),
        '[bits27-26]': new Bitfield(2, 26).asConstant(0b00),
        I: new Bitfield(1, 25),
        OpCode: new Bitfield(4, 21),
        S: new Bitfield(1, 20),
        Rn: new Bitfield(4, 16),
        Rd: new Bitfield(4, 12),
        Operand2: new Bitfield(12, 0)
    });

    static _opcodes = {
        0b0000: 'AND',
        0b0001: 'EOR',
        0b0010: 'SUB',
        0b0011: 'RSB',
        0b0100: 'ADD',
        0b0101: 'ADC',
        0b0110: 'SBC',
        0b0111: 'RSC',
        0b1000: 'TST',
        0b1001: 'TEQ',
        0b1010: 'CMP',
        0b1011: 'CMN',
        0b1100: 'ORR',
        0b1101: 'MOV',
        0b1110: 'BIC',
        0b1111: 'MVN'
    }

    format() {
        return DataProcessingInstruction._format;
    }

    validate() {
        if (this.get('Cond') === 0b1111)
            throw new InstructionFormatError('cond=1111');
    }

    mnemonic() {
        let m = DataProcessingInstruction._opcodes[this.get('OpCode')];
        if (this.get('S'))
            m += 'S';

        return m;
    }

    static fromCode(word) {
        console.log("DataProcessingInstruction.fromCode()");
        const fieldValues = decodeFieldValues(word, DataProcessingInstruction._format);
        return new DataProcessingInstruction(fieldValues);
    }
}

registerInstructionDecoder(code => {
    console.debug("Opcode " + new Bitfield(4, 21).get(code).toString(2));
    return null;
});

Object.keys(DataProcessingInstruction._opcodes).forEach(opcode => {
        console.debug("Registering decoder for opcode " + (+opcode).toString(2));
        registerOpcodeDecoder(new Bitfield(4, 21), +opcode, DataProcessingInstruction.fromCode);
    }
);