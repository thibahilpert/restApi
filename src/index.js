require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/', routes);

app.listen(process.env.PORT);