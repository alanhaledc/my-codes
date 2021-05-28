/*
 * @Author: Hale
 * @Description: refCount
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

// refCount 的作用是，当有第一个订阅者时，多播 Observable 会自动地启动执行，
// 而当最后一个订阅者离开时，多播 Observable 会自动地停止执行。

const { interval, Subject } = require("rxjs");
const { multicast, refCount } = require("rxjs/operators");
const source = interval(500);
const subject = new Subject();
const refCounted = source.pipe(multicast(subject), refCount());
let subscription1, subscription2;

console.log("observerA subscribed");
subscription1 = refCounted.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

setTimeout(() => {
  console.log("observerB subscribed");
  subscription2 = refCounted.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  });
}, 600);

setTimeout(() => {
  console.log("observerA unsubscribed");
  subscription1.unsubscribe();
}, 1200);

setTimeout(() => {
  console.log("observerB unsubscribed");
  subscription2.unsubscribe();
}, 2000);
