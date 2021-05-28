/*
 * @Author: Hale
 * @Description: Encapsulate Variable 封装变量（字段） -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
}

{
  let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

  function getDefaultOwner() {
    return defaultOwnerData;
  }

  function setDefaultOwner(arg) {
    defaultOwnerData = arg;
  }
}
