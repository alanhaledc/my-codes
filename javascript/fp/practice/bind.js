/*
 * @Author: Hale
 * @Description: Function Bind
 * @Date: 2019/03/24
 * @LastEditTime: 2021/08/26
 */

// 函数绑定
const bind = (fn, context) => (...args) => fn.apply(context, args);

// test
global.value = "123"; // for Node.js

let obj = {
  value: "myValue",
};

function getValue() {
  console.log(this.value);
}

const f1 = bind(getValue, obj);

getValue();
f1();
