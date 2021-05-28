/*
 * @Author: Hale
 * @Description: Remove Middle Man 移除中间人（和移除委托关系相反） -> 简单示例
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  manager = aPerson.manager;

  class Person {
    get manager() {
      return this.department.manager;
    }
  }
}

{
  manager = aPerson.department.manager;
}
