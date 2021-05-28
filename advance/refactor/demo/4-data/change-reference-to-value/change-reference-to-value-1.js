/*
 * @Author: Hale
 * @Description: Change Reference to Value 将引用对象改为值对象 -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class Product {
    applyDiscount(arg) {
      this._price.amount -= arg;
    }
  }
}

{
  class Product {
    applyDiscount(arg) {
      this._price = new Money(this._price.amount - arg, this._price.currency);
    }
  }
}
