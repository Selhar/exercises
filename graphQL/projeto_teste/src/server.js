import koa from 'koa';
import koa_router from 'koa-router';
import koa_body from 'koa-bodyparser';
import {graphqlKoa, graphiqlKoa} from 'graphql-server-koa';

//import schema from './data/schema';
import './db';

const server = new koa();
const router = new koa_router();
const PORT = 3000;

server.use(koa_body());

//router.post('/graphql', graphqlKoa({schema: schema}));
//router.get('/graphql', graphqlKoa({scheme: schema}));

router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'}));

server.use(router.routes());
server.use(router.allowedMethods());

server.listen(PORT, () => {
	console.log("Running server on port "+PORT);
});