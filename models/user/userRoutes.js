const usersRouter = require("express").Router();

const userController = require("./userController");
const { encryptPasswordMiddleware } = require("../../middleware/encryptMiddleware");
const { userVerificationMiddleware } = require("../../middleware/userVerificationMiddleware");
const { authToken } = require("../../middleware/authTokenMiddleware");

usersRouter
  .get('/', userController.getAll)
  .get('/token', authToken, userController.getAllToken)
  .get('/:id', userController.getItem)
  .post('/', userVerificationMiddleware, encryptPasswordMiddleware, userController.post)
  .put('/:id', userController.put)
  .delete('/:id', userController.remove);

module.exports = usersRouter;
