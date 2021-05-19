const express = require("express");
const path = require('path');
// Constants
const PORT = process.env.PORT || 8181;
const HOST = "0.0.0.0";
// App
const app = express();
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
let server = app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
module.exports = server;
