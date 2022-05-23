const path = require("path");
const { uglify } = require("rollup-plugin-uglify");
const config = require("./rollup.config");

config.plugins = [...config.plugins, uglify()];

module.exports = config;
