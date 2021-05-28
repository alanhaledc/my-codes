/*
 * @Author: Hale
 * @Description: co 和 Q 的使用
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */
const fs = require("fs");
const path = require("path");
const co = require("co");
const Q = require("q");

// 生成 Promise 对象
const readFilePromise = Q.denodeify(fs.readFile);

const gen = function* () {
  const r1 = yield readFilePromise(path.resolve(__dirname, "data1.json"));
  console.log(r1.toString());
  const r2 = yield readFilePromise(path.resolve(__dirname, "data2.json"));
  console.log(r2.toString());
};

// 使用第三方库 co 来执行 generator
const c = co(gen);
c.then((data) => {
  console.log("结束");
});
