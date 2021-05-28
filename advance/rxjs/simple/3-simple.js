/*
 * @Author: Hale
 * @Description: 取消输出
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
      observer.next("stop me!");
      clearInterval(id);
    }
  }, 200);

  return () => {
    console.log("disposed!");
    clearInterval(id);
  };
}

const observer = {
  next: (value) => console.log(`next -> ${value}`),
  error: () => {},
  complete: () => console.log("complete"),
};

// const unSub = simpleObservable(observer)

// console.log('异步输出 + 取消')
// setTimeout(unSub, 1000)

console.log("异步输出");
simpleObservable(observer);
