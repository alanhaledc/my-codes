/*
 * @Author: Hale
 * @Description: Extract Class 提炼类 -> 简单示例 2
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  class Person {
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get telephoneNumber() {
      return `(${this.officeAreaCode}) ${this.officeNumber}`;
    }
    get officeAreaCode() {
      return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
      this._officeAreaCode = arg;
    }
    get officeNumber() {
      return this._officeNumber;
    }
    set officeNumber(arg) {
      this._officeNumber = arg;
    }
  }
}

{
  class Person {
    constructor() {
      this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
      this._telephoneNumber.areaCode = arg;
    }
    get officeNumber() {
      return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
      this._telephoneNumber.number = arg;
    }
    get telephoneNumber() {
      return this._telephoneNumber.toString();
    }
  }

  class TelephoneNumber {
    constructor() {
      // ...
    }
    get areaCode() {
      return this._areaCode;
    }
    set areaCode(arg) {
      this._areaCode = arg;
    }
    get number() {
      return this._number;
    }
    set number(arg) {
      this._number = arg;
    }
    toString() {
      return `(${this.officeAreaCode}) ${this.officeNumber}`;
    }
  }
}
