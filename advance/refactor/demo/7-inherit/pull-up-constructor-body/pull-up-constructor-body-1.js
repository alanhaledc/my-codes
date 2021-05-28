/*
 * @Author: Hale
 * @Description: Pull up Constructor Body 构造函数本体上移 -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Party {
    //...
  }

  class Employee extends Party {
    constructor(name, id, monthlyCost) {
      super();
      this._id = id;
      this._name = name;
      this._monthlyCost = monthlyCost;
    }
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
  }
}
