/*
 * @Author: Hale
 * @Description: reduce-to-filter 使用 reduce 实现 filter
 * acc的初始值为 []；当 item 满足 fn 的条件时，返回值为 acc 和连接起来的 item；不满足的话，返回 acc
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/18
 */

const filter = (fn, arr) =>
  arr.reduce((acc, item) => (fn(item) ? acc.concat([item]) : acc), []);

// 在原型链上实现，需要设置返回值
Array.prototype.selfFilter = function (fn) {
  let res = [];
  this.reduce((acc, item, index, arr) => {
    if (fn(item)) {
      res.push(item);
    }
  }, []);
  return res;
};

// test
console.log([1, 2, 3, 4, 5].filter((x) => x > 2));
console.log([1, 2, 3, 4, 5].selfFilter((x) => x > 2));
console.log(filter((x) => x > 2, [1, 2, 3, 4, 5]));
