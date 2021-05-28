/*
 * @Author: Hale
 * @Description: 手动实现 generator
 * @Date: 2019/08/21
 * @LastEditTime: 2020/03/31
 */
function generator(cb) {
  return (function () {
    const object = {
      next: 0,
      stop: function () {},
    };

    return {
      next: function () {
        const ret = cb(object);
        if (ret === undefined) return { value: undefined, done: false };
        return {
          value: ret,
          done: false,
        };
      },
    };
  })();
}

// test
const fn = function () {
  console.log(1);
  console.log(2);
  console.log(3);
};

const fnGen = generator(fn);

fnGen.next();
