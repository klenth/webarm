class WorkerBuilder extends Worker {
    constructor(worker) {
        super(workerCode(worker));
    }
}

function workerCode(worker) {
    const code = worker.toString();
    const blob = new Blob([`(${code})()`]);
    return URL.createObjectURL(blob);
}

export default WorkerBuilder;
