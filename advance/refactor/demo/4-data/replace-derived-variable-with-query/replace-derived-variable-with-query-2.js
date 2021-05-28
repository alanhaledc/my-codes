/*
 * @Author: Hale
 * @Description: Replace Derived Variable with Query 以查询取代派生变量 -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class ProductionPlan {
    get production() {
      return this._production;
    }
    applyAdjustment(anAdjustment) {
      this._adjustments.push(anAdjustment);
      this._production += anAdjustment.amount;
    }
  }
}

{
  class ProductionPlan {
    get production() {
      return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
    applyAdjustment(anAdjustment) {
      this._adjustments.push(anAdjustment);
    }
  }
}
