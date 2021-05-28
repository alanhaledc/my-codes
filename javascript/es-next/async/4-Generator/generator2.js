/*
 * @Author: Hale
 * @Description: generator 的使用
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

function* G() {
  const a = yield 100;
  console.log("a", a);
  const b = yield 200;
  console.log("b", b);
  const c = yield 300;
  console.log("c", c);
}

var g = G();
console.log(g.next()); // { value: 100, done: false }
console.log(g.next("newA"));
console.log(g.next("newB"));
console.log(g.next("newC"));
