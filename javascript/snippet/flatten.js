/*
 * @Author: Hale
 * @Description: flatten 数组降维
 * @Date: 2019/02/17
 * @LastEditTime: 2020/05/31
 */

{
  // reduce 深度参数
  const flatten = (arr, depth = 1) =>
    arr.reduce(
      (acc, item) =>
        acc.concat(
          depth > 1 && Array.isArray(item) ? flatten(item, depth - 1) : item
        ),
      []
    );

  // test
  console.log(flatten([1, 2, [3, 4, [5, 6]]], 2));
}

{
  // reduce
  const flatten = (arr) =>
    arr.reduce(
      (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
      []
    );

  // test
  console.log(flatten([1, 2, [3, 4, [5, 6]]]));
}

{
  // 解构赋值
  const flatten = (arr) => {
    while (arr.some((item) => Array.isArray(item))) {
      arr = [].concat(...arr);
    }
    return arr;
  };

  // test
  console.log(flatten([1, 2, [3, 4, [5, 6]]]));
}

{
  // for of
  const flatten = (arr) => {
    let res = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        res = res.concat(flatten(item));
      } else {
        res.push(item);
      }
    }
    return res;
  };

  // test
  console.log(flatten([1, 2, [3, 4, [5, 6]]]));
}

{
  // 字符串转换
  const flatten = (arr) =>
    arr
      .join(",")
      .split(",")
      .map((item) => Number(item));

  // test
  console.log(flatten([1, 2, [3, 4, [5, 6]]]));
}

{
  // ES2019 API / Node.js v12
  console.log([1, 2, [3, 4, [5, 6]]].flat(Infinity));
}
