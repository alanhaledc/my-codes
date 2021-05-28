/*
 * @Author: Hale
 * @Description: Replace Inline Code with Function Call 以函数调用取代内联代码 -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  let appliesToMass = false;
  for (const s of states) {
    if (s === "MA") {
      appliesToMass = true;
    }
  }
}

{
  appliesToMass = states.includes("MA");
}
