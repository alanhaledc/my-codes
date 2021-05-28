/*
 * @Author: Hale
 * @Description: Inline Function 内联函数（和提炼函数相反） -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function getRating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
  }

  function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
  }
}

{
  function getRating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1;
  }
}
