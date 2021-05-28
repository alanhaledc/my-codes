/*
 * @Author: Hale
 * @Description: WeakSet 弱集合
 * @Date: 2019/04/18
 * @LastEditTime : 2020/02/05
 */

// WeakSet 结构与 Set 类似，也是不重复的值的集合。
// 但是，它与 Set 有两个区别
// 1. WeakSet 的成员只能是对象，而不能是其他类型的值
// 2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
// 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
// WeakSet 没有属性，无法遍历，垃圾回收机制无法获取到
// WeakSet 方法：add delete has (not clear)
// WeakSet 使用场景: 储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

const ws = new WeakSet();
const obj = {};
const arr = [];
const arr1 = [];

ws.add(obj);
ws.add(arr);

console.log(ws.has(obj)); // true
console.log(ws.has(arr)); // true
console.log(ws.has(arr1)); // false

ws.delete(arr);
console.log(ws.has(arr)); // false
