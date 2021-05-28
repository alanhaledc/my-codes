/*
 * @Author: Hale
 * @Description: Introduce Assertion 引入断言 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class Customer {
    applyDiscount(aNumber) {
      return this.discountRate
        ? aNumber - this.discountRate * aNumber
        : aNumber;
    }
  }
}

{
  class Customer {
    applyDiscount(aNumber) {
      if (!this.discountRate) return aNumber;
      else {
        // assert(this.discountRate >= 0)
        return aNumber - this.discountRate * aNumber;
      }
    }

    get discountRate() {
      return this._discountRate;
    }

    set discountRate(aNumber) {
      assert(null === aNumber || aNumber >= 0); // assertion move here
      this._discountRate = aNumber;
    }
  }
}
