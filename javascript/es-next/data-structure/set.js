/*
 * @Author: Hale
 * @Description: Set 集合
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

// Set，类似于数组 Array，
// 但是它里面的值不能有重复的, 另外他的键和值相同
// Set 属性: size, constructor，
// Set 普通方法: add, has, delete, clear
// Set 遍历方法: keys()  values() entries() forEach

const set = new Set([1, 2, 2, 3, 3, 4, 5, "5"]);

console.log(set); // Set {1, 2, 3, 4, 5, '5'}
console.log(set.size); // 6
console.log(set.constructor); // [Function: Set]
console.log(set.has("5")); // true

set.add(100).add(fn);

function fn() {}

console.log(set);

set.delete(1);
console.log(set);

// set.clear()
// console.log(set)

console.log("-----------");

// 遍历 for...of
for (let key of set.keys()) {
  console.log(key);
}
for (let val of set.values()) {
  console.log(val);
}
for (let entry of set.entries()) {
  console.log(entry);
}
set.forEach((item, index) => console.log(index, item));

// 转换
// Map -> Array
console.log(Array.from(new Set([1, 2, 3, 4, 5])));
console.log([...new Set([1, 2, 3, 4, 5])]);

// Array -> Set
console.log(new Set([1, 2, 3, 3, 4, 4, 5]));

// 数组去重
console.log(Array.from(new Set([1, 2, 3, 3, 4, 4, 5]))); // 数组去重
