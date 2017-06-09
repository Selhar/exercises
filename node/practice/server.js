import config from './config';
import express from 'express';
import api_router from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
    response.render('index');
});

server.use('/api', api_router);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Listening on port: ', config.port);
})