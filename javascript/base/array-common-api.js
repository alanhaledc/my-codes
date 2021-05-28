/*
 * @Author: Hale
 * @Description: array 常用 API
 * @Date: 2019/01/09
 * @LastEditTime: 2020/05/31
 */

{
  // forEach 没有返回值
  const arr = [1, 2, 3];
  arr.forEach((item, index) => {
    console.log(index, item); // 0 1; 1 2; 2 3
  });
}

{
  // for of 迭代
  const arr = [1, 2, 3];
  for (const item of arr) {
    console.log("for...of", item); // 1, 2, 3
  }
}

{
  // for in 遍历索引
  const arr = [1, 2, 3];
  for (const index in arr) {
    console.log("for..in", index, arr[index]); // 0 1; 1 2; 2 3;
  }
}

{
  // for 遍历
  const arr = [1, 2, 3];
  for (let i = 0; i < arr.length; i++) {
    console.log("for", i, arr[i]); // 0 1; 1 2; 2 3;
  }
}

{
  // every
  const arr = [1, 2, 3];
  let result = arr.every((item) => item < 4);
  console.log(result); // true
}

{
  // some
  let arr = [1, 2, 3];
  let result = arr.some((item) => item > 4);
  console.log(result); // false
}

{
  // sort 排序
  let arr = [1, 4, 3, 5, 2];
  let arr2 = arr.sort((x, y) => y - x);
  console.log(arr2); // [5, 4, 3, 2, 1]
}

{
  // map 映射
  const arr = [1, 2, 3];
  const arr2 = arr.map((x) => x * x);
  console.log(arr2); // [1, 4, 9]
}

{
  // reduce 归纳
  const arr = [1, 2, 3];
  const arr2 = arr.reduce((acc, item) => acc + item);
  console.log(arr2); // 6
}

{
  // filter 筛选
  let arr = [1, 2, 3, 4];
  let arr2 = arr.filter((item) => item < 3);

  console.log(arr2); // [1, 2]
}

{
  // find 查找 => 返回值
  let arr = [1, 2, 3, 4];
  let index = arr.find((item) => item > 2);

  console.log(index); // 3
}

{
  // findIndex 查找 => 返回值的索引
  let arr = [1, 2, 3, 4];
  let index = arr.findIndex((item) => item > 2);

  console.log(index); // 2
}
