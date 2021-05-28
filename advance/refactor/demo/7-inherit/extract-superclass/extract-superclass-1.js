/*
 * @Author: Hale
 * @Description: Extract Superclass 提炼超类 -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Department {
    get totalAnnualCost() {
      // ...
    }
    get name() {
      // ...
    }
    get headCount() {
      // ...
    }
  }
  class Employee {
    get annualCost() {
      // ...
    }
    get name() {
      // ...
    }
    get id() {
      // ...
    }
  }
}

{
  class Party {
    get name() {
      // ...
    }
    get annualCost() {
      // ...
    }
  }
  class Department extends Party {
    // equal totalAnnualCost
    get annualCost() {
      // ...
    }
    get headCount() {
      // ...
    }
  }
  class Employee extends Party {
    get annualCost() {
      // ...
    }
    get id() {
      // ...
    }
  }
}
