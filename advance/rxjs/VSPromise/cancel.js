/*
 * @Author: Hale
 * @Description: 取消执行
 * @Date: 2020/01/20
 * @LastEditTime : 2020/01/20
 */

const { interval } = require("rxjs");

const observable = interval(500);

const subscription = observable.subscribe((val) => console.log(val));

setTimeout(() => {
  subscription.unsubscribe(); // 取消
}, 3300);
