const Strain = require('./models/Strain');

module.exports = [
  {
    method: 'GET',
    path: '/api',
    handler: function (request, reply) {
      reply({'message': 'Welcome to our API!'});
    }
  },
  {
    method: 'GET',
    path: '/api/strains',
    handler: function (request, reply) {
      Strain.find(function(error, strains) {
        if (error) {
          console.error(error);
        }
        reply(strains);
      });
    }
  },
  {
    method: 'GET',
    path: '/api/strains/{strainName}',
    handler: function(request, reply) {
      Strain.find({ "strainName": new RegExp('^'+ request.params.strainName +'$', "i") }, (err, strain) => {
        if (err) {
          console.log(err);
        } else {
          reply(strain);
        }
      });
    }
  }
];