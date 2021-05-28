/*
 * @Author: Hale
 * @Description: Catamorphism
 * @Date: 2019/10/27
 * @LastEditTime: 2019/10/27
 */

// A reduceRight function that applies a function against an accumulator
// and each value of the array (from right-to-left) to reduce it to a single value.

const sum = (xs) => xs.reduceRight((acc, x) => acc + x, 0);

sum([1, 2, 3, 4, 5]); // 15
