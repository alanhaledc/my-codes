/*
 * @Author: Hale
 * @Description: Pull Down Field 字段下移（以字段上移相反） -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class Employee {
    private quota!: string;
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
    protected quota!: string;
  }
}
