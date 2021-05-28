/*
 * @Author: Hale
 * @Description: then 传递数据 -> Promise 的链式语法
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

const readFilePromise = require("./export");
const path = require("path");

const fullFileName = path.resolve(__dirname, "data1.json");
const result = readFilePromise(fullFileName);

result
  .then((data) => {
    console.log(data);
    return JSON.parse(data).a; // 传递数据
    // return Promise.resolve(JSON.parse(data).a)
  })
  .then((x) => console.log(x));
