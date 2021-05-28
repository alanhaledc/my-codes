/*
 * @Author: Hale
 * @Description: 类 class
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log("running");
  }
}

Animal.prototype.eat = function () {
  console.log("eating");
};

const dog = new Animal("simon");
console.log(dog);
console.log(dog.name);
dog.run();
dog.eat();

class Dog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

const simon = new Dog("simon", "red");
console.log(simon);
simon.run();
simon.eat();
