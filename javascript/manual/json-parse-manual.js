/*
 * @Author: Hale
 * @Description: 手动实现 JSON.parse()
 * @Date: 2019/03/30
 * @LastEditTime: 2020/03/31
 */

// 方法一 new Function
const jsonParse = (jsonStr) => new Function("return " + jsonStr)(); // 利用了 new Function 的特性 string => object

// 方法二 eval
const jsonParse2 = (jsonStr) => eval("(" + jsonStr + ")");

// test
const jsonStr = '{ "age": 20, "name": "jack" }';
const newStr1 = JSON.parse(jsonStr);
const newStr2 = jsonParse(jsonStr);
const newStr3 = jsonParse2(jsonStr);
console.log(newStr1);
console.log(newStr2);
console.log(newStr3);
