const { read } = require("fs");

const fs = require("fs").promises;

async function writeFile() {
    try{
        await fs.writeFile("promise.txt" , "Hello Students!");
        console.log("File created and data written successfully!")
    }
    catch(error){
        console.log("Error: " , error);
    }
}
writeFile();

//read file
async function readFile() {
    try{
        const data = await fs.readFile("promise.txt" , "utf8")
        console.log("File Content: ")
        console.log(data);
    }
    catch{
        console.log("Error: " , error);
    }
}
readFile();

//Update FIle
async function updateFile() {
    try{
        await fs.appendFile('promise.txt' , "This is updated file of Promise")
        console.log("File Updated Succfully ")
        console.log(data);
    }
    catch{
        console.log("Error: " , error);
    }
}
updateFile();