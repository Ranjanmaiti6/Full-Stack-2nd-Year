//create or write property of file system
 
const fs = require('fs');
fs.writeFileSync('secAstudent.txt' , 'This is the expriment no 2' , 'utf8');

console.log('file is written succesfully');