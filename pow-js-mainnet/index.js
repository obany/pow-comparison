const { composeAPI } = require("@iota/core");

async function main() {
    const numWorkers = 1;
    let size = 1024;

    console.log("js - workers", numWorkers);

    for (let i = 0; i < 10; i++) {
        await run(size, numWorkers)
        size += 1024
    }
}

async function run(size, numWorkers) {
    const iota = composeAPI({
        provider: "https://nodes.iota.org:443"
    });

    const trytes = await iota.prepareTransfers("9".repeat(81), [
        {
            address: "A".repeat(81),
            value: 0,
            message: "A".repeat(size),
            tag: "TEST"
        }
    ]);

    const start = Date.now();
    await iota.sendTrytes(trytes, 3, 14);
    const end = Date.now();

    console.log(`size ${size}, duration ${((end - start) / 1000).toFixed(2)}s`);
}

main()
    .then(() => console.log("Done"))
    .catch((err) => console.error(err));