
const bodyParser = require("body-parser");
const express = require("express");
const xmlparser = require("express-xml-bodyparser");

const app = express();
app.use(xmlparser());
// Set json as response.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require("./users/routes"));

module.exports = app;
