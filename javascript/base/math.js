/*
 * @Author: Hale
 * @Description: Math 用法
 * @Date: 2019/04/17
 * @LastEditTime: 2020/04/16
 */

// 绝对值取整
console.log(Math.abs(-1)); // 1
console.log(Math.abs(-1.5)); // 1.5

// 四舍五入取整
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.4)); // 1
console.log(Math.round(-1.5)); // -1
console.log(Math.round(-1.6)); // -2

// 向下取整
console.log(Math.floor(1.5)); // 1
console.log(Math.floor(1.4)); // 1
console.log(Math.floor(-1.5)); // -2
console.log(Math.floor(-1.6)); // -2

// 向上取整
console.log(Math.ceil(1.5)); // 2
console.log(Math.ceil(1.4)); // 2
console.log(Math.ceil(-1.5)); // -1
console.log(Math.ceil(-1.6)); // -1

// 取最大值
console.log(Math.max(9, -5)); // 9
console.log(Math.max(-9, 11, -1, 12)); // 12

// 取最小值
console.log(Math.min(9, -5)); // -5
console.log(Math.min(-9, 11, -1, 12)); // -9

// 平方根
console.log(Math.sqrt(16)); // 4

// 对数
console.log(Math.log(8)); // 2.0794415416798357
console.log(Math.log2(8)); // 3
console.log(Math.log10(8)); // 0.9030899869919435
console.log(Math.log1p(8)); // 2.1972245773362196

// 开方
console.log(Math.pow(4, 2)); // 16
console.log(Math.pow(2, 3)); // 8

// 随机数 返回 [0, 1) 范围的随机数
console.log(Math.random());
