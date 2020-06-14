const crud = require("../crud");
const userModel = require("./userModel");
const { serializeToken } = require("../../utils");

let userCrud = crud(userModel);

userCrud.post = async (req, res, next) => {
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

module.exports = userCrud;