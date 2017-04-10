const env = require('env2')('./config.env');

module.exports = {
  method: 'GET',
  path: '/login',
  handler: function (request, reply) {
    reply.redirect('https://github.com/login/oauth/authorize?client_id=' + process.env.CLIENT_ID);
  }
}
