/*
 * @Author: Hale
 * @Description: Applicative Functor 应用函子
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// An applicative functor is an object with an ap function.
// ap applies a function in the object to a value in another object of the same type.

// Implementation
Array.prototype.ap = function (xs) {
  return this.reduce((acc, f) => acc.concat(xs.map(f)), []);
};

// Example usage
[(a) => a + 1].ap([1]); // [2]

// This is useful if you have two objects and you want to apply a binary function to their contents.

// Arrays that you want to combine
const arg1 = [1, 3];
const arg2 = [4, 5];

// combining function - must be curried for this to work
const add = (x) => (y) => x + y;

const partiallyAppliedAdds = [add].ap(arg1); // [y => 1 + y, y => 3 + y]

// This gives you an array of functions that you can call ap on to get the result:

partiallyAppliedAdds.ap(arg2); // [5, 6, 7, 8]
