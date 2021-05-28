/*
 * @Author: Hale
 * @Description: Promise.resolve 和 Promise.reject 的用法
 * @Date: 2019/01/10
 * @LastEditTime: 2019/10/17
 */

const wait = (flag = true) => {
  return flag ? Promise.resolve("123") : Promise.reject("error");
};

// 基本等同
const wait1 = (flag = true) => {
  return new Promise((resolve, reject) => {
    return flag ? resolve("123") : reject("error");
  });
};

wait(true)
  .then((x) => console.log(x)) // 123
  .catch((err) => console.log(err));

wait1(false)
  .then((x) => console.log(x))
  .catch((err) => console.log(err)); // error

// const resolve = Promise.resolve('123456')
// resolve.then(x => console.log(x)) // 123456

// const reject = Promise.reject('error123456')
// reject.catch(err => console.log(err)) // error123456
