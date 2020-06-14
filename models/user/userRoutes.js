const usersRouter = require("express").Router();

const userController = require('./userController');

usersRouter
  .get("/", userController.getAll)
  // .get("/:id", userController.getItem)
  // .post("/", userController.post)
  // .put("/:id", userController.put)
  // .delete("/:id", userController.remove);

module.exports = usersRouter;
