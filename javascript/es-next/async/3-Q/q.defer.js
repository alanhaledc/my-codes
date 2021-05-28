/*
 * @Author: Hale
 * @Description: Q.defer 的使用，转换成一个 Promise 函数
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

const fs = require("fs");
const path = require("path");
const Q = require("q");

function readFile(fileName) {
  const defer = Q.defer();
  fs.readFile(fileName, (err, data) => {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(data.toString());
    }
  });
  return defer.promise;
}

readFile(path.resolve(__dirname, "data1.json"))
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.stack);
  });
