let output = process.argv.splice(2).reduce((a, b) => Number(a) + Number(b));
console.log(output);