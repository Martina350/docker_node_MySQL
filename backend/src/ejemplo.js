function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log("Starting...");
    await wait(5000);
    console.log("Finish...");
}

demo();
console.log("End of file");