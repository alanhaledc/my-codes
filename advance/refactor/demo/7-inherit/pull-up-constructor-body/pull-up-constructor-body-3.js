/*
 * @Author: Hale
 * @Description: Pull up Constructor Body 构造函数本体上移 -> 简单示例 3
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Employee {
    constructor(name) {
      //...
    }
    get isPrivileged() {
      //...
    }
    assignCar() {
      //...
    }
  }
  class Manager extends Employee {
    constructor(name, grade) {
      super(name);
      this._grade = grade;
      if (this.isPrivileged) this.assignCar(); // every subclass does this
    }
    get isPrivileged() {
      return this._grade > 4;
    }
  }
}

{
  class Employee {
    constructor(name) {
      //...
    }
    get isPrivileged() {
      //...
    }
    assignCar() {
      //...
    }

    finishConstruction() {
      if (this.isPrivileged) this.assignCar();
    }
  }

  class Manager extends Employee {
    constructor(name, grade) {
      super(name);
      this._grade = grade;
      this.finishConstruction();
    }

    // finishConstruction() {
    //   if (this.isPrivileged) this.assignCar()
    // }

    get isPrivileged() {
      return this._grade > 4;
    }
  }
}
