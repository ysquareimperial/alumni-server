'use strict';

var _passportJwt = require('passport-jwt');

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = _models2.default.User;

var opts = {};
opts.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

// create jwt strategy
module.exports = function (passport) {
  passport.use(new _passportJwt.Strategy(opts, function (jwt_payload, done) {
    _models2.default.sequelize.query('SELECT * from  signup WHERE id = "' + jwt_payload.id + '"').then(function (user) {
      if (user[0].length) {
        return done(null, user);
      }
      return done(null, false);
    }).catch(function (err) {
      return console.log(err);
    });
    // Users.findAll({ where: { id: jwt_payload.id } })
    //   .then(user => {
    //     if (user.length) {
    //       return done(null, user);
    //     }
    //     return done(null, false);
    //   })
    //   .catch(err => console.log(err));
  }));
};