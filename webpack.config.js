const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //개발용 development, 서비스용 production
  entry: { index: "./src/index.js", about: "./src/about.js" }, // 시작점, 해당 key가 output의 name으로 들어감
  output: {
    //컴파일한 코드의 최종 저장위치
    path: path.resolve(__dirname + "/dist"),
    filename: "[name].bundle.js",
  },
  module: {
    //loader 설정
    rules: [
      //babel 설정
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: 11,
                  },
                  useBuiltIns: "usage",
                  corejs: { version: 3, proposals: true },
                },
              ],
            ],
            plugins: [],
          },
        },
      },
      //css, scss 설정
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    //html파일에 자동적으로 번들된 js파일 적용해줌
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
  devtool: "eval",
};
