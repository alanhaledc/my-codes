/*
 * @Author: Hale
 * @Description: generic compatibility
 * @Date: 2021/12/15
 * @LastEditTime: 2021/12/15
 */

interface BaseInfo {
  name: string;
  age: number;
}

interface Info extends BaseInfo {
  gender: string;
}

function createUser<T extends BaseInfo = Info>(info: T) {
  return { ...info };
}

createUser({ name: "Hale", age: 20, gender: "male" });
createUser({ name: "Amy", age: 18, sex: "female" });
createUser({ name: "Bill", age: 22, nation: "China" });
