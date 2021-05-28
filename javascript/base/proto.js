/*
 * @Author: Hale
 * @Description: 原型和原型链
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

function Animal(name) {
  this.name = name;
}

Animal.prototype.run = function () {
  console.log(this.name + " is running!");
};

const dog = new Animal("dog");
console.log(dog.name); // dog
dog.run(); // dog is running

console.log(dog instanceof Animal); // true
console.log(dog.__proto__ === Animal.prototype); // true
console.log(dog.constructor === Animal); // true
console.log(Animal.prototype.constructor === Animal); // true
console.log(dog.__proto__.constructor === Animal); // true

console.log("--------------------------");

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal();
// Dog.prototype = Animal.prototype // 下面的有差异
// Dog.prototype = Object.create(new Animal())

const simon = new Dog("simon");

console.log(simon.name); // simon
simon.run(); // simon is running
console.log(simon instanceof Dog); // true
console.log(simon instanceof Animal); // true

console.log("------------------");

// simon.__proto__ === Dog.prototype => new Animal()

console.log(simon.__proto__); // Animal { name: undefined }
console.log(simon.__proto__ === Animal.prototype); // false
console.log(simon.__proto__ === Dog.prototype); // true
console.log(simon.__proto__ === Animal); // true
console.log(simon.constructor === Animal); // true
console.log(simon.constructor === Dog); // false
console.log(Dog.prototype.constructor === Animal); // true
console.log(simon.__proto__.constructor === Dog); // false
console.log(Dog.prototype.constructor === Dog); // false

console.log(Dog.prototype); // Animal { name: undefined }
console.log(new Animal()); // Animal { name: undefined }
console.log(Dog.prototype === new Animal()); // false

console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Dog.prototype.__proto__.constructor === Animal); // true

// console.log(Animal.prototype.__proto__ === Object.prototype) // true
// console.log(Function.prototype.__proto__ === Object.prototype) // true
