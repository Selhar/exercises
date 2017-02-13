let http = require('http');
let url = process.argv[2];

http.get(url, (request) => {
    let output = "";
    
    request.setEncoding("utf8");
    request.on("data", (data) => {
        output += data;
    });

    request.on("end", () => {
        console.log(output.length + "\n" + output);
    });
});