'use strict'

// requirements
const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');
const Inert = require('inert');
const fs = require('fs');
const Routes = require('./routes');
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
  server.route(Routes);
});

module.exports = server; 
