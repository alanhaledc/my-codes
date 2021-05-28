/*
 * @Author: Hale
 * @Description: Q.all 和 Q.any 的使用
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const fs = require("fs");
const path = require("path");
const Q = require("q");

const r1 = Q.nfcall(
  fs.readFile,
  path.resolve(__dirname, "data1.json"),
  "utf-8"
);
const r2 = Q.nfcall(
  fs.readFile,
  path.resolve(__dirname, "data2.json"),
  "utf-8"
);

// Q.all = Promise.all
Q.all([r1, r2])
  .then((arr) => {
    console.log("Q.all", arr[0]);
    console.log("Q.all", arr[1]);
  })
  .catch((err) => {
    console.log(err);
  });

// Q.any = Promise.race
Q.any([r1, r2])
  .then((data) => {
    console.log("Q.any", data);
  })
  .catch((err) => {
    console.log(err);
  });
