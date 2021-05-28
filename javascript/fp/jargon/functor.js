/*
 * @Author: Hale
 * @Description: Functor 函子
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// An object that implements a map function which,
// while running over each value in the object to produce a new object, adheres to two rules:

// Preserves identity 一致性
// object.map(x => x) ≍ object

// Composable 组合性
// object.map(compose(f, g)) ≍ object.map(g).map(f)

// (f, g are arbitrary functions)
// A common functor in JavaScript is Array since it abides to the two functor rules:

[1, 2, 3].map((x) => x); // = [1, 2, 3]

// and

const f = (x) => x + 1;
const g = (x) => x * 2;

[1, 2, 3].map((x) => f(g(x))); // = [3, 5, 7]
[1, 2, 3].map(g).map(f); // = [3, 5, 7]
