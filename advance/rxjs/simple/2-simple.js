/*
 * @Author: Hale
 * @Description: 简单实现 - 异步
 * @Date: 2020/01/04
 * @LastEditTime : 2020/01/04
 */
function simpleObservable(observer) {
  let i = 0;

  const id = setInterval(() => {
    if (i < 10) {
      observer.next(i++);
    } else {
      observer.complete();
      clearInterval(id);
    }
  }, 200);
}

const observer = {
  next: (value) => console.log(`next -> ${value}`),
  error: () => {},
  complete: () => console.log("complete"),
};

console.log("异步输出");
simpleObservable(observer);
