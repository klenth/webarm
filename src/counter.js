let n = 0;

function count() {
    return n++;
}

const exports = {
    count: count,
}

export default exports;
