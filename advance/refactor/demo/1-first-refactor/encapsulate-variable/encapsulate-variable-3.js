/*
 * @Author: Hale
 * @Description: Encapsulate Variable 封装变量（字段） -> 简单示例 3
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
}

{
  let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

  function getDefaultOwner() {
    return new Person(defaultOwnerData); // 使用类创建不同引用的对象
  }

  function setDefaultOwner(arg) {
    defaultOwnerData = arg;
  }

  class Person {
    constructor(data) {
      this._lastName = data.lastName;
      this._firstName = data.firstName;
    }
    get lastName() {
      return this._lastName;
    }
    get firstName() {
      return this._firstName;
    }
  }
}
