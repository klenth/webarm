import SimulatorState from './SimulatorState';
import SimulatorMemory from './SimulatorMemory';
import Bitfield from '../bits/Bitfield';

class InstructionFormatError extends Error {}

class Instruction {
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

    static fromCode(word) {
        const fields = this.format().fields;
        const fieldValues = {};
        for (let name of Object.keys(fields))
            fieldValues[name] = fields[name].getAndCheck(word);

        return new Instruction(fieldValues);
    }

    static fromFields(fieldValues) {
        return new Instruction(fieldValues);
    }

    encode() {
        const fields = this.format().fields;
        let word = 0;
        for (let name of Object.keys(fields))
            word = fields[name].checkAndSet(word, this.get(name));
        return word;
    }
}

class InstructionFormat {
    constructor(fields) {
        this.fields = fields;

        let bits = 0;
        for (let name of Object.keys(this.fields)) {
            const field = this.fields[name];
            if (field.get(bits) !== 0)
                throw new InstructionFormatError('Instruction format has field overlap!');
            bits = field.setOnes(bits);
        }

        if (bits !== 0xffff_ffff)
            throw new InstructionFormatError('Instruction format does not cover all 32 bits!');
    }
}

class IntegerTestCompareRegisterInstruction extends Instruction {
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

class IntegerTestCompareImmediateInstruction extends Instruction {
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

class IntegerDataProcessingImmediateInstruction extends Instruction {
    format() {
        return new InstructionFormat({
            cond: new Bitfield(4, 28),
            '[bits27-24]': new Bitfield(4, 24).asConstant(0b0010),
            opc: new Bitfield(3, 21),
            S: new Bitfield(1, 20),
            Rn: new Bitfield(4, 16),
            Rd: new Bitfield(4, 12),
            imm12: new Bitfield(12, 0),
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

const exports = {
    Instruction: Instruction,
    IntegerTestCompareRegisterInstruction: IntegerTestCompareRegisterInstruction,
    IntegerTestCompareImmediateInstruction: IntegerTestCompareImmediateInstruction,
    IntegerDataProcessingRegisterInstruction: IntegerDataProcessingRegisterInstruction,
    IntegerDataProcessingImmediateInstruction: IntegerDataProcessingImmediateInstruction,
};

export default exports;
