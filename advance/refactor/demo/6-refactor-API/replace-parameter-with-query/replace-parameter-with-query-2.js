/*
 * @Author: Hale
 * @Description: Replace Parameter with Query 以查询取代参数 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class Order {
    get finalPrice() {
      const basePrice = this.quantity * this.itemPrice;
      let discountLevel;
      if (this.quantity > 100) discountLevel = 2;
      else discountLevel = 1;
      return this.discountedPrice(basePrice, discountLevel);
    }
    discountedPrice(basePrice, discountLevel) {
      switch (discountLevel) {
        case 1:
          return basePrice * 0.95;
        case 2:
          return basePrice * 0.9;
      }
    }
  }
}

{
  class Order {
    get finalPrice() {
      const basePrice = this.quantity * this.itemPrice;
      return this.discountedPrice(basePrice);
    }

    get discountLevel() {
      return this.quantity > 100 ? 2 : 1;
    }

    discountedPrice(basePrice) {
      switch (this.discountLevel) {
        case 1:
          return basePrice * 0.95;
        case 2:
          return basePrice * 0.9;
      }
    }
  }
}
