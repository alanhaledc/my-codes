/*
 * @Author: Hale
 * @Description: predicate 谓词
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/26
 */

// A predicate is a function that returns true or false for a given value.
// A common use of a predicate is as the callback for array filter.

const predicate = (a) => a > 2;

[1, 2, 3, 4].filter(predicate); // [3, 4]
