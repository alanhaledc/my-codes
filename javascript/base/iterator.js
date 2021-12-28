/*
 * @Author: Hale
 * @Description: 可迭代对象 Iterator
 * @Date: 2019/10/21
 * @LastEditTime: 2021/12/28
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
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function* () {
      yield this.a;
      yield this.b;
      yield this.c;
    },
  };
  for (const num of range) {
    console.log(num); // 1 2 3
  }

  // 使用扩展运算符展开
  console.log([...range]); // [1, 2, 3]

  // 可迭代对象转数组
  const arr = Array.from(range);
  console.log(arr); // [1, 2, 3]
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
