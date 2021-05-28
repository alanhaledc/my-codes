/*
 * @Author: Hale
 * @Description: Pull up Method 函数上移 -> 简单示例 2
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Employee extends Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }
  class Department extends Party {
    get totalAnnualCost() {
      return this.monthlyCost * 12;
    }
  }
}

{
  class Party {
    get annualCost() {
      return this.monthlyCost * 12;
    }

    get monthlyCost() {
      throw new SubclassResponsibilityError();
    }
  }

  class Department {
    get annualCost() {
      return this.monthlyCost * 12;
    }
  }
}
