/*
 * @Author: Hale
 * @Description: Replace Constructor with Factory Function 以工厂函数取代构造函数 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }
    get name() {
      return this._name;
    }
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes() {
      return { E: "Engineer", M: "Manager", S: "Salesman" };
    }
  }

  // call 1
  candidate = new Employee(document.name, document.empType);
  // call 2
  const leadEngineer = new Employee(document.leadEngineer, "E");
}

{
  class Employee {
    constructor(name, typeCode) {
      this._name = name;
      this._typeCode = typeCode;
    }
    get name() {
      return this._name;
    }
    get type() {
      return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes() {
      return { E: "Engineer", M: "Manager", S: "Salesman" };
    }
  }

  function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
  }

  function createEngineer(name) {
    return new Employee(name, "E");
  }

  // call 1
  candidate = createEmployee(document.name, document.empType);
  // call 2
  const leadEngineer = createEngineer(document.leadEngineer);
}
