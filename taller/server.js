const express = require('express')
const next = require('next')
const paths = require('./utils/paths');
const dev = process.env.NODE_ENV !== 'production'
const server = next({ dev })
const handle = server.getrequestuestHandler()

server.prepare().then( () => {
	const server = express()

	server.get(paths.home, (request, response) => {
		return server.render(request, response, paths.home, request.query)
	})

	server.get(paths.nova_conta, (request, response) => {
		return server.render(request, response, paths.nova_conta, request.query)
	})

	server.get('*', (request, response) => {
		return handle(request, response)
	})

	server.listen(3000, (error) => {
		if (error) 
			throw error

		console.log('> Ready on http://localhost:3000')
	})
})
