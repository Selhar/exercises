const express = require('express');
const server = express();

server.get('/', (request, response) => {
    response.send('<h1>:3</h1>');
});

server.listen(3000);