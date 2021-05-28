/*
 * @Author: Hale
 * @Description: Consolidate Conditional Expression 合并条件表达式 -> 使用逻辑与
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function fn() {
    if (anEmployee.onVacation) {
      if (anEmployee.seniority > 10) {
        return 1;
      }
      return 0.5;
    }
  }
}

{
  function fn() {
    if (anEmployee.onVacation && anEmployee.seniority > 10) {
      return 1;
    }
    return 0.5;
  }
}
