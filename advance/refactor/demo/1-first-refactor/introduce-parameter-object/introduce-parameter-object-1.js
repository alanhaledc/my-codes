/*
 * @Author: Hale
 * @Description: Introduce Parameter Object 引入参数对象 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function amountInvoiced(startDate, endDate) {
    // ...
  }
  function amountReceived(startDate, endDate) {
    // ...
  }
  function amountOverdue(startDate, endDate) {
    // ...
  }
}

{
  function amountInvoiced(aDateRange) {
    // ...
  }
  function amountReceived({ startDate, endDate }) {
    // ...
  }
  function amountOverdue({ startDate, endDate }) {
    // ...
  }
}
