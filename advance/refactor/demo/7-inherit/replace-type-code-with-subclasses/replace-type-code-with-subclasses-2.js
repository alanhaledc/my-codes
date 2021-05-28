/*
 * @Author: Hale
 * @Description: Replace Type Code with Subclasses 以子类取代类型码 -> 简单示例 2
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Employee {
    constructor(name, type) {
      this.validateType(type);
      this._name = name;
      this._type = type;
    }
    validateType(arg) {
      if (!["engineer", "manager", "salesman"].includes(arg))
        throw new Error(`Employee cannot be of type ${arg}`);
    }
    toString() {
      return `${this._name} (${this._type})`;
    }
  }
}

{
  class Employee {
    constructor(name) {
      this._name = name;
    }
    toString() {
      return `${this._name} (${this._type})`;
    }
  }

  class Engineer extends Employee {
    get type() {
      return "engineer";
    }
  }
  class Salesman extends Employee {
    get type() {
      return "salesman";
    }
  }
  class Manager extends Employee {
    get type() {
      return "manager";
    }
  }

  function createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name);
      case "salesman":
        return new Salesman(name);
      case "manager":
        return new Manager(name);
      default:
        throw new Error(`Employee cannot be of type ${type}`);
    }
  }
}
