export default class CircularArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.buffer = Array(capacity).fill(null);
        this.head = this.tail = 0;
    }

    get length() {
        return this._idx(this.tail - this.head);
    }

    peek() {
        return this.buffer[this._idx(this.tail - 1)];
    }

    pop() {
        if (this.head === this.tail)
            throw new Error('Empty array!');
        this.tail = this._idx(this.tail - 1);
        return this.buffer[this.tail];
    }

    push(value) {
        if (this._idx(this.tail + 1) === this.head)
            this.head = this._idx(this.head + 1);
        this.buffer[this.tail] = value;
        this.tail = this._idx(this.tail + 1);
    }

    get(index) {
        if (index < 0 || index >= this.length)
            throw new Error(`Index ${index} out of range`);
        return this.buffer[this._idx(this.head + index)];
    }

    _idx(i) {
        return (this.capacity + i) % this.capacity;
    }
}