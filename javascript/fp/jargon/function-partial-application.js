/*
 * @Author: Hale
 * @Description: Partial Application 偏函数应用
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// Partially applying a function means creating a new function by pre-filling
// some of the arguments to the original function.

// Helper to create partially applied functions
// Takes a function and some arguments
const partial = (f, ...args) =>
  // returns a function that takes the rest of the arguments
  (...moreArgs) =>
    // and calls the original function with all of them
    f(...args, ...moreArgs);

// Something to apply
const add3 = (a, b, c) => a + b + c;

// Partially applying `2` and `3` to `add3` gives you a one-argument function
const fivePlus = partial(add3, 2, 3); // c => 2 + 3 + c

fivePlus(4); // 9

// You can also use Function.prototype.bind to partially apply a function in JS

const add1More = add3.bind(null, 2, 3); // c => 2 + 3 + c

// Partial application helps create simpler functions from more complex ones by baking in data
// when you have it. Curried functions are automatically partially applied.
