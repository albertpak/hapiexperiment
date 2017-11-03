const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  port: 7777,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/phone',
  handler: function(request, reply) {
    const data = {
      brand: 'Apple',
      model: 'iPhone',
      version: 'X',
    };
    return reply(JSON.stringify(data));
  },
});

server.route({
  method: 'GET',
  path: '/user/{name}',
  handler: function(request, reply) {
    return reply(`Hello, ${request.params}`);
  },
});

server.start(err => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
