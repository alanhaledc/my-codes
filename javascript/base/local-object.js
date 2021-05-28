/*
 * @Author: Hale
 * @Description: 本地对象 -> 使用 new 生成对象，不用使用 new 生成原始值
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/04
 */

const func = new Function("x", "return x + 123");
const obj = new Object("obj");
const date = new Date(1516845553555);
const arr = new Array(5);
const bool = Boolean(1);
const string = String(123);
const symbol = Symbol("sym");

console.log(func);
console.log(obj);
console.log(date);
console.log(arr);
console.log(bool); // true
console.log(string); // '123'
console.log(symbol);
