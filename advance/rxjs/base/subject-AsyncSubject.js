/*
 * @Author: Hale
 * @Description: AsyncSubject
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

// AsyncSubject 是另一个 Subject 变体，只有当 Observable 执行完成时(执行 complete())，
// 它才会将执行的最后一个值发送给观察者。
const { AsyncSubject } = require("rxjs");

const subject = new AsyncSubject();

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
subject.complete();
