/*
 * @Author: Hale
 * @Description: deep clone 深拷贝
 * @Date: 2019/01/09
 * @LastEditTime: 2020/05/31
 */

{
  // 深拷贝：使用递归，只处理了普通对象和数组
  const cloneDeep = (src) => {
    const clone = Object.assign({}, src); // 浅拷贝
    // 遍历 递归
    Object.keys(clone).forEach(
      (key) =>
        (clone[key] =
          typeof src[key] === "object" ? cloneDeep(src[key]) : src[key])
    );
    // 处理数组
    return Array.isArray(src) && src.length
      ? (clone.length = obj.length) && Array.from(clone) // 非空数组，设置 length 属性，转换成数组
      : Array.isArray(src)
      ? Array.from(src) // 空数组不需要设置 length 属性
      : clone; // 对象
  };
}

{
  // 深拷贝：使用 JSON 只对普通对象和数组有效
  const cloneDeep = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
}

{
  // 使用第三方库，全面完美，对大部分类型都有效
  const _ = require("lodash");
  const a = {};
  const b = _.cloneDeep(a);
  console.log(a === b); // false
}

{
  // 深拷贝 使用缓存
  function deepClone(obj, hash = new WeakMap()) {
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (obj == null || typeof obj !== "object") {
      return obj;
    }
    if (hash.has(obj)) {
      return hash.get(obj);
    }

    let ret = new obj.constructor();
    hash.set(obj, ret);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret[key] = deepClone(obj[key], hash);
      }
    }
    return ret;
  }
}

{
  // 深拷贝 无缓存
  function deepClone(obj) {
    if (obj == null || typeof obj !== "object") {
      return obj;
    }

    let ret = new obj.constructor();

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret[key] = deepClone(obj[key]);
      }
    }

    return ret;
  }
}
