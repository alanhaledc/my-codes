/*
 * @Author: Hale
 * @Description: generator 的使用
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

function* G1() {
  yield "a";
  yield* G2(); // 跳转到 G2
  yield "b";
}

function* G2() {
  yield "x";
  yield "y";
}

for (let item of G1()) {
  console.log(item); // a x y b
}

let g = G1();
console.log(g.next()); // { value: 'a', done: false }
console.log(g.next()); // { value: 'x', done: false }
console.log(g.next()); // { value: 'y', done: false }
console.log(g.next()); // { value: 'b', done: false }
console.log(g.next()); // { value: undefined, done: true }
