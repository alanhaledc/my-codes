/*
 * @Author: Hale
 * @Description: Q.delay 延迟
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const fs = require("fs");
const path = require("path");
const Q = require("q");

const result = Q.nfcall(
  fs.readFile,
  path.resolve(__dirname, "data1.json"),
  "utf-8"
);

// Q.delay 延迟
result
  .delay(5000)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.stack);
  });
