function main() {
    function sendToApp(message) {
        // eslint-disable-next-line no-restricted-globals
        self.postMessage(message);
    }

    function run(params) {
        console.log('Running!');
        console.log(params.code);
        // eslint-disable-next-line no-restricted-globals
        self.setTimeout(() => {
            sendToApp({
                status: 'complete',
                params: {
                },
            });
        }, 2000);
    }

    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('message', e => {
        if (e.data.command === 'run') {
            run(e.data.params);
        }
    });
}

export default main;
