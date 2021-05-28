/*
 * @Author: Hale
 * @Description: Replace Command with Function 以函数取代命令（以命令取代函数相反）-> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class ChargeCalculator {
    constructor(customer, usage) {
      this._customer = customer;
      this._usage = usage;
    }
    execute() {
      return this._customer.rate * this._usage;
    }
  }
}

{
  function charge(customer, usage) {
    return customer.rate * usage;
  }
}
