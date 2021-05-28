/*
 * @Author: Hale
 * @Description: ReplaySubject
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

// ReplaySubject 类似于 BehaviorSubject，它可以发送旧值给新的订阅者，但它还可以记录 Observable 执行的一部分。
const { ReplaySubject } = require("rxjs");

const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(5);
