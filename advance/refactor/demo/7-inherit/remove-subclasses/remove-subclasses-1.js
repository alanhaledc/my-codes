/*
 * @Author: Hale
 * @Description: Remove Subclasses 移除子类（以子类取代类型码相反）-> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Person {
    get genderCode() {
      return "X";
    }
  }
  class Male extends Person {
    get genderCode() {
      return "M";
    }
  }
  class Female extends Person {
    get genderCode() {
      return "F";
    }
  }
}

{
  class Person {
    get genderCode() {
      return this._genderCode;
    }
  }
}
