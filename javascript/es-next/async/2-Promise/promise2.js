/*
 * @Author: Hale
 * @Description: 使用 readFilePromise 函数
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const readFilePromise = require("./export");
const path = require("path");

const fullFileName = path.resolve(__dirname, "data1.json");
const result = readFilePromise(fullFileName);

result.then((data) => console.log(data));
