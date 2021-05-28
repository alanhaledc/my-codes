/*
 * @Author: Hale
 * @Description: generator 的使用
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

function* Hello() {
  yield 100;
  yield (function () {
    return 200;
  })();
  yield 300;
}

const h = Hello();
console.log(typeof h); // object

// for (let item of h) {     // 是 Hello() 不是 h，同一个迭代器只能迭代一次
for (let item of Hello()) {
  console.log(item); // 100 200 300 -> value 值
}

//
console.log(h.next()); // { value: 100, done: false }
console.log(h.next()); // { value: 200, done: false }
console.log(h.next()); // { value: 300, done: false }
console.log(h.next()); // { value: undefined, done: true }
