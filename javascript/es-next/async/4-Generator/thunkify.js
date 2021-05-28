/*
 * @Author: Hale
 * @Description: thunkify 库的使用
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */
const fs = require("fs");
const path = require("path");
const thunkify = require("thunkify");

const thunk = thunkify(fs.readFile);
const readFileThunk = thunk(path.resolve(__dirname, "data1.json"), "utf-8");
readFileThunk((err, data) => {
  console.log(data);
});
