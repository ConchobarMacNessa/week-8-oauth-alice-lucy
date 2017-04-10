const test = require('tape');
const shot = require('shot');
const routes = require('../src/routes');
const server = require('../src/server.js');

test('test home routes', (t) => {
  server.inject({method: 'GET', url: '/'}, (res) => {
  console.log(res.statusCode);
  const expectedStatusCode = 200;
  t.equal(res.statusCode, expectedStatusCode, "Status code should be 200");
  t.end();
  })
});
