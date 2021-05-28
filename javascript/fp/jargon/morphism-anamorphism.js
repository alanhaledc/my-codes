/*
 * @Author: Hale
 * @Description: Anamorphism 合成变质
 * @Date: 2019/10/27
 * @LastEditTime: 2019/10/27
 */

// An unfold function.
// An unfold is the opposite of fold (reduce).
// It generates a list from a single value.

const unfold = (f, seed) => {
  function go(f, seed, acc) {
    const res = f(seed);
    return res ? go(f, res[1], acc.concat([res[0]])) : acc;
  }
  return go(f, seed, []);
};

const countDown = (n) =>
  unfold((n) => {
    return n <= 0 ? undefined : [n, n - 1];
  }, n);

countDown(5); // [5, 4, 3, 2, 1]
