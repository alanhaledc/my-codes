/*
 * @Author: Hale
 * @Description: Introduce Special Case 引入特例（null 对象） -> 简单示例 2
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

  // call 2 read operator
  const plan =
    aCustomer === "unknown"
      ? registry.billingPlans.basic
      : aCustomer.billingPlan;

  // call 3 update operator
  if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

  // call 4
  const weeksDelinquent =
    aCustomer === "unknown"
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

{
  class Site {
    get customer() {
      return this._customer === "unknown"
        ? new UnknownCustomer()
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

  class UnknownCustomer {
    get isUnknown() {
      return true;
    }
    get name() {
      return "occupant";
    }
    get billingPlan() {
      return registry.billingPlans.basic;
    }
    set billingPlan(arg) {
      /* ignore */
    }
    get paymentHistory() {
      return new NullPaymentHistory();
    }
  }

  class NullPaymentHistory {
    get weeksDelinquentInLastYear() {
      return 0;
    }
  }

  function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
      throw new Error(`investigate bad value: <${arg}>`);
    }
    return arg.isUnknown;
  }

  // call 1
  let customerName;
  // customerName = aCustomer.name
  customerName = aCustomer.isUnknown ? "unknown occupant" : aCustomer.name;

  // call 2 read operator
  const plan = aCustomer.billingPlan;

  // call 3 update operator
  aCustomer.billingPlan = newPlan;

  // call 4
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
