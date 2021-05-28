/*
 * @Author: Hale
 * @Description: 生成随机数的函数
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

// 生成 [min, max] 范围的随机整数 min <= x <= max
function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 生成 [min, max) 范围的随机整数 min <= x < max
function generateRandomInt2(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// 生成 (min, max) 范围的随机整数 min < x < max
function generateRandomInt3(min, max) {
  return Math.ceil(Math.random() * (max - min - 1) + min);
}

// 生成区间 [0, max] 范围的整数 0 <= x <= max
function generateRandomInt4(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

// 生成区间 [0, max) 范围的整数 0 <= x < max
function generateRandomInt5(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// 生成区间 (0, max) 范围的整数 0 < x < max
function generateRandomInt6(max) {
  return Math.ceil(Math.random() * Math.floor(max - 1));
}

// 生成 n 个 [min, max] 范围的随机整数数组 min <= n[i] <= max
function generateRandomIntArray(n, min, max) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return arr;
}

// test
const n = 10000000;
const min = -55;
const max = 100000;
const arr = generateRandomIntArray(n, min, max);

// test Int
for (let i = 0; i < n; i++) {
  const int = generateRandomInt(min, max);
  if (int < min || int > max) {
    console.log("Int out of range");
  }
}

// test Int2
for (let i = 0; i < n; i++) {
  const int = generateRandomInt2(min, max);
  if (int < min || int >= max) {
    console.log("Int2 out of range");
  }
}

// test Int3
for (let i = 0; i < n; i++) {
  const int = generateRandomInt3(min, max);
  if (int <= min || int >= max) {
    console.log("Int3 out of range");
  }
}

// test int4
for (let i = 0; i < n; i++) {
  const int = generateRandomInt4(max);
  if (int < 0 || int > max) {
    console.log("int4 out of range");
  }
}

// test int5
for (let i = 0; i < n; i++) {
  const int = generateRandomInt5(max);
  if (int < 0 || int >= max) {
    console.log("int5 out of range");
  }
}

// test int6
for (let i = 0; i < n; i++) {
  const int = generateRandomInt6(max);
  if (int <= 0 || int >= max) {
    console.log("int6 out of range");
  }
}

// test arr
for (let i = 0; i < n; i++) {
  if (arr[i] < min || arr[i] > max) {
    console.log("arr out of range");
  }
}

console.log("Test Completed.");
