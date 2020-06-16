//Autenticando na mão
const jwt = require("jsonwebtoken");

const authToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).send({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if(!parts.lenght === 2){
    return res.status(401).send({ error: 'Token error' });
  }

  const [ scheme, token ] = parts;

  if(!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformatted' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if(err){
      return res.status(401).send({ error: 'Invalid Token' });
    }

    req.userId = decoded.id;

    return next();
  });
}

module.exports.authToken = authToken;

//Usando passport
const passport = require("passport");
const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");

const jwtOptions = {
  secretOrKey: process.env.SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtMiddleware = async (payload, next) => {
  try {
    return next(null, payload);
  } catch (err) {
    console.error(err);
    return next(err, false);
  }
};

module.exports.jwtMiddleware = new JwtStrategy(jwtOptions, jwtMiddleware);
module.exports.jwtStrategy = passport.authenticate('jwt', { session: false });