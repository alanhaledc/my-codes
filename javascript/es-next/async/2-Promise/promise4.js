/*
 * @Author: Hale
 * @Description: then 传递错误和 catch 捕获错误
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const readFilePromise = require("./export");
const path = require("path");

const fullFileName = path.resolve(__dirname, "data1.json");
const result = readFilePromise(fullFileName);

result
  .then((data) => {
    console.log(data);
    // return new Error('error') // 传递错误
    return Promise.reject("error123456");
  })
  .then((data) => console.log("data:", data)) // 打印
  .catch((err) => console.log(err || err.message)); // 异常捕获 捕获 reject 值
