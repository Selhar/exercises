import config from './config';
import express from 'express';
import api_router from './api';
import sass from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();

server.use(sass({
    src: path.join(__dirname + '/views/sass'),
    dest: path.join(__dirname + '/public'),
}));
server.set('view engine', 'ejs');

server.get('/', (request, response) => {
    serverRender()
        .then(content => {
            response.render('index', {
                content 
            });
        })
        .catch(console.error);
});

server.use('/api', api_router);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Listening on port: ', config.port);
});