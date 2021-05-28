/*
 * @Author: Hale
 * @Description: Replace Temp with Query 以查询取代临时变量 -> 简单示例
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      var basePrice = this._quantity * this._item.price;
      var discountFactor = 0.98;
      if (basePrice > 1000) discountFactor -= 0.03;
      return basePrice * discountFactor;
    }
  }
}

{
  class Order {
    constructor(quantity, item) {
      this._quantity = quantity;
      this._item = item;
    }
    get price() {
      return this.basePrice * this.discountFactor;
    }
    get basePrice() {
      return this._quantity * this._item.price;
    }
    get discountFactor() {
      let discountFactor = 0.98;
      if (this.basePrice > 1000) {
        discountFactor -= 0.03;
      }
      return discountFactor;
    }
  }
}
