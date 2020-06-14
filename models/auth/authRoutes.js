const authRouter = require("express").Router();

const authController = require("./authController");

authRouter.post("/", authController.authenticate);

module.exports = authRouter;
