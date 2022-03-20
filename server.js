const app = require("./app");

const port = process.env.PORT || 2700;
const https = require("https");
const fs = require("fs");

app.listen(port, () => {
  console.log('running on port:', port)
});
