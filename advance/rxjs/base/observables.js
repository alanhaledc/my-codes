/*
 * @Author: Hale
 * @Description: observable 可观察对象
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
    subscriber.next(5);
  }, 1000);
  subscriber.next(6);
});

console.log("just before subscribe");
observable.subscribe({
  next(x) {
    console.log("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});
console.log("just after subscribe");
