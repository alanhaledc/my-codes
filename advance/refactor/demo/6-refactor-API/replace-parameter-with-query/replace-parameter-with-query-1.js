/*
 * @Author: Hale
 * @Description: Replace Parameter with Query 以查询取代参数 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  availableVacation(anEmployee, anEmployee.grade);

  function availableVacation(anEmployee, grade) {
    // calculate vacation...
  }
}

{
  availableVacation(anEmployee);

  function availableVacation(anEmployee) {
    const grade = anEmployee.grade;
    // calculate vacation...
  }
}
