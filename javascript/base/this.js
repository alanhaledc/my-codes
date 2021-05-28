/*
 * @Author: Hale
 * @Description: this 的指向，this 只能用于函数
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/04
 */

// 函数的类型不同，this 指向规则也不一样：
// 对于普通函数（或者被赋值给普通函数的对象方法），this 始终指向全局对象 window or global；
// 对于构造函数或者类，this 则指向该函数或者类创建的实例对象；
// 对于对象的方法，this 始终指向该对象。

// 构造函数 -> 实例对象
function Foo(name) {
  this.name = name;
  console.log(this);
}

let f = new Foo("hale"); // Foo { name: 'hale' }

// 普通对象 -> 对象里面的函数的 this 指向对象本身
const obj = {
  name: "hale",
  printName: function () {
    console.log(this.name);
    console.log("this === obj", this === obj);
  },
};

obj.printName(); // this === obj

// 普通函数 -> 指向全局对象 window 或者 global
function fn() {
  console.log("this === global", this === global); // node 环境
  // console.log('this === window', this === window) // 浏览器环境
}

fn(); // this === Window or global

// ES6 的类 -> 和构造函数一样，指向实例对象
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(this.name); // this === Person
  }
}

// 箭头函数的 this -> 函数本身没有 this, this 是外面的函数作用域的 this
function sayName() {
  this.name = "Hale";
  setTimeout(() => {
    console.log(this.name); // this === 函数 sayName
  }, 1000);
}

sayName(); // ‘Hale'
