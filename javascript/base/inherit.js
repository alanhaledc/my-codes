/*
 * @Author: Hale
 * @Description: 继承
 * @Date: 2019/04/05
 * @LastEditTime: 2022/04/14
 */
{
  // 一般的原型链继承
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

  const c1 = new Child();
  const c2 = new Child();

  console.log(c1.play, c2.play); // [ 1, 2, 3 ] [ 1, 2, 3 ]
  c1.play.push(4);
  console.log(c1.play, c2.play); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]  共享父类属性
}

{
  // 借用构造函数继承
  // 缺点：之类不能使用父类原型的方法，方法必须定义在父类的构造函数上，难以重用
  function Parent() {
    this.name = "parent";
    this.play = [1, 2, 3];
    this.sayHello = function () {
      console.log("say hello");
    };
  }

  Parent.prototype.say = function () {
    console.log("say hi");
  };

  function Child() {
    Parent.call(this); // 借用构造函数继承
  }

  const c = new Child();

  console.log(c.play); // [ 1, 2, 3 ]
  c.sayHello(); // say hello
  console.log(c.say()); // TypeError: c.say is not a function
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

  const c1 = new Child();
  const c2 = new Child();

  console.log(c1.play, c2.play); // [ 1, 2, 3 ] [ 1, 2, 3 ]
  c1.play.push(4);
  console.log(c1.play, c2.play); // [ 1, 2, 3, 4 ] [ 1, 2, 3] 不会共享父类属性
}

{
  // 原型式继承
  // 缺点：父类和之类共享属性
  const parent = {
    name: "parent",
    play: [1, 2, 3],
  };

  function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  const child = object(parent);
  // const child = Object.create(parent); // ES6 API
  child.play.push(4);

  console.log(child.play); // [ 1, 2, 3, 4 ]
  console.log(parent.play); // [ 1, 2, 3, 4 ]
}

{
  // 寄生组合继承
  // 缺点：函数难以重用
  const parent = {
    name: "parent",
    play: [1, 2, 3],
  };

  function createAnother(original) {
    let clone = object(original); // 通过调用函数创建一个新对象
    // 以某种方式增强这个对象
    clone.sayHi = function () {
      console.log("hi");
    };
    return clone; // 返回这个对象
  }

  const child = createAnother(parent);
  child.sayHi(); // hi
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

  const c1 = new Child();
  const c2 = new Child();

  console.log(c1.play, c2.play); // [ 1, 2, 3 ] [ 1, 2, 3 ]
  c1.play.push(4);
  console.log(c1.play, c2.play); // [ 1, 2, 3, 4 ] [ 1, 2, 3]
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

  const c1 = new Child();
  const c2 = new Child();

  console.log(c1.play, c2.play);
  c1.play.push(4);
  console.log(c1.play, c2.play);
}
