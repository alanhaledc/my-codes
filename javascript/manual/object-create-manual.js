/*
 * @Author: Hale
 * @Description: 手动实现 Object.create()
 * @Date: 2020/03/31
 * @LastEditTime: 2020/03/31
 */

const create = (proto) => {
  function F() {}
  F.prototype = proto;
  return new F();
};

// test
const obj = { name: "hale" };
const o1 = Object.create(obj);
const o2 = create(obj);
console.log(o1.name);
console.log(o2.name);
