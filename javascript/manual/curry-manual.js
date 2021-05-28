/*
 * @Author: Hale
 * @Description: 手动实现 curry 函数
 * @Date: 2019/03/30
 * @LastEditTime: 2019/10/18
 */

const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

// test
const n1 = curry(Math.pow)(2)(10);
const n2 = curry(Math.min, 3)(10)(50)(2);

console.log(n1); // 1024
console.log(n2); // 2

const add = (a, b, c, d, e) => a + b + c + d + e;

const addCurry = curry(add);

console.log(addCurry(1, 2)(3)(4, 5)); // 15
