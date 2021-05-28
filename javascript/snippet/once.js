/*
 * @Author: Hale
 * @Description: 只执行一次
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/18
 */

const once = (fn) => {
  let called = false;
  return function (...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};

// test
const fn = once((x) => x);
console.log(fn(1));
console.log(fn(1));
console.log(fn(1));
