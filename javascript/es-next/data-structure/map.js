/*
 * @Author: Hale
 * @Description: Map 映射
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/05
 */

// Map，类似于对象 Object(字符串-值)， 也是键值对结构
// 但是它的键不只是 string，可以是任何数据类型 (值-值)
// Map 属性: size (类似 length)，
// Map 普通方法: get, set, has, delete, clear
// Map 遍历方法：keys()  values() entries() forEach

const sym = Symbol("sym");

function fn() {
  return {
    c: "d",
  };
}

{
  const map = new Map([
    ["a", 1],
    [1, "b"],
    [fn, true],
    [undefined, sym],
  ]);

  console.log(map); // Map {'a' => 1, 1 => 'b', [Function: fn] => true, undefined => Symbol(sym) }
  console.log(map.get(1)); // 'b'
  console.log(map.size); // 4
  console.log(map.constructor); // [Function: Map]
  console.log(map.has("a")); // true
}

console.log("-------------");

{
  const map = new Map();
  map.set("a", 1);
  map.set(1, "b");
  map.set(fn, true);
  map.set(undefined, sym);

  console.log(map);

  map.delete("a");
  console.log(map);

  // map.clear()
  // console.log(map)

  console.log("--------------");

  // 遍历和迭代 map.keys()  map.values() map.entries() forEach
  for (let key of map.keys()) {
    console.log(key);
  }
  for (let val of map.values()) {
    console.log(val);
  }
  for (let entry of map.entries()) {
    console.log(entry);
  }
  map.forEach((item, index) => console.log(index, item));

  // 转换
  // Map -> Array
  console.log([...map]);

  // Array -> Map
  console.log(
    new Map([
      ["a", 1],
      [2, "b"],
    ])
  );

  // Map -> Object
  function mapToObj(map) {
    const obj = Object.create(null);
    for (let [k, v] of map) {
      obj[k] = v;
    }
    return obj;
  }

  console.log(mapToObj(map));

  // Object -> Map
  function objToMap(obj) {
    const map = new Map();
    for (let k of Object.keys(obj)) {
      map.set(k, obj[k]);
    }
    return map;
  }

  console.log(objToMap({ a: 1, 2: "b" }));

  // Map -> JSON
  function mapToJson(map) {
    const isAllStrKey = [...map.keys()].every((i) => typeof i === "string");
    return isAllStrKey
      ? JSON.stringify(mapToObj(map))
      : JSON.stringify([...map]);
  }

  console.log(
    mapToJson(
      new Map([
        [true, 1],
        [false, 2],
      ])
    )
  );
  console.log(
    mapToJson(
      new Map([
        ["a", 1],
        ["b", 2],
      ])
    )
  );

  // JSON -> Map
  function jsonToMap(jsonStr) {
    const parseObj = JSON.parse(jsonStr);
    const isAllArray =
      Array.isArray(parseObj) && parseObj.every((i) => Array.isArray(i));
    return isAllArray ? new Map(parseObj) : objToMap(parseObj);
  }

  console.log(jsonToMap('{"a":1, "b":2}'));
  console.log(jsonToMap("[[true, 1], [false, 2]]"));
}
