/*
 * @Author: Hale
 * @Description: Monoid 独异点
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// An object with a function that "combines" that object with another of the same type.

// One simple monoid is the addition of numbers:

1 + 1; // 2

// In this case number is the object and + is the function.
// An "identity" value must also exist that when combined with a value doesn't change it.
// The identity value for addition is 0.

1 + 0; // 1

// It's also required that the grouping of operations will not affect the result (associativity):

1 + (2 + 3) === 1 + 2 + 3; // true

// Array concatenation also forms a monoid:
[1, 2].concat([3, 4]); // [1, 2, 3, 4]

// The identity value is empty array []
[1, 2].concat([]); // [1, 2]

// If identity and compose functions are provided, functions themselves form a monoid:

const identity = (a) => a;
const compose = (f, g) => (x) => f(g(x));

// foo is any function that takes one argument.
// compose(foo, identity) ≍ compose(identity, foo) ≍ foo
