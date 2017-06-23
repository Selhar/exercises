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
const ThreadModel = require('./models/Thread');
const ObjectId = require('mongodb').ObjectID;

mongoose.connect('mongodb://localhost:27017/taller');

server.use('/public', express.static(root + '/public'));
server.use(body_parser());
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));

/*
The freecodecamp test suite require the server response to be on JSON
I can't return JSON to render a page, thus 2 server responses were created
They're pretty much similar, but tests should never be done this way. (the official solution is also similar)

This curriculum is still in beta so this might be an oversight
either way, to test the project just uncomment below.

Also, routes are slightly different because you can't DELETE through http forms


        **  Uncomment these for testing  **

server.get(api_root, thread_controller.fetch); 
server.get(api_root+':thread_id', thread_controller.fetchById);
server.post(api_root, thread_controller.create); 
server.delete(api_root, thread_controller.remove);
server.put(api_root, thread_controller.report);

server.post(api_root+':thread', replies_controller.create); 
server.put(api_root+':thread_id', replies_controller.report);
server.delete(api_root+':thread_id', replies_controller.remove);

*/

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
