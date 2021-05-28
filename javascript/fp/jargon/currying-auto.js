/*
 * @Author: Hale
 * @Description: Auto Currying 自动柯里化
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// Transforming a function that takes multiple arguments into one
// that if given less than its correct number of arguments returns a function that takes the rest.
// When the function gets the correct number of arguments it is then evaluated.

// lodash & Ramda have a curry function that works this way.

const _ = require("lodash");

const add = (x, y) => x + y;

const curriedAdd = _.curry(add);
curriedAdd(1, 2); // 3
curriedAdd(1); // y => 1 + y
curriedAdd(1)(2); // 3
