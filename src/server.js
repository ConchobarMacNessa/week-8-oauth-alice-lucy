'use strict'

// requirements
const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');
const Inert = require('inert');
const HTTPS = require('hapi-require-https');
const fs = require('fs');
//

server.connection({port: 3000, host: 'localhost',
  tls : {
    key: fs.readFileSync(Path.join(__dirname, "../keys/key.pem")),
    cert: fs.readFileSync(Path.join(__dirname, "../keys/cert.pem"))
  }
});

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
