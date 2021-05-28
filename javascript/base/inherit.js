/*
 * @Author: Hale
 * @Description: 继承
 * @Date: 2019/04/05
 * @LastEditTime: 2020/03/31
 */
{
  // 一般的原型继承
  // 子类原型指向父类实例或者父类原型
  // 缺点：会共享父类的属性
  function Parent() {
    this.name = "parent";
    this.play = [1, 2, 3];
  }

  Parent.prototype.say = function () {
    console.log("say hi");
  };

  function Child() {
    this.type = "child";
  }

  Child.prototype = new Parent(); // 通过原型继承

  const s1 = new Child();
  const s2 = new Child();

  console.log(s1.play, s2.play); // [ 1, 2, 3 ] [ 1, 2, 3 ]
  s1.play.push(4);
  console.log(s1.play, s2.play); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]  共享父类属性
}

{
  // 组合继承
  // 1. 子类原型指向父类实例或者父类原型
  // 2. 父类的 this 指向子类（子类借用父类属性和方法）
  // 优点：解决一般原型继承共享父类的属性的问题
  // 缺点：子类的 __proto__ 中有不需要的父类的属性或者原型，造成内存浪费
  // 使用 Object.create() 后还是一样，只是多了一层 __proto__
  function Parent() {
    this.name = "parent";
    this.play = [1, 2, 3];
  }

  Parent.prototype.say = function () {
    console.log("say hi");
  };

  function Child() {
    Parent.call(this); // 父类的 this 指向子类（子类借用父类属性和方法）
    this.type = "child";
  }

  Child.prototype = new Parent(); // 通过原型链继承父类的实例，子类的 __proto__ 中会有父类的属性（重复）
  // Child.prototype = Parent.prototype // 通过原型链继承父类的原型，子类的 __proto__ 中有父类的原型（重复）
  // Child.prototype = Object.create(new Parent())
  // Child.prototype = Object.create(Parent.prototype)

  const s1 = new Child();
  const s2 = new Child();

  console.log(s1.play, s2.play); // [ 1, 2, 3 ] [ 1, 2, 3 ]
  s1.play.push(4);
  console.log(s1.play, s2.play); // [ 1, 2, 3, 4 ] [ 1, 2, 3] 不会共享父类属性
}

{
  // 寄生组合继承 -> 等同于 ES6 的类的继承
  // 1. 子类原生通过父类原型创建，并且设置构造器的值为子类
  // 2. 父类的 this 指向子类
  // 组合继承的改进，子类的 __proto__ 中不会有父类的属性方法和原型
  function Parent() {
    this.name = "parent";
    this.play = [1, 2, 3];
  }

  Parent.prototype.say = function () {
    console.log("say hi");
  };
  function Child() {
    Parent.call(this); // 父类的 this 指向子类（子类借用父类属性和方法）
    this.type = "child";
  }

  // 使用 Object.create，再设置 constructor 的 value 为子类，子类的 __proto__ 中不会有父类的属性和原型
  Child.prototype = Object.create(Parent.prototype, {
    constructor: {
      value: Child,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });

  // 简单写法 -> 以父类的原型创建子类原型，然后子类的原型的构造器指向子类本身
  // Child.prototype = Object.create(Parent.prototype)
  // Child.prototype.constructor = Child

  const s1 = new Child();
  const s2 = new Child();

  console.log(s1.play, s2.play); // [ 1, 2, 3 ] [ 1, 2, 3 ]
  s1.play.push(4);
  console.log(s1.play, s2.play); // [ 1, 2, 3, 4 ] [ 1, 2, 3]
}

{
  // ES6 中类的继承 -> 可读性更强，语义化更强
  // 原理和寄生组合继承是一样的，设置 constructor（使用 babel 转换后可知）
  class Parent {
    constructor() {
      this.name = "parent";
      this.play = [1, 2, 3];
    }

    say() {
      console.log("say hi");
    }
  }

  // 使用 extends 来继承父类
  class Child extends Parent {
    constructor(name, play) {
      super(name, play); // 使用 super 继承父类的属性
      this.type = "child";
    }
  }

  const s1 = new Child();
  const s2 = new Child();

  console.log(s1.play, s2.play);
  s1.play.push(4);
  console.log(s1.play, s2.play);
}
