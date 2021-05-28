/*
 * @Author: Hale
 * @Description: Idempotent 幂等
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/26
 */

// A function is idempotent if reapplying it to its result does not produce a different result.

// f(f(x)) ≍ f(x)

Math.abs(Math.abs(10));

const sort = (arr) => arr.sort();

sort(sort(sort([2, 1])));
