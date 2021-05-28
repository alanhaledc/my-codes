/*
 * @Author: Hale
 * @Description: WeakMap 弱映射
 * @Date: 2019/04/18
 * @LastEditTime: 2019/10/17
 */

// WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合
// 与 Map 的区别有两点。
// 1. WeakMap 只接受对象作为键名（null除外），不接受其他类型的值作为键名。
// 2. 其次，WeakMap 的键名所指向的对象，不计入垃圾回收机制。和 WeakSet 类似。
// WeakMap 没有属性，不能遍历，垃圾回收机制无法获取到
// WeakMap 方法: get set has delete (not clear)
// WeakMap 使用场景：应用的典型场合就是 DOM 节点作为键名
// WeakMap 使用场景2：部署私有属性

const wm = new WeakMap();

let key = {};
let obj = { a: 1 };

wm.set(key, obj);
obj = null;
console.log(wm.get(key)); // { a: 1 } 键名是弱引用，键值不是弱引用
console.log(wm.has(key)); // true
