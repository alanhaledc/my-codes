/*
 * @Author: Hale
 * @Description: reduce to map 使用 reduce 实现 map
 * acc 初始值为 []，每次遍历使用 acc 链接 fn 函数的返回值
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/18
 */

const map = (fn, arr) =>
  arr.reduce((acc, item, index, arr) => acc.concat(fn(item, index, arr)), []);

// 在原型链上实现，需要设置返回值
Array.prototype.selfMap = function (fn) {
  const res = [];
  this.reduce((acc, item, index, arr) => {
    res.push(fn(item, index, arr));
  }, []);
  return res;
};

// test
console.log([1, 2, 3, 4, 5].map((x) => x * 2));
console.log([1, 2, 3, 4, 5].selfMap((x) => x * 2));
console.log(map((x) => x * 2, [1, 2, 3, 4, 5]));
