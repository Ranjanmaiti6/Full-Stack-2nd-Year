console.log("Program Started");

setTimeout(() => {
    console.log("1. setTimeout executed");
}, 5000);

setImmediate(() => {
    console.log("2. setImmediate executed");
});

process.nextTick(() => {
    console.log("3. process.nextTick executed");
});

console.log("Program Ended");