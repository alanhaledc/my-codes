/*
 * @Author: Hale
 * @Description: subscription 订阅
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

const { interval } = require("rxjs");

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe((x) => console.log("first: " + x));
const childSubscription = observable1.subscribe((x) =>
  console.log("second: " + x)
);

subscription.add(childSubscription);

setTimeout(() => {
  subscription.unsubscribe(); // 取消订阅
}, 1000);
