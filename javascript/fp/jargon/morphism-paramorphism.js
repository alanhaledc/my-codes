/*
 * @Author: Hale
 * @Description: Paramorphism 同质异晶
 * @Date: 2019/10/27
 * @LastEditTime: 2019/10/27
 */

// A function just like reduceRight. However, there's a difference:

// In paramorphism, your reducer's arguments are the current value,
// the reduction of all previous values, and the list of values that formed that reduction.

// Obviously not safe for lists containing `undefined`,
// but good enough to make the point.
const para = (reducer, accumulator, elements) => {
  if (elements.length === 0) {
    return accumulator;
  }

  const head = elements[0];
  const tail = elements.slice(1);

  return reducer(head, tail, para(reducer, accumulator, tail));
};

const suffixes = (list) => para((x, xs, suffxs) => [xs, ...suffxs], [], list);

suffixes([1, 2, 3, 4, 5]); // [[2, 3, 4, 5], [3, 4, 5], [4, 5], [5], []]

// The third parameter in the reducer (in the above example,
// [x, ... xs]) is kind of like having a history of what got you to your current acc value.
