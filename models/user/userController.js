const crud = require("../crud");
const userModel = require("./userModel");
const { serializeToken } = require("../../utils");

let userCrud = crud(userModel);

userCrud.post = async (req, res) => {
  try {
    const item = await userModel.create(req.body);

    const token = serializeToken({
        id: item.id,
        role: item.role,
    });

    item.password = undefined;

    res.json({
        item,
        token
    });
  } catch (err) {
    next(err);
  }
};

userCrud.getAllToken = async (req, res, next) => {
  try {
    const items = await userModel.find();
    res.json(items);
    // res.send({ user: req.userId });
  } catch (err) {
    next(err);
  }
};

module.exports = userCrud;