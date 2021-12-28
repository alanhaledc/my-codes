/*
 * @Author: Hale
 * @Description: 可迭代对象 Iterator 和类数组对象 ArrayLike
 * @Date: 2019/10/21
 * @LastEditTime: 2021/12/28
 */

{
  // 类数组对象 ArrayLike
  // 1. 有索引
  // 2. 有 length 属性
  const arrayLike = {
    0: "hello",
    1: "world",
    length: 2,
  };

  // for (let item of arrayLike) {
  //   console.log(item) // TypeError: arrayLike is not iterable
  // }

  // 类数组转数组
  const arr = Array.from(arrayLike);
  console.log(arr); // ['hello', 'world']
}

{
  // 字符串转数组
  let str = "hello";
  const arr1 = [];
  for (const char of str) {
    arr1.push(char);
  }
  console.log(arr1); // [ 'h', 'e', 'l', 'l', 'o' ]
  console.log((arr2 = Array.from(str))); // [ 'h', 'e', 'l', 'l', 'o' ]
  console.log((arr3 = str.split(""))); // [ 'h', 'e', 'l', 'l', 'o' ]
}
