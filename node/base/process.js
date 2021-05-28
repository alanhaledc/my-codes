/*
 * @Author: Hale
 * @Description: process 进程
 * @Date: 2019/03/01
 * @LastEditTime: 2020/02/21
 */

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function (val, index, array) {
  console.log(index + ": " + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);

console.log("当前目录：" + process.cwd());

console.log("当前版本：" + process.version);

// 获取当前内存使用情况
console.log(process.memoryUsage());

// 获取当前环境
process.env.NODE_ENV = "production";
console.log(process.env.NODE_ENV);
