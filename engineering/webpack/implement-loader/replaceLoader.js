// 替换源文件的 Deng 为 World
// 注意输出的是一个普通函数
// 必须返回一个字符串类型或者`Buffer`类型的值
module.exports = function (source) {
  return source.replace("Deng", "World");
};
