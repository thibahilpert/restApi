require("dotenv").config();
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");

const { jwtMiddleware } = require("../middleware/authTokenMiddleware");

const app = express();

passport.use("jwt", jwtMiddleware);
app.use(passport.initialize());

const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/', routes);

app.listen(process.env.PORT);