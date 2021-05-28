/*
 * @Author: Hale
 * @Description: Replace Derived Variable with Query 以查询取代派生变量 -> 不止一个数据来源
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class ProductionPlan {
    constructor(production) {
      this._production = production;
      this._adjustments = [];
    }
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
    constructor(production) {
      this._initialProduction = production;
      this._productionAccumulator = 0;
      this._adjustments = [];
    }
    get production() {
      return this._initialProduction + this._productionAccumulator;
    }
    get calculateProductionAccumulator() {
      return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
    applyAdjustment(anAdjustment) {
      this._adjustments.push(anAdjustment);
    }
  }
}
