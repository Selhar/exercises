/* 
    Author: Selhar
    Date: 2017
    Contact: selhar@protonmail.com
    License: GPL

    TODO: 
    default password;
    truncating text;
*/

const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const api_root = '/';

mongoose.connect('mongodb://localhost:27017/taller');

server.use('/public', express.static(root + '/public'));
server.use(body_parser());
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));

server.get(api_root, (request, response) => {
	response.render(root + '/views/login.ejs');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
