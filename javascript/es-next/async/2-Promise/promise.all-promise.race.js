/*
 * @Author: Hale
 * @Description: Promise.all 和 Promise.race 用法
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

const readFilePromise = require("./export");
const path = require("path");

const fullFileName1 = path.resolve(__dirname, "data1.json");
const fullFileName2 = path.resolve(__dirname, "data2.json");
const result1 = readFilePromise(fullFileName1);
const result2 = readFilePromise(fullFileName2);

// Promise.all 接收一个或多个 promise 对象的数组，全部加载完成后再读取文件
// 有错误会抛出错误
Promise.all([result1, result2]).then((arr) => {
  console.log("Promise.all", arr[0]);
  console.log("Promise.all", arr[1]);
});

// Promise.race 接收一个或多个 promise 对象的数组，先读取第一个加载完的文件
// 如果其中有加载失败，会抛出第一个出现的错误（前提是该错误比正常加载文件先加载完）
Promise.race([result1, result2]).then((data) => {
  console.log("Promise.race:", data);
});
