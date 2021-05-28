/*
 * @Author: Hale
 * @Description: 手动实现 JSON.stringify
 * @Date: 2019/03/30
 * @LastEditTime: 2019/10/18
 */

const jsonStringify = (src) => {
  const type = typeof src;
  if (type !== "object" || type === null) {
    if (/string|undefined|function/.test(type)) {
      src = `"${src}"`;
    }
    return String(src);
  } else {
    let json = [];
    arr = src && src.constructor === Array;
    for (let key in src) {
      let val = src[key];
      const type = typeof val;
      if (/string|undefined|function/.test(type)) {
        val = `"${val}"`;
      } else if (type === "object") {
        val = jsonStringify(val);
      }
      json.push((arr ? "" : `"${key}":`) + String(val));
    }
    return arr ? `[${String(json)}]` : `{${String(json)}}`;
  }
};

// test
const j1 = jsonStringify({ x: 5 });
const j2 = jsonStringify([1, "false", false]);
const j3 = jsonStringify({ b: undefined });
console.log(j1);
console.log(j2);
console.log(j3);
