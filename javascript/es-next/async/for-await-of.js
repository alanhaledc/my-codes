/*
 * @Author: Hale
 * @Description: for await ... of 异步迭代器
 * @Date: 2020/01/29
 * @LastEditTime : 2020/02/05
 */

{
  async function* asyncGenerator() {
    var i = 0;
    while (i < 3) {
      yield i++;
    }
  }

  // ;(async function() {
  //   for await (num of asyncGenerator()) {
  //     console.log(num)
  //   }
  // })()
}

{
  var asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        i: 0,
        next() {
          if (this.i < 3) {
            return Promise.resolve({ value: this.i++, done: false });
          }

          return Promise.resolve({ done: true });
        },
      };
    },
  };

  (async function () {
    for await (num of asyncIterable) {
      console.log(num);
    }
  })();
}
