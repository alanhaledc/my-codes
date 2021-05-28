/*
 * @Author: Hale
 * @Description: interface 和 type 的一些区别
 * @Date: 2019/02/11
 * @LastEditTime: 2020/02/23
 */

export {};

{
  // 使用 interface 定义对象和函数
  interface User {
    name: string;
    age: number;
  }

  interface SetUser {
    (name: string, age: number): void;
  }
}

{
  // 使用 type 定义对象和函数 -> 注意有 =
  type User = {
    name: string;
    age: number;
  };

  type SetUser = (name: string, age: number) => void;
}

{
  // interface 扩展 interface -> 继承
  interface Name {
    name: string;
  }

  interface User extends Name {
    age: number;
  }
}

{
  // type 扩展 type -> 交叉类型
  type Name = {
    name: string;
  };

  type User = Name & { age: number };
}

{
  // interface 扩展 type -> 继承
  type Name = {
    name: string;
  };

  interface User extends Name {
    age: number;
  }
}

{
  // type 扩展 interface -> 交叉类型
  interface Name {
    name: string;
  }

  type User = Name & {
    age: number;
  };
}
