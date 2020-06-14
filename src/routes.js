const router = require("express").Router();

router.use("/users", require("../models/user/userRoutes"));

module.exports = router;