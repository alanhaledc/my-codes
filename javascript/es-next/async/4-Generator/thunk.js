/*
 * @Author: Hale
 * @Description: 手动实现 thunk
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */
const fs = require("fs");
const path = require("path");

const thunk = function (fileName, codeType) {
  return function (callback) {
    fs.readFile(fileName, codeType, callback); // 返回 callback
  };
};

const readFileThunk = thunk(path.resolve(__dirname, "data1.json"), "utf8");

readFileThunk((err, data) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(data);
  }
});
