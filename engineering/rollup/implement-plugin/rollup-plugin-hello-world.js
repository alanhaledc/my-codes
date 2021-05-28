// rollup-plugin-hello-world
// 把字符串 "hello world" 替换成 "I am iron man"

const extname = require("path").extname;
const { createFilter } = require("@rollup/pluginutils");
const MagicString = require("magic-string");

const newStr = "I am iron man";

module.exports = function helloWorld(options = {}) {
  const filter = createFilter(options.include, options.exclude);
  const sourcemap = options.sourcemap === true;

  return {
    name: "helloWorld",

    transform(code, id) {
      if (!filter(id) || extname(id) !== ".js") return;

      let codeStr = `${code}`;
      const magic = new MagicString(codeStr);

      if (sourcemap) {
        codeStr = codeStr.replace(/hello\sworld/gi, (match, offset) => {
          const start = offset;
          const end = offset + match.length;
          magic.overwrite(start, end, newStr);
          return newStr;
        });
      }

      const resultCode = magic.toString();
      let resultMap = false;

      if (sourcemap) {
        resultMap = magic.generateMap({
          hires: true,
        });
      }

      return {
        code: resultCode,
        map: resultMap,
      };
    },
  };
};
