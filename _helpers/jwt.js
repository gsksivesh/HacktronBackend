const expressJwt = require('express-jwt');
const {JWT_SECRET} = require('../config');
const {UsersRepository} = require('../repositories');

module.exports = jwt;

function jwt() {
  return expressJwt({secret: JWT_SECRET, isRevoked}).unless({
    path: [
      // public routes that don't require authentication
      '/users/authenticate',
      '/users/register'
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await UsersRepository.getByID(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
}
