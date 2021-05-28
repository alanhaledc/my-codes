/*
 * @Author: Hale
 * @Description: Separate Query from Modifier 将查询函数和修改函数分离 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce(
      (total, each) => each.amount + total,
      0
    );
    sendBill();
    return result;
  }
}

{
  function totalOutstanding() {
    return customer.invoices.reduce((total, each) => each.amount + total, 0);
  }

  function sendBill() {
    emailGateway.send(formatBill(customer));
  }
}
