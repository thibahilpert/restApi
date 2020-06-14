const { encryptPassword } = require("../utils");

const encryptPasswordMiddleware = async (req, res, next) => {
  if (req.body && !!req.body.password) {
    req.body.password = await encryptPassword(req.body.password);
  }
  next();
};

module.exports.encryptPasswordMiddleware = encryptPasswordMiddleware;