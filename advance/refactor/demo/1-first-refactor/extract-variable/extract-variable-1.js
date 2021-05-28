/*
 * @Author: Hale
 * @Description: Extract Variable 提炼变量 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function price() {
    return (
      order.quantity * order.itemPrice -
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
      Math.min(order.quantity * order.itemPrice * 0.1, 100)
    );
  }
}

{
  function price() {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount =
      Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);

    return basePrice - quantityDiscount + shipping;
  }
}
