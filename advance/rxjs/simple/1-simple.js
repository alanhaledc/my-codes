/*
 * @Author: Hale
 * @Description: 简单实现 - 同步
 * @Date: 2020/01/04
 * @LastEditTime : 2020/01/04
 */

function simpleObservable(observer) {
  for (let i = 0; i < 10; i++) {
    observer.next(i);
  }
  observer.complete();
}

const observer = {
  next: (value) => console.log(`next -> ${value}`),
  error: () => {},
  complete: () => console.log("complete"),
};

console.log("同步输出");
simpleObservable(observer);
