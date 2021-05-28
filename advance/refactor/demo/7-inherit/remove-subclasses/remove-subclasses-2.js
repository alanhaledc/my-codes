/*
 * @Author: Hale
 * @Description: Remove Subclasses 移除子类（以子类取代类型码相反）-> 简单示例 2
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Person {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return "X";
    }
  }
  // snip
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

  // call
  const numberOfMales = people.filter((p) => p instanceof Male).length;
}

{
  class Person {
    constructor(name, genderCode) {
      this._name = name;
      this._genderCode = genderCode || "X";
    }
    get name() {
      return this._name;
    }
    get genderCode() {
      return this._genderCode;
    }
    get isMale() {
      return this instanceof Male;
    }
  }

  function createPerson(aRecord) {
    switch (aRecord.gender) {
      case "M":
        return new Person(aRecord.name, "M");
      case "F":
        return new Person(aRecord.name, "F");
      default:
        return new Person(aRecord.name, "X");
    }
  }

  function loadFromInput(data) {
    return data.map((aRecord) => createPerson(aRecord));
  }

  // call
  const numberOfMales = people.filter((p) => p.isMale).length;
}
