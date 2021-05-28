/*
 * @Author: Hale
 * @Description: Move Field 搬移字段 -> 搬移字段到共享对象
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class Account {
    constructor(number, type, interestRate) {
      this._number = number;
      this._type = type;
      this._interestRate = interestRate;
    }
    get interestRate() {
      return this._interestRate;
    }
  }

  class AccountType {
    constructor(nameString) {
      this._name = nameString;
    }
  }
}

{
  class Account {
    constructor(number, type) {
      this._number = number;
      this._type = type;
    }
    get interestRate() {
      return this._type.interestRate;
    }
  }

  class AccountType {
    constructor(nameString, interestRate) {
      this._name = nameString;
      this._interestRate = interestRate;
    }

    get interestRate() {
      return this._interestRate;
    }
  }
}
