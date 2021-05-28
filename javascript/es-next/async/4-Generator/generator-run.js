/*
 * @Author: Hale
 * @Description: 手动实现 run
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const fs = require("fs");
const thunkify = require("thunkify");
const path = require("path");

const readFileThunk = thunkify(fs.readFile);

const gen = function* () {
  const r1 = yield readFileThunk(
    path.resolve(__dirname, "data1.json"),
    "utf-8"
  );
  console.log(r1);
  const r2 = yield readFileThunk(
    path.resolve(__dirname, "data2.json"),
    "utf-8"
  );
  console.log(r2);
};

const g = gen();

g.next().value((err, data1) => {
  g.next(data1).value((err, data2) => {
    g.next(data2);
  });
});
