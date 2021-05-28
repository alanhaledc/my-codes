/*
 * @Author: Hale
 * @Description: Hide Delegate 隐藏委托关系 -> 简单示例 2
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    get department() {
      return this._department;
    }
    set department(arg) {
      this._department = arg;
    }
  }

  class Department {
    get chargeCode() {
      return this._chargeCode;
    }
    set chargeCode(arg) {
      this._chargeCode = arg;
    }
    get manager() {
      return this._manager;
    }
    set manager(arg) {
      this._manager = arg;
    }
  }

  manager = aPerson.department.manager;
}

{
  class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    get department() {
      return this._department;
    }
    set department(arg) {
      this._department = arg;
    }
    // new
    get manager() {
      return this._department.manager;
    }
  }

  class Department {
    get chargeCode() {
      return this._chargeCode;
    }
    set chargeCode(arg) {
      this._chargeCode = arg;
    }
    get manager() {
      return this._manager;
    }
    set manager(arg) {
      this._manager = arg;
    }
  }

  manager = aPerson.department.manager;
}
