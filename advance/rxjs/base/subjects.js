/*
 * @Author: Hale
 * @Description: subject 主体
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

const { Subject } = require("rxjs");

const subject = new Subject();

subject.subscribe({
  next(v) {
    console.log(`observerA: ${v}`);
  },
});

subject.subscribe({
  next(v) {
    console.log(`observerB: ${v}`);
  },
});

subject.next(1);
subject.next(2);
