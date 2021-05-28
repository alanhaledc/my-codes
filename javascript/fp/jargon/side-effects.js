/*
 * @Author: Hale
 * @Description: Side Effect 副作用
 * @Date: 2019/10/26
 * @LastEditTime: 2019/10/26
 */

// A function or expression is said to have a side effect if apart from returning a value,
// it interacts with (reads from or writes to) external mutable state.

const differentEveryTime = new Date();

console.log("IO is a side effect!");
