const usersRouter = require("express").Router();

const userController = require("./userController");
const { encryptPasswordMiddleware } = require("../../middleware/encryptMiddleware");
const { userVerification } = require("../../middleware/userVerification");

usersRouter
  .get('/', userController.getAll)
  .get('/:id', userController.getItem)
  .post('/', userVerification, encryptPasswordMiddleware, userController.post)
  .put('/:id', userController.put)
  .delete('/:id', userController.remove);

module.exports = usersRouter;
