/*
 * @Author: Hale
 * @Description: Replace Subclasses with Delegate 以委托取代子类 -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Order {
    get daysToShip() {
      return this._warehouse.daysToShip;
    }
  }
  class PriorityOrder extends Order {
    get daysToShip() {
      return this._priorityPlan.daysToShip;
    }
  }
}

{
  class Order {
    get daysToShip() {
      return this._priorityDelegate
        ? this._priorityDelegate.daysToShip
        : this._warehouse.daysToShip;
    }
  }
  class PriorityOrderDelegate {
    get daysToShip() {
      return this._priorityPlan.daysToShip;
    }
  }
}
