/*
 * @Author: Hale
 * @Description: Remove Setting Method 移除设值方法 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class Person {
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
    set id(arg) {
      this._id = arg;
    }
  }

  // call
  const martin = new Person();
  martin.name = "martin";
  martin.id = "1234";
}

{
  class Person {
    constructor(id) {
      this._id = id; // immutable
    }
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get id() {
      return this._id;
    }
  }

  // call
  const martin = new Person();
  martin.name = "martin";
  martin.id = "1234"; // TypeError
}
