/*
 * @Author: Hale
 * @Description: Symbol 符号
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

// Symbol 一种新的原始数据类型 Symbol，表示独一无二的值
// Symbol 值通过直接调用 Symbol 函数生成，不使用 new 命令
// 对象里面，属性名属于 Symbol 类型，都是独一无二的，可以保证不会与其他属性名产生冲突。

const s1 = Symbol("s1");
const s2 = Symbol("s1");
const s3 = Symbol();
const s4 = Symbol();
const s5 = Symbol.for("s5");
const s6 = Symbol.for("s5");

console.log(s1); // Symbol(s1)
console.log(s2); // Symbol(s1)
console.log(s1 === s2); // false
console.log(s3); // Symbol()
console.log(s4); // Symbol()
console.log(s3 === s4); // false
console.log("-------");
console.log(String(s1)); // 'Symbol(s1)'
console.log(typeof String(s1)); // string

console.log(s5 === s6); // true

const obj = {
  [s1]: "s1",
};

console.log(obj[s1]); // s1
obj[s2] = "s2";
console.log(obj); // { [Symbol(s1)]: 's1', [Symbol(s1)]: 's2' }

Object.defineProperty(obj, s3, { value: "s3" });
console.log("obj[s3}", obj[s3]); // 在对象中不显示 s3
console.log(obj); // { [Symbol(s1)]: 's1', [Symbol(s1)]: 's2' }
