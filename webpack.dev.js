const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
var LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: ["**/node_modules", "./app.js"],
  },
  plugins: [new LiveReloadPlugin()],
});
