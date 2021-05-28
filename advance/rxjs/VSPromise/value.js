/*
 * @Author: Hale
 * @Description: 单值和多值
 * @Date: 2020/01/20
 * @LastEditTime : 2020/01/20
 */

const { Observable } = require("rxjs");

const promise = new Promise((resolve, reject) => {
  resolve(5);
  resolve(10);
});

promise.then((val) => console.log(val)); // 5

const observable = new Observable((subscriber) => {
  subscriber.next(5);
  subscriber.next(10);
});

observable.subscribe((val) => console.log(val)); // 5 10
