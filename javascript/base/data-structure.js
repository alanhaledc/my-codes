/*
 * @Author: Hale
 * @Description: 数据结构和判断
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/04
 */

// js 数据结构共七种 number string boolean undefined null symbol object
// typeof 返回的值有七种 number string boolean undefined object function symbol -> 原始类型
console.log(typeof 1); // 'number'
console.log(typeof "1"); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof ((x) => x * 2)); // 'function'
console.log(typeof Symbol()); // 'symbol'

// Object.prototype.toString -> 所有类型
const toString = Object.prototype.toString;
console.log(toString.call("")); // [object String]
console.log(toString.call(1)); // [object Number]
console.log(toString.call(true)); // [object Boolean]
console.log(toString.call([])); // [object Array]
console.log(toString.call({})); // [object Object]
console.log(toString.call((x) => x)); // [object Function]
console.log(toString.call(Symbol())); // [object Symbol]
console.log(toString.call(undefined)); // [object Undefined]
console.log(toString.call(null)); // [object Null]
console.log(toString.call(new Date())); // [object Date]
console.log(toString.call(new RegExp())); // [object RegExp]
console.log(toString.call(new Error())); // [object Error]
console.log(toString.call(global)); // [object global]
// console.log(toString.call(window)) // [object Window]  // 在浏览器 console
// console.log(toString.call(document)) // [object HTMLDocument]  // 在浏览器 console
const type = toString.call("abc").slice(8, -1).toLowerCase();
console.log(type); // 'string'

// instanceof 原型判断 -> 对象数组等引用类型、以及通过 new 创建的对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = new Person("Hale", 18);
console.log(p instanceof Person); // true

console.log({} instanceof Object); // true
console.log([] instanceof Array); // true
console.log((() => {}) instanceof Function); // true
console.log(new Date() instanceof Date); // true
console.log(/\.vue$/ instanceof RegExp); // true

console.log(123 instanceof Number); // false
console.log(new Number(123) instanceof Number); // true 需要包装一下

console.log("abc" instanceof String); // false
console.log(new String("abc") instanceof String); // true 需要包装一下

console.log(true instanceof Boolean); // false
console.log(new Boolean(true) instanceof Boolean); // true

const sym = Symbol();
console.log(sym instanceof Symbol); // false sym 不是用 new 创建的实例
