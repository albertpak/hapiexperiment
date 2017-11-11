const Mongoose = require('mongoose');
// user: w33dh4p1
// psw: Cd7QSy4v6OKxw9ANz99N

const db = Mongoose
  .connect('mongodb://w33dh4p1:Cd7QSy4v6OKxw9ANz99N@ds255265.mlab.com:55265/weestrains',
    { useMongoClient: true }
  )
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => {
    console.log(err);
  });

exports.db = db;