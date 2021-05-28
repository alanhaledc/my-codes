/*
 * @Author: Hale
 * @Description: 单次（一次）订阅和多次（重复）订阅
 * @Date: 2020/01/20
 * @LastEditTime : 2020/01/20
 */

const { Observable } = require("rxjs");

let time;
const waitOneSecondPromise = new Promise((resolve, reject) => {
  console.log("promise call");
  time = new Date().getTime();
  setTimeout(() => resolve("hello world"), 1000);
});

waitOneSecondPromise.then((val) => {
  console.log("promise 第一次", val, new Date().getTime() - time);
});

setTimeout(() => {
  waitOneSecondPromise.then((val) => {
    console.log("promise 第二次", val, new Date().getTime() - time); // 受第一次影响 因为 promise 只能执行一次
  });
}, 5000);

const observable = new Observable((subscriber) => {
  console.log("observable call");
  time = new Date().getTime();
  setTimeout(() => subscriber.next("hello world"), 1000);
});

observable.subscribe((val) => {
  console.log("observable 第一次", val, new Date().getTime() - time);
});

setTimeout(() => {
  observable.subscribe((val) => {
    console.log("observable 第二次", val, new Date().getTime() - time); // 不受第一次影响
  });
}, 5000);
