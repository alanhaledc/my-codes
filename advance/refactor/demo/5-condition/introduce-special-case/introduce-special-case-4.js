/*
 * @Author: Hale
 * @Description: Introduce Special Case 引入特例（null 对象） -> 使用变换
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

  // correct data
  const custom = {
    name: "Acme Boston",
    location: "Malden MA",
    // more site details
    customer: {
      name: "Acme Industries",
      billingPlan: "plan-451",
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
        //more
      },
      // more
    },
  };

  // incorrect data
  const errorCustom = {
    name: "Warehouse Unit 15",
    location: "Malden MA",
    // more site details
    customer: "unknown",
  };

  // call 1
  const site = acquireSiteData();
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

  function enrichSite(inputSite) {
    const result = _.cloneDeep(inputSite);
    const unknownCustomer = {
      isUnknown: true,
      name: "occupant",
      billingPlan: registry.billingPlans.basic,
      paymentHistory: {
        weeksDelinquentInLastYear: 0,
      },
    };
    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
  }

  function isUnknown(aCustomer) {
    if (aCustomer === "unknown") return true;
    else return aCustomer.isUnknown;
  }

  // correct data
  const custom = {
    name: "Acme Boston",
    location: "Malden MA",
    // more site details
    customer: {
      name: "Acme Industries",
      billingPlan: "plan-451",
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
        //more
      },
      // more
    },
  };

  // incorrect data
  const errorCustom = {
    name: "Warehouse Unit 15",
    location: "Malden MA",
    // more site details
    customer: "unknown",
  };

  // call 1
  const rawSite = acquireSiteData();
  const site = enrichSite(rawSite);
  const aCustomer = site.customer;
  // ... lots of intervening code ...
  const customerName = aCustomer.name;

  // call 2
  const plan = aCustomer.billingPlan;

  // call 3
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
