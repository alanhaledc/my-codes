/*
 * @Author: Hale
 * @Description: then 切换数据
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const readFilePromise = require("./export");
const path = require("path");

const fullFileName1 = path.resolve(__dirname, "data1.json");
const fullFileName2 = path.resolve(__dirname, "data2.json");
const result1 = readFilePromise(fullFileName1);
const result2 = readFilePromise(fullFileName2);

result1
  .then((data) => {
    console.log("data1:", data);
    return result2; // 切换文件
  })
  .then((data) => console.log("data2:", data)); // 打印 dada2.json
