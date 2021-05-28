/*
 * @Author: Hale
 * @Description: Pull Down Method 函数下移（与函数上移相反） -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Employee {
    get quota() {
      //...
    }
  }
  class Engineer extends Employee {
    //...
  }
  class Salesman extends Employee {
    //...
  }
}

{
  class Employee {
    //...
  }
  class Engineer extends Employee {
    //...
  }
  class Salesman extends Employee {
    get quota() {
      //...
    }
  }
}
