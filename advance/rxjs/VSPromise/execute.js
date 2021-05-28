/*
 * @Author: Hale
 * @Description: 代码执行
 * @Date: 2020/01/20
 * @LastEditTime : 2020/01/20
 */

const { Observable } = require("rxjs");

// 创建时执行打印代码
const promise = new Promise((resolve, reject) => {
  console.log("promise call");
  resolve(10);
  console.log("promise end");
});

// 创建时不会执行打印代码，只有在订阅时才执行
const observable = new Observable((subscriber) => {
  console.log("I was called!");
});

// observable.subscribe()
