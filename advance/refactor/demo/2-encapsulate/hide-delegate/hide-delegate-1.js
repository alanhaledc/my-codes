/*
 * @Author: Hale
 * @Description: Hide Delegate 隐藏委托关系 -> 简单示例
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  manager = aPerson.department.manager;
}

{
  manager = aPerson.manager;

  class Person {
    get manager() {
      return this.department.manager;
    }
  }
}
