let fs = require('fs');
let result = fs.readFileSync(process.argv[2]).toString().split("\n").length-1;
console.log(result);