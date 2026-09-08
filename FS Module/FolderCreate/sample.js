const fs = require('fs');
fs.mkdirSync('sample Folder');
console.log("Folder created succfully")

//delete
fs.rmSync('sample Folder');
console.log("Folder Delete Succfully")