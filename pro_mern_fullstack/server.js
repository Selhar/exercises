const express = require('express');
const server = express();

server.use(express.static('static'));

server.listen(3000, () => console.log('...'));