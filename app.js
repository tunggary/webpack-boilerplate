const express = require("express");
const path = require("path");
const app = express();

// config middleware
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("*", (req, res) => {
  res.send("index.html");
});
app.listen(8080);
