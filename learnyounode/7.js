let http = require('http');
let url = process.argv[2];

http.get(url, (request) =>{
    request.setEncoding("utf8");
    
    request.on("error", (error) => {
        console.log(error);
    });

    request.on("data", (data) => {
        console.log(data);
    });
});