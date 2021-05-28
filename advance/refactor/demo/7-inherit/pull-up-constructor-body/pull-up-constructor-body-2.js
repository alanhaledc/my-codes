/*
 * @Author: Hale
 * @Description: Pull up Constructor Body 构造函数本体上移 -> 简单示例 2
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Party {}

  class Employee extends Party {
    constructor(name, id, monthlyCost) {
      super();
      this._id = id;
      this._name = name;
      this._monthlyCost = monthlyCost;
    }
    // rest of class...
  }

  class Department extends Party {
    constructor(name, staff) {
      super();
      this._name = name;
      this._staff = staff;
    }
    // rest of class..
  }
}

{
  class Party {
    constructor(name) {
      this._name = name;
    }
  }

  class Employee extends Party {
    constructor(name, id, monthlyCost) {
      super(name);
      this._id = id;
      this._monthlyCost = monthlyCost;
    }
    // rest of class...
  }

  class Department extends Party {
    constructor(name, staff) {
      super(name);
      this._staff = staff;
    }
    // rest of class..
  }
}
