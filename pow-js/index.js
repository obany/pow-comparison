const { LocalPowProvider } = require("@iota/iota.js");

async function main() {
    const numWorkers = 1;
    const targetScore = 1000.0;
    let size = 1024;

    console.log("js - workers", numWorkers, ", target score ", targetScore);

    for (let i = 0; i < 10; i++) {
        await powRun(size, targetScore, numWorkers)
        size += 1024
    }
}

async function powRun(size, targetScore, numWorkers) {
    const payload = new Uint8Array(size);

    const start = Date.now();

    const powProvider = new LocalPowProvider();
    const nonce = await powProvider.pow(payload, targetScore);

    const end = Date.now();

    console.log(`size ${size}, duration ${((end - start) / 1000).toFixed(2)}s, nonce ${nonce}`);
}

main().catch((err) => console.error(err));
