/*
 * @Author: Hale
 * @Description: interface 接口
 * @Date: 2019/02/11
 * @LastEditTime: 2020/02/23
 */

export {};

// 两个相同的 interface 可以进行接口合并；
interface User {
  name: string;
  age: number;
}

interface User {
  say(word: string): void;
}

// 合并后的接口
// interface User {
//   name: string
//   age: number
//   say(word: string): void
// }

class Person {}

// interface 可以继承类
interface Teacher extends Person {}
