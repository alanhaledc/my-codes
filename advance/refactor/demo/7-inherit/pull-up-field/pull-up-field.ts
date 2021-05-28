/*
 * @Author: Hale
 * @Description: Pull up Field 字段上移 -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Employee {
    // ...
  }
  class Salesman extends Employee {
    private name!: string;
  }
  class Engineer extends Employee {
    private name!: string;
  }
}

{
  class Employee {
    protected name!: string;
  }
  class Salesman extends Employee {
    //...
  }
  class Engineer extends Employee {
    //...
  }
}
