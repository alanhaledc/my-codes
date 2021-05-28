/*
 * @Author: Hale
 * @Description: Inline Variable 内联变量（与提炼变量相反）-> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function price(anOrder) {
    let basePrice = anOrder.basePrice;
    return basePrice > 1000;
  }
}

{
  function price(anOrder) {
    return anOrder.basePrice > 1000;
  }
}
