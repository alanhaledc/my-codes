/*
 * @Author: Hale
 * @Description: 手动实现 instanceof
 * @Date: 2019/01/11
 * @LastEditTime: 2020/05/31
 */

function selfInstanceof(left, right) {
  const proto = left.__proto__; // 隐式原型
  const prototype = right.prototype; // 原型对象
  if (proto == null) return false;
  if (typeof left !== "object" && typeof left !== "function") return false;
  return proto === prototype;
}

// test
const Person = function (name) {
  this.name = name;
};

const p1 = new Person("hale");
console.log(p1);

console.log(p1 instanceof Person);
console.log(selfInstanceof(p1, Person));
