/*
 * @Author: Hale
 * @Description: Split Loop 拆分循环（先重构再性能优化） -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  let averageAge = 0;
  let totalSalary = 0;
  for (const p of people) {
    averageAge += p.age;
    totalSalary += p.salary;
  }
  averageAge = averageAge / people.length;
}

{
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }

  let averageAge = 0;
  for (const p of people) {
    averageAge += p.age;
  }
  averageAge = averageAge / people.length;
}
