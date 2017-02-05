let fs = require('fs');
let path = process.argv[2];
let extension = process.argv[3];
let regex = "^(.*\." + extension + ")$";

fs.readdir(path, (err, data) => {
    for(let i of data){
        if(i.match(regex)){
            console.log(i);
        }
    }
});