/*
 * @Author: Hale
 * @Description: Lazy Evaluation 惰性求值
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// Lazy evaluation is a call-by-need evaluation mechanism that delays the evaluation of an expression
// until its value is needed. In functional languages,
// this allows for structures like infinite lists,
// which would not normally be available in an imperative language
// where the sequencing of commands is significant.

const rand = function* () {
  while (1 < 2) {
    yield Math.random();
  }
};

const randIter = rand();
randIter.next(); // Each execution gives a random value, expression is evaluated on need.
