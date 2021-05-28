/*
 * @Author: Hale
 * @Description: 把 fs.readFile 封装成一个 Promise 函数
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const fs = require("fs");

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
}

module.exports = readFilePromise;
