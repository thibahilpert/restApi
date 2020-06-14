const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const encryptPasswordMiddleware = async (req, res, next) => {
  if (req.body && !!req.body.password) {
    req.body.password = await encryptPassword(req.body.password);
  }
  next();
};

module.exports.encryptPasswordMiddleware = encryptPasswordMiddleware;