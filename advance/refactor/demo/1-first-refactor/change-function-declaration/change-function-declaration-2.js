/*
 * @Author: Hale
 * @Description: Change Function Declaration 改变函数声明（函数重命名） -> 迁移函数，适用于已发布的 API
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function circum(radius) {
    return 2 * Math.PI * radius;
  }
}

{
  function circum(radius) {
    return circumference(radius);
  }

  function circumference(radius) {
    return 2 * Math.PI * radius;
  }
}
