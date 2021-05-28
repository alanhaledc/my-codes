/*
 * @Author: Hale
 * @Description: 手动实现 new
 * @Date: 2019/03/30
 * @LastEditTime: 2020/06/01
 */

// 方法一，无参数传入
function selfNew() {
  const obj = new Object(); // 通过 new 创建一个对象
  const fn = [].shift.call(arguments); // 从参数中获取到 fn
  obj.__proto__ = fn.prototype; // 重新设置对象的隐式原型，执行 fn 的原型对象
  const result = fn.apply(obj, arguments); // 通过 obj 来调用 fn, 获取构造函数的返回值
  return result instanceof Object ? result : obj; // 返回值。如果返回值不是一个 obj，返回原对象，否则返回这个值
}

// 方法二，传入参数 setPrototypeOf
function selfNew1(fn, ...args) {
  const obj = {}; // 通过字面量创建一个对象
  Object.setPrototypeOf(obj, fn.prototype); // 重新设置对象的隐式原型，执行 fn 的原型对象
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

// 方法三，传入参数 Object.create
function selfNew2(fn, ...args) {
  const obj = Object.create(fn.prototype); // 直接使用 Object.create 创建原型的方法创建对象
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

// test
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log("hi");
  };
}

const p = selfNew(Person, "hale", 30);
const p1 = selfNew1(Person, "hale", 30);
const p2 = selfNew2(Person, "hale", 30);
console.log(p);
console.log(p1);
console.log(p2);
p.sayHi();
p1.sayHi();
p2.sayHi();
