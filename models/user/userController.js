const crud = require("../crud");
const userModel = require('./userModel');

let userCrud = crud(userModel);

module.exports = userCrud;