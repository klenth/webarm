import Instruction from './Instruction';

function assemble(instructions) {
    const words = [];
    for (let instr of instructions) {
        words.push(instr.encode());
    }

    const buffer = new ArrayBuffer(4 * words.length);
    const view = new DataView(buffer);
    for (let i = 0; i < instructions.length; ++i)
        view.setInt32(4 * i, words[i], false /* big-endian */);

    return buffer;
}
