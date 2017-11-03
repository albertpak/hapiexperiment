const Hapi = require('hapi');

const server = new Hapi.Server(+process.env.PORT, '0.0.0.0');
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

server.register(require('inert'), err => {
  if (err) {
    throw err;
  }
  server.route({
    method: 'GET',
    path: '/about',
    handler: function(request, reply) {
      return reply.file('./public/about.html');
    },
  });
});

server.start(err => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
