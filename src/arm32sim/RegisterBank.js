export class RegisterBank {
    constructor(values) {
        if (values instanceof RegisterBank)
            this.values = [ ...values.values ];
        else {
            this.values = Array(16).fill(0);
            if (values)
                for (let i = 0;  i < 16; ++i)
                    this.values[i] = ((values[i] || 0) & 0xffff_ffff) >>> 0;
        }
    }

    get(index) {
        index >>>= 0;
        if (index > 15)
            throw new Error(`Invalid register index ${index}`);
        return this.values[index];
    }

    set(index, value) {
        index >>>= 0;
        value = (value & 0xffff_ffff) >>> 0;
        this.values[index] = value;
        return value;
    }

    static reconstruct(o) {
        return new RegisterBank(o.values);
    }
}