/*
 * @Author: Hale
 * @Description: co 和 thunkify 的使用
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */
const fs = require("fs");
const path = require("path");
const thunkify = require("thunkify");
const co = require("co");
const readFileThunk = thunkify(fs.readFile);

const gen = function* () {
  const r1 = yield readFileThunk(path.resolve(__dirname, "data1.json"));
  console.log(r1.toString());
  const r2 = yield readFileThunk(path.resolve(__dirname, "data2.json"));
  console.log(r2.toString());
};

// 使用第三方库 co 来执行 generator
const c = co(gen);
c.then(() => {
  console.log("结束");
});
