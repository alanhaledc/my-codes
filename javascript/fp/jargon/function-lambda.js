/*
 * @Author: Hale
 * @Description: Lambda 匿名函数
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// An anonymous function that can be treated like a value.

(function (a) {
  return a + 1;
});

(a) => a + 1;

// Lambdas are often passed as arguments to Higher-Order functions.
[1, 2].map((a) => a + 1); // [2, 3]

// You can assign a lambda to a variable.
const add1 = (a) => a + 1;

// Lambda Calculus
// A branch of mathematics that uses functions to create a universal model of computation.
