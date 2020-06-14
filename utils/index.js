const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const isPasswordValid = (password, hash) => {
  return bcrypt.compare(password, hash);
};

const serializeToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 86400,
  });
};

module.exports = {
  encryptPassword,
  isPasswordValid,
  serializeToken
};