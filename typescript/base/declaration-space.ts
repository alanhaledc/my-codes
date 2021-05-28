/*
 * @Author: Hale
 * @Description: Declaration Space 声明空间 -> 类型声明空间和变量声明空间，不能混淆、乱用
 * @Date: 2020/02/26
 * @LastEditTime: 2020/02/26
 */

export {};

// 类型声明空间
class Foo {}
interface Bar {}
type Bas = {};

// 变量声明空间
class Baz {}
var someVar = Foo;
var someOtherVar = 123;
