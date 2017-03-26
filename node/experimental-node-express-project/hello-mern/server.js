const express = require ('express');
let server = express();

server.get('/', (req, res) => {
    res.send(':3');
});

server.listen(3000);