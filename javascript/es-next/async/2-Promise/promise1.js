/*
 * @Author: Hale
 * @Description: wait 函数改装成 Promise 函数
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

var wait = function () {
  var task = function () {
    console.log("执行完成");
  };
  setTimeout(task, 2000); // 异步 setTimeout
};

const waitPromise = function () {
  return new Promise((resolve, reject) => {
    const task = function () {
      console.log("执行完成");
      resolve();
    };
    setTimeout(task, 2000);
  });
};

const waitResult = wait();
waitPromise
  .then(
    () => console.log("ok1"),
    () => console.log("err1")
  )
  .then(
    () => console.log("ok2"),
    () => console.log("err2")
  );
