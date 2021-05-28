/*
 * @Author: Hale
 * @Description: Move Field 搬移字段 -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class Customer {
    get plan() {
      return this._plan;
    }
    get discountRate() {
      return this._discountRate;
    }
  }
}

{
  class Customer {
    get plan() {
      return this._plan;
    }
    get discountRate() {
      return this.plan.discountRate;
    }
  }
}
