export class IOBuffer {

    constructor(buf) {
        this.bytes = buf?.bytes? [...buf.bytes] : [];
        this.mark = buf?.mark || 0;
    }

    write(byte) {
        this.bytes.push(byte);
    }

    read() {
        if (this.mark < this.bytes.length)
            return this.bytes[this.mark++];
        else
            return null;
    }

    flush() {
        const flushedBytes = this.bytes.slice(this.mark);
        this.mark = this.bytes.length;
        return flushedBytes;
    }

    static reconstruct(o) {
        return new IOBuffer(o);
    }
}
