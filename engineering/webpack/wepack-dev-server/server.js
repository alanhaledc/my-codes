const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

// 这里只处理 entry 选项是 string 和 array 的情况
if (typeof webpackConfig.entry === "string") {
  const entry = webpackConfig.entry;
  webpackConfig.entry = [entry];
}

webpackConfig.entry.push("webpack-hot-middleware/client"); // 引入 client

const app = express();

const compiler = webpack(webpackConfig); // 生成 webpack 编译器

// 使用中间件，都需要传入 webpack 编译器作为参数
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
  })
);
app.use(webpackHotMiddleware(compiler));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log("Server running at http://127.0.0.1:3000");
});
