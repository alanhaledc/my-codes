/*
 * @Author: Hale
 * @Description: HOF / High-Order Function 高阶函数
 * @Date: 2019/03/24
 * @LastEditTime: 2019/10/27
 */

// A function which takes a function as an argument and/or returns a function.

const filter = (predicate, xs) => xs.filter(predicate);

const is = (type) => (x) => Object(x) instanceof type;

filter(is(Number), [0, "1", 2, null]); // [ 0, 2 ]
