/*
 * @Author: Hale
 * @Description: Setoid
 * @Date: 2019/10/27
 * @LastEditTime: 2019/10/27
 */

// An object that has an equals function which can be used to compare other objects of the same type.

// Make array a setoid:

Array.prototype.equals = function (arr) {
  const len = this.length;
  if (len !== arr.length) return false;

  for (let i = 0; i < len; i++) {
    if (this[i] !== arr[i]) {
      return false;
    }
  }

  return true;
};
[1, 2].equals([1, 2]); // true
[1, 2].equals([0]); // false
