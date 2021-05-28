/*
 * @Author: Hale
 * @Description: 手动实现 run
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const fs = require("fs");
const path = require("path");
const thunkify = require("thunkify");

const readFileThunk = thunkify(fs.readFile);

const gen = function* () {
  const r1 = yield readFileThunk(path.resolve(__dirname, "data1.json"), "utf8");
  console.log(r1);
  const r2 = yield readFileThunk(path.resolve(__dirname, "data2.json"), "utf8");
  console.log(r2);
};

// 自动流程管理的函数
function run(generator) {
  const g = generator();

  function next(err, data) {
    const result = g.next(data);
    if (result.done) {
      return;
    }
    result.value(next);
  }

  next();
}

run(gen);
