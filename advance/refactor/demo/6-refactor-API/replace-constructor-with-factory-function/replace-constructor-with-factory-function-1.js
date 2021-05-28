/*
 * @Author: Hale
 * @Description: Replace Constructor with Factory Function 以工厂函数取代构造函数 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  leadEngineer = new Employee(document.leadEngineer, "E");
}

{
  leadEngineer = createEngineer(document.leadEngineer);
}
