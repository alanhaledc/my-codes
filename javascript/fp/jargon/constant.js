/*
 * @Author: Hale
 * @Description: Constant 常量
 * @Date: 2019/10/26
 * @LastEditTime: 2019/10/27
 */

// A variable that cannot be reassigned once defined.

const five = 5;
const john = Object.freeze({ name: "John", age: 30 });

// Constants are referentially transparent.
// That is, they can be replaced with the values that they represent without affecting the result.

// With the above two constants the following expression will always return true.

john.age + five === { name: "John", age: 30 }.age + 5; // true
