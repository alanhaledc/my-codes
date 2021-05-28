// 替换源文件的 Hale 为配置中设置的 name
// loader: 'replaceLoaderAsync',
// options: {
//  name: 'Deng'
// }
module.exports = function (source) {
  const result = source.replace("Hale", this.query.name);
  const callback = this.async(); // 异步调用接口

  setTimeout(() => {
    callback(null, result);
  }, 5000);
};
