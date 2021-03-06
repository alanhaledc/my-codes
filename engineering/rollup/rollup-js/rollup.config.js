const path = require("path");
const { babel } = require("@rollup/plugin-babel");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

const babelOptions = {
  presets: ["@babel/preset-env"],
};

// 多个文件输出多个配置 -> 配置组
module.exports = [
  {
    input: resolveFile("src/index.js"),
    output: {
      file: resolveFile("dist/index.js"),
      format: "umd",
    },
    plugins: [babel(babelOptions)],
  },
  {
    input: resolveFile("src/lib/index.js"),
    output: {
      file: resolveFile("dist/lib.js"),
      format: "cjs",
    },
    plugins: [babel(babelOptions)],
  },
];
