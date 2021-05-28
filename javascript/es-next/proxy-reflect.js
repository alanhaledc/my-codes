/*
 * @Author: Hale
 * @Description: Proxy 和 Reflect
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

const obj = {
  name: "Hale",
};

const proxyObj = new Proxy(obj, {
  get(target, key, receiver) {
    console.log(`get value => ${p} : ${target[p]}`);
    Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(`change value => ${p} : ${target[p]} => ${value}`);
    Reflect.set(target, key, value, receiver);
  },
});

const name = proxyObj.name;
proxyObj.name = "Amy";
