const express = require("express");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const config = require("./webpack.dev.js");
const compiler = webpack(config);
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(webpackDevMiddleware(compiler));
  app.use(
    webpackHotMiddleware(compiler, {
      log: false,
      heartbeat: 2000,
    })
  );
}

// config middleware
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("*", (req, res) => {
  res.send("index.html");
});

app.listen(8080);
