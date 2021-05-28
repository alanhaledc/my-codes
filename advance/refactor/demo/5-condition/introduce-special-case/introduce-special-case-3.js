/*
 * @Author: Hale
 * @Description: Introduce Special Case 引入特例（null 对象） -> 使用对象字面量（客户端没有更新操作）
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class Site {
    get customer() {
      return this._customer;
    }
  }

  class Customer {
    get name() {
      // ...
    }
    get billingPlan() {
      // ...
    }
    set billingPlan(arg) {
      // ...
    }
    get paymentHistory() {
      // ...
    }
  }

  // call 1
  const aCustomer = site.customer;
  // ... lots of intervening code ...
  let customerName;
  if (aCustomer === "unknown") customerName = "occupant";
  else customerName = aCustomer.name;

  // call 2
  const plan =
    aCustomer === "unknown"
      ? registry.billingPlans.basic
      : aCustomer.billingPlan;

  // call 3
  const weeksDelinquent =
    aCustomer === "unknown"
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

{
  class Site {
    get customer() {
      return this._customer === "unknown"
        ? createUnknownCustomer()
        : this._customer;
    }
  }

  class Customer {
    get name() {
      // ...
    }
    get billingPlan() {
      // ...
    }
    set billingPlan(arg) {
      // ...
    }
    get paymentHistory() {
      // ...
    }

    get isUnknown() {
      return false;
    }
  }

  function createUnknownCustomer() {
    return {
      isUnknown: true,
      name: "occupant",
      billingPlan: registry.billingPlans.basic,
      paymentHistory: {
        weeksDelinquentInLastYear: 0,
      },
    };
  }

  function isUnknown(arg) {
    return arg.isUnknown;
  }

  // call 1
  const customerName = aCustomer.name;
  // call 2
  const plan = aCustomer.billingPlan;
  // call 3
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
