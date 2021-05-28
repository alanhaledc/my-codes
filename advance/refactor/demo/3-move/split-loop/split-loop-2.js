/*
 * @Author: Hale
 * @Description: Split Loop 拆分循环（先重构再性能优化） -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  function fn() {
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
    for (const p of people) {
      if (p.age < youngest) youngest = p.age;
      totalSalary += p.salary;
    }
    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
  }
}

{
  function fn() {
    function totalSalary() {
      let totalSalary = 0;
      for (const p of people) {
        totalSalary += p.salary;
      }
      return totalSalary;
    }

    function youngestAge() {
      let youngest = people[0] ? people[0].age : Infinity;
      for (const p of people) {
        if (p.age < youngest) youngest = p.age;
      }
      return youngest;
    }

    return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
  }
}

{
  function fn() {
    function totalSalary() {
      return totalSalary.reduce((total, p) => total + p.salary, 0);
    }

    function youngestAge() {
      return Math.min(...people.map((p) => p.age));
    }

    return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
  }
}
