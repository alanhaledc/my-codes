/*
 * @Author: Hale
 * @Description: Replace Command with Function 以函数取代命令（以命令取代函数相反）-> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class ChargeCalculator {
    constructor(customer, usage, provider) {
      this._customer = customer;
      this._usage = usage;
      this._provider = provider;
    }
    get baseCharge() {
      return this._customer.baseRate * this._usage;
    }
    get charge() {
      return this.baseCharge + this._provider.connectionCharge;
    }
  }

  // call
  const monthCharge = new ChargeCalculator(customer, usage, provider).charge;
}

{
  function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }

  // call
  const monthCharge = charge(customer, usage, provider);
}
