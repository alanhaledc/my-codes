/*
 * @Author: Hale
 * @Description: Separate Query from Modifier 将查询函数和修改函数分离 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function alertForMiscreant(people) {
    for (const p of people) {
      if (p === "Don") {
        setOffAlarms();
        return "Don";
      }
      if (p === "John") {
        setOffAlarms();
        return "John";
      }
    }
    return "";
  }

  // call
  const found = alertForMiscreant(people);
}

{
  function findMiscreant(people) {
    for (const p of people) {
      if (p === "Don") {
        return "Don";
      }
      if (p === "John") {
        return "John";
      }
    }
    return "";
  }

  function alertForMiscreant(people) {
    if (findMiscreant(people) !== "") setOffAlarms();
  }

  // call
  const found = findMiscreant(people);
  alertForMiscreant(people);
}
