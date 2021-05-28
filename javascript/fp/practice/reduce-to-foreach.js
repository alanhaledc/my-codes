/*
 * @Author: Hale
 * @Description: reduce to forEach 使用 reduce 实现 forEach
 * acc 初始值为 []; 每次遍历传入参数，返回 fn 函数的返回值
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/18
 */

const forEach = (fn, arr) =>
  arr.reduce((acc, item, index, arr) => fn(item, index, arr), []);

// 在原型链上实现
Array.prototype.selfForEach = function (fn) {
  this.reduce((acc, item, index, arr) => fn(item, index, arr), []);
};

let arr = [];

const double = (x) => {
  const y = x * 2;
  arr.push(y);
};

// test
// ;[1, 2, 3, 4, 5].forEach(double)
[1, 2, 3, 4, 5].selfForEach(double);
// forEach(double, [1, 2, 3, 4, 5])
console.log(arr);
