let fs = require('fs');

let filter = (dir, ext, callback) => {

    
    fs.readdir(dir, (err, data) => {
        if(err) 
            return callback(err);

        let result = [];
        let regex = "^(.*\." + ext + ")$";
        
        for(let i of data){
            if(i.match(regex)){
                result.push(i);
            }
        }
       return callback(null, result);
    });
}

module.exports = filter;