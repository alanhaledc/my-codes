/*
 * @Author: Hale
 * @Description: Freshness 对象字面量
 * @Date: 2020/02/26
 * @LastEditTime: 2020/02/26
 */

export {};

const obj: { name: string } = { name: "hale" };

function logName(something: { name: string }) {
  console.log(something.name);
}

const person = { name: "matt", job: "being awesome" };
const animal = { name: "cow", diet: "vegan, but has milk of own specie" };
const random = { note: `I don't have a name property` };

logName(person); // ok
// logName({ name: 'matt', job: 'being awesome' }) // Error `job` 属性不存在
logName(animal); // ok
// logName(random) // Error: 没有 `name` 属性
