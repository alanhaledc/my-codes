/*
 * @Author: Hale
 * @Description: IIFE 立即执行函数表达式 Immediately-Invoked Function Expression
 * @Date: 2019/01/11
 * @LastEditTime: 2020/05/31
 */

(function (x) {
  console.log(x);
})(123); // 123

(function (x) {
  console.log(x);
})(123); // 123

+(function (x) {
  console.log(x);
})(123); // 123 (+,-,!)
