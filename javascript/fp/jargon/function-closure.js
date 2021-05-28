/*
 * @Author: Hale
 * @Description: closure 闭包
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// A closure is a way of accessing a variable outside its scope.

const addTo = (x) => (y) => x + y;

var addToFive = addTo(5);
addToFive(3); // returns 8
