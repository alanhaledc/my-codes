/*
 * @Author: Hale
 * @Description: ReplaySubject
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

const { ReplaySubject } = require("rxjs");

// 除了缓冲数量，你还可以指定 window time (以毫秒为单位)来确定多久之前的值可以记录。
const subject = new ReplaySubject(100, 500 /* windowTime */);

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

let i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(() => {
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  });
}, 1000);

// 从下面的输出可以看出，第二个观察者得到的值是3、4、5，这三个值是订阅发生前的500毫秒内发生的：
