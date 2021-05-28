/*
 * @Author: Hale
 * @Description: Move Field 搬移字段 -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class Customer {
    constructor(name, discountRate) {
      this._name = name;
      this._discountRate = discountRate;
      this._contract = new CustomerContract(dateToday());
    }
    get discountRate() {
      return this._discountRate;
    }
    becomePreferred() {
      this._discountRate += 0.03;
      // other nice things
    }
    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this._discountRate));
    }
  }

  class CustomerContract {
    constructor(startDate) {
      this._startDate = startDate;
    }
  }
}

{
  class Customer {
    constructor(name, discountRate) {
      this._name = name;
      this._setDiscountRate(discountRate);
      this._contract = new CustomerContract(dateToday(), discountRate);
    }
    get discountRate() {
      return this._contract._discountRate;
    }
    _setDiscountRate(aNumber) {
      this._contract._discountRate = aNumber;
    }
    becomePreferred() {
      this._setDiscountRate(this.discountRate + 0.03);
      // other nice things
    }
    applyDiscount(amount) {
      return amount.subtract(amount.multiply(this.discountRate));
    }
  }

  class CustomerContract {
    constructor(startDate, discountRate) {
      this._startDate = startDate;
      this._discountRate = discountRate;
    }
    get discountRate() {
      return this._discountRate;
    }
    set discountRate(arg) {
      this._discountRate = arg;
    }
  }
}
