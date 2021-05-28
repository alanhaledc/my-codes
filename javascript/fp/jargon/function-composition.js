/*
 * @Author: Hale
 * @Description: Function Composition 函数组合
 * @Date: 2019/03/24
 * @LastEditTime: 2019/10/27
 */

// The act of putting two functions together to form a third function
// where the output of one function is the input of the other.

const compose = (f, g) => (a) => f(g(a)); // Definition

const floorAndToString = compose((val) => val.toString(), Math.floor); // Usage

floorAndToString(121.212121); // '121'
