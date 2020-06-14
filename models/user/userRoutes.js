const usersRouter = require("express").Router();

const userController = require('./userController');
const { encryptPasswordMiddleware } = require('../../middleware/encryptMiddleware');

usersRouter
  .get("/", userController.getAll)
  .get("/:id", userController.getItem)
  .post("/", encryptPasswordMiddleware, userController.post)
  .put("/:id", userController.put)
  .delete("/:id", userController.remove);

module.exports = usersRouter;
