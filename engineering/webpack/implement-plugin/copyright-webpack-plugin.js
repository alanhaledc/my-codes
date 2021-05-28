class CopyrightWebpackPlugin {
  // constructor() {
  //   console.log('插件被使用了')
  // }

  apply(compiler) {
    compiler.hooks.compile.tap("CopyrightWebpackPlugin", (compilation) => {
      console.log("compile hook");
    });

    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, cb) => {
        console.log("emit hook");
        // 生成一个 copyright.md 文件
        // 文件内容是 written by Hale
        compilation.assets["copyright.md"] = {
          source: function () {
            return "written by Hale";
          },
          size: function () {
            return 15;
          },
        };
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
