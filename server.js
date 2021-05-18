const express = require("express");

// Constants
const PORT = process.env.PORT || 8181;
const HOST = "0.0.0.0";

// App
const app = express();
//app.get("/", (req, res) => res.send(
//"This is my Caltech PGP Capstone Project / Jose Pagan, 703-957-5737 -- Hello World, Omar was here!!!"));
app.get("/", (req, res) => {
  res.send("This is my Caltech PGP Capstone Project"
  "Jose Pagan, 703-957-5737"
  "Hello World, Jose was here!!!"));

let server = app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

module.exports = server;
