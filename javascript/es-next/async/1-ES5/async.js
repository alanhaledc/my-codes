/*
 * @Author: Hale
 * @Description: ES5 的异步
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

var wait = function () {
  var task = function () {
    console.log("执行完成");
  };
  setTimeout(task, 2000); // 异步 setTimeout
};

wait();
