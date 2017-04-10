'use strict'

// const startFile = require('./start.js');
const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');
const Inert = require('inert');
// const route = require('./routes.js');

server.connection({port: 3000, host: 'localhost'});

server.register(Inert, (err) => {
  if (err) {
    throw err;
  }
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('public/index.html');
    }
  });
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
