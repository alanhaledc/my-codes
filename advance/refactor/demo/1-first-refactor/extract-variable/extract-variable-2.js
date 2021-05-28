/*
 * @Author: Hale
 * @Description: Extract Variable 提炼变量 -> 在类中
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  class Order {
    constructor(aRecord) {
      this._data = aRecord;
    }
    get quantity() {
      return this._data.quantity;
    }
    get itemPrice() {
      return this._data.itemPrice;
    }
    get price() {
      return (
        this.quantity * this.itemPrice -
        Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
        Math.min(this.quantity * this.itemPrice * 0.1, 100)
      );
    }
  }
}

{
  class Order {
    constructor(aRecord) {
      this._data = aRecord;
    }
    get quantity() {
      return this._data.quantity;
    }
    get itemPrice() {
      return this._data.itemPrice;
    }
    get price() {
      return this.basePrice - this.quantityDiscount + this.shipping;
    }
    get basePrice() {
      return this.quantity * this.itemPrice;
    }
    get quantityDiscount() {
      return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }
    get shipping() {
      return Math.min(this.basePrice * 0.1, 100);
    }
  }
}
