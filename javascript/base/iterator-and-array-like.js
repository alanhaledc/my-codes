/*
 * @Author: Hale
 * @Description: 可迭代对象 Iterator 和类数组对象 ArrayLike
 * @Date: 2019/10/21
 * @LastEditTime : 2020/02/04
 */

{
  const range = {
    from: 1,
    to: 5,
  };

  // for (const num of range) {
  //   console.log(num) // TypeError: range is not iterable
  // }
}

{
  const range = {
    from: 1,
    to: 5,
  };

  // 创建 Symbol.iterator 方法，使得 range 变成一个可迭代对象
  range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  };

  for (let num of range) {
    console.log(num); // 1 2 3 4 5
  }
}

{
  // 简化上面的代码
  const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true, value: undefined };
      }
    },
  };

  for (const num of range) {
    console.log(num); // 1 2 3 4 5
  }

  // 使用扩展运算符展开
  console.log([...range]); // [1, 2, 3, 4, 5]

  // 可迭代对象转数组
  const arr = Array.from(range);
  console.log(arr); // [1, 2, 3, 4, 5]
}

{
  // 字符串的迭代
  for (const char of "hello") {
    console.log(char); // h e l l o
  }
}

{
  // 获取字符串的迭代器
  const str = "hello";
  const iterator = str[Symbol.iterator]();
  while (true) {
    let res = iterator.next();
    if (res.done) break;
    console.log(res.value); // h e l l o
  }
}

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
