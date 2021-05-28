/*
 * @Author: Hale
 * @Description: Pull up Method 函数上移 -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Employee {
    //...
  }
  class Salesman extends Employee {
    get name() {
      //...
    }
  }
  class Engineer extends Employee {
    get name() {
      //...
    }
  }
}

{
  class Employee {
    get name() {
      //...
    }
  }
  class Salesman extends Employee {
    //...
  }
  class Engineer extends Employee {
    //...
  }
}
