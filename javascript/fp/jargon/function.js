/*
 * @Author: Hale
 * @Description: Function
 * @Date: 2019/10/27
 * @LastEditTime: 2019/10/27
 */

// A function f :: A => B is an expression
// - often called arrow or lambda expression
// - with exactly one (immutable) parameter of type A and exactly one return value of type B.
// That value depends entirely on the argument, making functions context-independant,
// or referentially transparent.
// What is implied here is that a function must not produce any hidden side effects
// - a function is always pure, by definition.
// These properties make functions pleasant to work with:
// they are entirely deterministic and therefore predictable.
//  Functions enable working with code as data, abstracting over behaviour:

// times2 :: Number -> Number
const times2 = (n) => n * 2;

[1, 2, 3].map(times2); // [2, 4, 6]
