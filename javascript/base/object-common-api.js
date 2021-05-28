/*
 * @Author: Hale
 * @Description: object 常用 API
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/04
 */

{
  // for in 遍历 key 值
  const createObj = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  };
  createObj.prototype = {
    a: "a",
  };

  const obj = new createObj("x", "y", "z");

  for (const k in obj) {
    console.log(k, obj[k]);
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }

  // for (const key of obj) {      // 报错！普通对象不是迭代器对象，可以使用 Map 结构
  //   if (obj.hasOwnProperty(key)) {
  //     console.log(key, obj[key])
  //   }
  // }
}

{
  // 浅拷贝 Object.assign 解构赋值 -> 注意这个 API 会修改第一个参数的引用，一般使用空对象充当第一个参数
  const o1 = {
    a: 1,
    b: function () {
      console.log(123);
    },
  };

  const o2 = Object.assign({}, o1);
  console.log(o2);
  console.log({ ...o1 }); // 解构赋值浅拷贝
  console.log(o1 === o2); // false
}

{
  // 对象转数组 keys values entries
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };

  console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
  console.log(Object.values(obj)); // [ 1, 2, 3 ]
  console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
}

{
  // 定义对象属性
  const obj = {};
  Object.defineProperty(obj, "p", {
    get() {
      console.log("get");
    },
    set(val) {
      this.value = "this is " + val;
      console.log(val);
    },
  });

  console.log(obj);
  const p = obj.p;
  obj.p = "newP";
  console.log(obj);
}
