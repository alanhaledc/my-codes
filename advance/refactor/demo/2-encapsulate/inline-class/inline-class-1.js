/*
 * @Author: Hale
 * @Description: Inline Class 内联类（和提炼类相反） -> 简单示例
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  class Person {
    get officeAreaCode() {
      return this._telephoneNumber.areaCode;
    }
    get officeNumber() {
      return this._telephoneNumber.number;
    }
  }

  class TelephoneNumber {
    get areaCode() {
      return this._areaCode;
    }
    get number() {
      return this._number;
    }
  }
}

{
  class Person {
    get officeAreaCode() {
      return this._officeAreaCode;
    }
    get officeNumber() {
      return this._officeNumber;
    }
  }
}
