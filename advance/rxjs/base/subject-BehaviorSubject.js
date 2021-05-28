/*
 * @Author: Hale
 * @Description: BehaviorSubject 行为主体
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

// Subject 的其中一个变体就是 BehaviorSubject，它有一个“当前值”的概念。
// 它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。

const { BehaviorSubject } = require("rxjs");
const subject = new BehaviorSubject(0); // 0 is the initial value

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(3);
