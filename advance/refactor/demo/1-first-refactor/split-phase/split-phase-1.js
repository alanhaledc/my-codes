/*
 * @Author: Hale
 * @Description: Split Phase 拆分阶段 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  const orderData = orderString.split(/\s+/);
  const productPrice = priceList[orderData[0].split("-")[1]];
  const orderPrice = parseInt(orderData[1]) * productPrice;
}

{
  const orderRecord = parseOrder(order);
  const orderPrice = price(orderRecord, priceList);

  function parseOrder(aString) {
    const values = aString.split(/\s+/);
    return {
      productID: values[0].split("-")[1],
      quantity: parseInt(values[1]),
    };
  }

  function price(order, priceList) {
    return order.quantity * priceList[order.productID];
  }
}
