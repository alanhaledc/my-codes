/*
 * @Author: Hale
 * @Description: Substitute Algorithm 替换算法 -> 简单示例
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  function foundPerson(people) {
    for (let i = 0; i < people.length; i++) {
      if (people[i] === "Don") {
        return "Don";
      }
      if (people[i] === "John") {
        return "John";
      }
      if (people[i] === "Kent") {
        return "Kent";
      }
    }
    return "";
  }
}

{
  function foundPerson(people) {
    const candidates = ["Don", "John", "Kent"];
    return people.find((p) => candidates.includes(p)) || "";
  }
}
