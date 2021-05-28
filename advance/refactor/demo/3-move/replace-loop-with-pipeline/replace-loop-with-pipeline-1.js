/*
 * @Author: Hale
 * @Description: Replace Loop with Pipeline 以管道取代循环 -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  const names = [];
  for (const i of input) {
    if (i.job === "programmer") names.push(i.name);
  }
}

{
  const names = input.filter((i) => i.job === "programmer").map((i) => i.name);
}
