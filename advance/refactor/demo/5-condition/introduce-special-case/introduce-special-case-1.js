/*
 * @Author: Hale
 * @Description: Introduce Special Case 引入特例（null 对象） -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  if (aCustomer === "unknown") customerName = "occupant";
}

{
  class UnknownCustomer {
    get name() {
      return "occupant";
    }
  }
}
