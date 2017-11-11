const Hapi = require('hapi');
const server = new Hapi.Server(+process.env.PORT, '0.0.0.0');
const db = require('./database').db;
const routes = require('./routes');

server.connection({
  port: 7777,
  host: 'localhost',
});

server.route(routes);

server.start(err => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
