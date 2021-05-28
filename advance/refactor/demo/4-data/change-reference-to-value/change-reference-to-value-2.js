/*
 * @Author: Hale
 * @Description: Change Reference to Value 将引用对象改为值对象 -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

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
  }

  class TelephoneNumber {
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
      this._telephoneNumber.areaCode = new TelephoneNumber(
        arg,
        this.officeNumber
      );
    }
    get officeNumber() {
      return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
      this._telephoneNumber.number = new TelephoneNumber(
        this.officeAreaCode,
        arg
      );
    }
  }

  class TelephoneNumber {
    constructor(areaCode, number) {
      this._areaCode = areaCode;
      this._number = number;
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

    // test
    equals(other) {
      if (!(other instanceof TelephoneNumber)) return false;
      return this.areaCode === other.areaCode && this.number === other.number;
    }
  }
}
