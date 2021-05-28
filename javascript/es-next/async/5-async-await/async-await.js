/*
 * @Author: Hale
 * @Description:
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */
const fs = require("fs");
const path = require("path");
const Q = require("q");
const co = require("co");

const readFilePromise = Q.denodeify(fs.readFile); // 生成 Promise

// 使用 ES6 的 Generator 函数，需要借助 co 来执行
co(function* () {
  const r1 = yield readFilePromise(path.resolve(__dirname, "data1.json"));
  console.log("generator", r1.toString());
  const r2 = yield readFilePromise(path.resolve(__dirname, "data2.json"));
  console.log("generator", r2.toString());
});

// 使用 ES2017 的 Async 函数，不需要借助第三方库执行，而是自动执行
const readFileAsync = async function () {
  const f1 = await readFilePromise(path.resolve(__dirname, "data1.json"));
  const f2 = await readFilePromise(path.resolve(__dirname, "data2.json"));
  console.log("async await", f1.toString());
  console.log("async await", f2.toString());

  return "done"; // 返回一个 Promise
};

const result = readFileAsync();

result.then((data) => {
  console.log(data); // done
});
