/*
 * @Author: Hale
 * @Description: Q 是一个第三方 Promise 库 -> ES6 之前流行
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

const fs = require("fs");
const Q = require("q");
const path = require("path");

// Q.denodeify 可以一键将 fs.readFile 这种有回调函数作为参数的异步操作封装成一个 Promise 函数，非常方便
const readFilePromise = Q.denodeify(fs.readFile);

readFilePromise(path.resolve(__dirname, "./data1.json"), "utf-8").then((data) =>
  console.log(data)
);
