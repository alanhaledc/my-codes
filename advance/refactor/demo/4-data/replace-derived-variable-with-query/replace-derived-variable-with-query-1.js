/*
 * @Author: Hale
 * @Description: Replace Derived Variable with Query 以查询取代派生变量 -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class DiscountCls {
    get discountedTotal() {
      return this._discountedTotal;
    }
    set discount(aNumber) {
      const old = this._discount;
      this._discount = aNumber;
      this._discountedTotal += old - aNumber;
    }
  }
}

{
  class DiscountCls {
    get discountedTotal() {
      return this._baseTotal - this._discount;
    }
    set discount(aNumber) {
      this._discount = aNumber;
    }
  }
}
