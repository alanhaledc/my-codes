const path = require("path");
const { uglify } = require("rollup-plugin-uglify");
const config = require("./rollup.config");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

config.plugins = [...config.plugins, uglify()];

module.exports = config;
