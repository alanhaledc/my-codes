/*
 * @Author: Hale
 * @Description: 同步和异步
 * @Date: 2020/01/20
 * @LastEditTime : 2020/01/20
 */

const { Observable } = require("rxjs");

const promise = new Promise((resolve, reject) => {
  resolve("promise 10");
});
promise.then((val) => console.log(val)); // then 方法一直都是异步执行
console.log("I am sync code after promise!");

const observable = new Observable((subscriber) => {
  subscriber.next("observable 10");
  setTimeout(() => {
    subscriber.next("observable 20");
  }, 1000);
});
observable.subscribe((val) => console.log(val)); // 根据情况同步执行还是异步执行
console.log("I am sync code after observable!");
