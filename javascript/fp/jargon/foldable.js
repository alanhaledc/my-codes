/*
 * @Author: Hale
 * @Description: Foldable 可折叠
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// An object that has a reduce function that applies a function against an accumulator
// and each element in the array (from left to right) to reduce it to a single value.

const sum = (list) => list.reduce((acc, val) => acc + val, 0);
sum([1, 2, 3]); // 6
