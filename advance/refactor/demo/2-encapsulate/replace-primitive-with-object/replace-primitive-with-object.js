/*
 * @Author: Hale
 * @Description: Replace Primitive with Object 以对象取代基本类型 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/05
 */

{
  orders.filter((o) => "high" === o.priority || "rush" === o.priority);
}

{
  class Order {
    constructor(data) {
      this._priority = data.priority;
    }
    get priorityString() {
      return this._priority.toString();
    }
    get priority() {
      return this._priority;
    }
    set priority(aString) {
      this._priority = new Priority(aString);
    }
  }

  class Priority {
    static legalValues() {
      return ["low", "normal", "high", "rush"];
    }

    constructor(value) {
      if (value instanceof Priority) return value;
      if (Priority.legalValues().includes(value)) {
        this._value = value;
      } else {
        throw new Error(`<${value}> is invalid for Priority`);
      }
    }
    toString() {
      return this._value;
    }
    get _index() {
      return Priority.legalValues().findIndex((s) => s === this._value);
    }
    equals(other) {
      return this._index === other._index;
    }
    higherThan(other) {
      return this._index > other._index;
    }
    lowerThan(other) {
      return this._index < other._index;
    }
  }

  orders.filter((o) => o.priority.higherThan(new Priority("normal")));
}
