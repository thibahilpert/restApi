const router = require("express").Router();

router.use('/users', require('../models/user/userRoutes'));
router.use("/authenticate", require("../models/auth/authRoutes"));

module.exports = router;