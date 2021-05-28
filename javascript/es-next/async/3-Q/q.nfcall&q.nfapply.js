/*
 * @Author: Hale
 * @Description: Q.nfcall 和 Q.nfapply 的使用，类似与函数的 call 和 apply 传参的形式不同
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const path = require("path");
const fs = require("fs");
const Q = require("q");
const fullFileName = path.resolve(__dirname, "./data1.json");

// const result = Q.nfcall(fs.readFile, fullFileName, 'utf-8');
const result = Q.nfapply(fs.readFile, [fullFileName, "utf-8"]);

result
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.stack);
  });
