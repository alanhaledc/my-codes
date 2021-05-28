/*
 * @Author: Hale
 * @Description: call apply bind 的用法 1. 改变 this 的值 2. 借用方法
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/04
 */

const obj = {
  value: "obj",
};

window.value = "val";

function getValue(name, age) {
  console.log(name, age, this.value);
}

getValue("Hale", 18); // Hale 18 val this 指向 window

// 改变 this 指向为 obj 对象
// 通过 call 改变
getValue.call(obj, "Hale", 18); // 直接调用 Hale 18 obj

// 通过 apply 改变
getValue.apply(obj, ["Hale", 18]); // 直接调用 Hale 18 obj

// 通过 bind 改变
const fn = getValue.bind(obj, "Amy", 20); // 传入参数，返回一个新的函数
fn(); // Amy 20 obj
fn("Hale", 18); // 输入新参数，还是 Amy 20 obj，不会覆盖 bind 时传入的参数

const fn2 = getValue.bind(obj); // 只改变指向，不传参数
fn2(); // undefined undefined 'obj'
fn2("Hale", 18); // Hale 18 obj
