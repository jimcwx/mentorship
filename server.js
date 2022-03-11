const app = require("./app");

const port = process.env.PORT || 2700;
const http = require("http");
const fs = require("fs");

app.listen(port, () => {
  console.log('running on port')
});
