/*
 * @Author: Hale
 * @Description: Monad 单子
 * @Date: 2019/03/24
 * @LastEditTime: 2019/10/27
 */

// A monad is an object with of and chain functions.
// chain is like map except it un-nests the resulting nested object.

// Implementation
Array.prototype.chain = function (fn) {
  return this.reduce((acc, item) => acc.concat(fn(item)), []); // concat flatten
};

Array.of("cat,dog", "fish,bird"); // [ 'cat,dog', 'fish,bird' ]

// Usage
Array.of("cat,dog", "fish,bird").chain((a) => a.split(",")); // [ 'cat', 'dog', 'fish', 'bird' ]

// Contrast to map
Array.of("cat,dog", "fish,bird").map((a) => a.split(",")); // [ [ 'cat', 'dog' ], [ 'fish', 'bird' ] ]

// of is also known as return in other functional languages.
// chain is also known as flatmap and bind in other languages.
