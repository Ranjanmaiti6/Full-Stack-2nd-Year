const EventEmitter = require("events");

const studentActivity = new EventEmitter();

studentActivity.on("login", (name) => {
    console.log(name + " logged successfully");
});

studentActivity.on("assignment", (name) => {
    console.log(name + "'s Assignment submitted");
});

studentActivity.on("logout", (name) => {
    console.log(name + " is Logged out");
});

studentActivity.on("exit", (name) => {
    console.log(name + " is Exiting application");
});

name = "Ranjan"
studentActivity.emit("login" , name);
studentActivity.emit("assignment" , name);
studentActivity.emit("logout" , name);
studentActivity.emit("exit" , name);
