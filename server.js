const app = require("./app");

const port = process.env.PORT || 2600;
const https = require("https");
const fs = require("fs");

https.createServer(app).listen(port);
