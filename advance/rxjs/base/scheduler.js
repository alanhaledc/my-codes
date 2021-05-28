/*
 * @Author: Hale
 * @Description: scheduler 调度器
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

const { Observable, asyncScheduler } = require("rxjs");
const { observeOn } = require("rxjs/operators");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
}).pipe(observeOn(asyncScheduler)); // 异步调度

console.log("just before subscribe");
observable.subscribe({
  next(v) {
    console.log("got value " + v);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});
console.log("just after subscribe");
