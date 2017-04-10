const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const server = new Hapi.Server();

server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: 'index.html'
  }
})

module.exports = route
