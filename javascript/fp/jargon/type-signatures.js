/*
 * @Author: Hale
 * @Description: type signatures 类型签名
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// Often functions in JavaScript will include comments
// that indicate the types of their arguments and return values.

// There's quite a bit of variance across the community but they often follow the following patterns:

// functionName :: firstArgType -> secondArgType -> returnType

// add :: Number -> Number -> Number
const add = (x) => (y) => x + y;

// increment :: Number -> Number
const increment = (x) => x + 1;

// If a function accepts another function as an argument it is wrapped in parentheses.

// call :: (a -> b) -> a -> b
const call = (f) => (x) => f(x);

// The letters a, b, c, d are used to signify that the argument can be of any type.
// The following version of map takes a function
// that transforms a value of some type a into another type b,
// an array of values of type a, and returns an array of values of type b.

// map :: (a -> b) -> [a] -> [b]
const map = (f) => (list) => list.map(f);
