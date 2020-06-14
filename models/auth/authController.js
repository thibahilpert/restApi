const userModel = require("../user/userModel");
const { isPasswordValid, serializeToken } = require("../../utils");

let authCrud = {};

authCrud.authenticate = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select('+password');

  if(!user) {
    return res.status(400).send({ error: 'User not founded' });
  }

  if (!await isPasswordValid(password, user.password)) {
    return res.status(400).send({ error: 'Invalid password' });
  }

  user.password = undefined;

  const token = serializeToken({
    id: user.id,
    role: user.role,
  });

  res.send({ user, token });
};

module.exports = authCrud;
