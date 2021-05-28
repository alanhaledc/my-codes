/*
 * @Author: Hale
 * @Description: Referential Transparency 引用透明
 * @Date: 2019/10/27
 * @LastEditTime: 2019/10/27
 */

// An expression that can be replaced with its value without
// changing the behavior of the program is said to be referentially transparent.

// Say we have function greet:

const greet = () => "Hello World!";

// Any invocation of greet() can be replaced with Hello World! hence greet is referentially transparent.
