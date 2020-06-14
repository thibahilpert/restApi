const crud = require("../crud");
const userModel = require('./userModel');

let userCrud = crud(userModel);

// userCrud.getAll = async (req, res, next) => {
//   try {
//     const items = await userCrud.find();
//     res.json(items);
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = userCrud;