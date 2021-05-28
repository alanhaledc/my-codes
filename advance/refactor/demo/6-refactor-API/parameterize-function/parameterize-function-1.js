/*
 * @Author: Hale
 * @Description: Parameterize Function 函数参数化 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function tenPercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.1);
  }
  function fivePercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.05);
  }
}

{
  function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(1 + factor);
  }
}
