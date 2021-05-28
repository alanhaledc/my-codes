/*
 * @Author: Hale
 * @Description: 延迟执行函数
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/18
 */

const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

// test
delay(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
);
