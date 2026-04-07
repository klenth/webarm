const fs = require('node:fs');

function wordsMatch(a, b) {
    return (a & 0xffff_ffff) === (b & 0xffff_ffff);
}

export function returnValues(value1, value2 = null) {
    const returnValueString = values =>
        values[1] !== null ? '' + values[0]
            : `[${values[0]}, ${values[1]}]`;

    return (_, state) => {
        const actualValue2 = (value2 === null) ? null : state.registers.get(1);
        const match = wordsMatch(value1, state.registers.get(0))
            && (value2 === null || wordsMatch(value2, actualValue2));
        if (!match)
            console.error(`Return value mismatch: expected ${returnValueString(value1, value2)}, got ${returnValueString(state.registers.get(1), actualValue2)}`);
        return match;
    };
}

export function output(text, options = null) {
    let expectedBytes;

    if (typeof(text) === 'string') {
        if (options?.caseInsensitive)
            text = text.toLowerCase();
        if (options?.trimWhitespace)
            text = text.trim();
        expectedBytes = new Array(text.length).fill(0);
        for (let i = 0; i < text.length; ++i)
            expectedBytes[i] = text.charCodeAt(i);
    }

    // is b a space or a \n?
    const isWhitespaceByte = b => (b === 0xA) || (b === 0x20);

    const lowercaseByte = b => (b >= 65 && b <= 90) ? b | 0b10_0000 : b;

    const bytesToString = bytes => {
        let s = '';
        for (let i = 0; i < bytes.length; ++i) {
            if (b === 0x09 || b === 0x0A || b >= 0x20 && b <= 0x7e)
                s += String.fromCharCode(b);
            else
                s += '•';
        }
        return s;
    };

    return (_, state) => {
        let actualBytes = state.stdout.bytes;
        if (options?.trimWhitespace) {
            let startWhitespaceBytes, endWhitespaceBytes;
            for (startWhitespaceBytes = 0; startWhitespaceBytes < actualBytes.length && isWhitespaceByte(actualBytes[startWhitespaceBytes]); ++startWhitespaceBytes)
                ; // do nothing
            for (endWhitespaceBytes = 0; endWhitespaceBytes < actualBytes.length && isWhitespaceByte(actualBytes[endWhitespaceBytes]); ++endWhitespaceBytes)
                ; // do nothing

            if (startWhitespaceBytes || endWhitespaceBytes)
                actualBytes = actualBytes.slice(startWhitespaceBytes, actualBytes.length - endWhitespaceBytes);
        }

        if (options?.caseInsensitive) {
            for (let i = 0; i < actualBytes.length; ++i)
                actualBytes[i] = lowercaseByte(actualBytes[i]);
        }

        let match = true;
        if (actualBytes.length !== expectedBytes.length)
            match = false;
        for (let i = 0; i < actualBytes.length; ++i)
            if (actualBytes[i] !== expectedBytes[i])
                match = false;

        if (!match) {
            console.error(`Output mismatch:`);
            console.error(`  Expected =>`);
            console.error(bytesToString(expectedBytes));
            console.error(`---`);
            console.error(`  Actual =>`);
            console.error(bytesToString(actualBytes));
        }

        return match;
    };
}

class TestCase {
    constructor(functionArguments, description, options, predicate = null, parent = null) {
        this.arguments = ;
        this.description = parent ? parent.description : description;
        this.options = parent ? parent.options : options;
        this.predicate = predicate;
        this.parent = parent;
    }

    expect(description, predicate) {
        return new TestCase(null, null, predicate, this);
    }

    check(state) {
        const parentResult = this.parent ? this.parent.check(state) : true;
        const thisResult = (this.predicate) ? this.predicate(this, state) : true;
        if (!thisResult) {
            console.error(`Predicate failed: ${this.description}`);

        }
    }
}

function testFunction(filename, functionName, )