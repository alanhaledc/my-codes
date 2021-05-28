/*
 * @Author: Hale
 * @Description: 装饰器 decorator 规范一直在 stage2 现阶段需要 Babel 编译
 * @Date: 2019/04/04
 * @LastEditTime : 2020/02/05
 */

// @testDec(false)
class Demo {}

function testDec(flag) {
  return function (target) {
    target.isDec = flag;
  };
}

console.log(Demo.isDec);

function log(target, name, descriptor) {
  let oldValue = descriptor.value;
  descriptor.value = function () {
    console.log(`calling ${name} width`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}

class Math {
  // @log
  add(a, b) {
    return a + b;
  }
}

const m = new Math();
const result = m.add(2, 4);
console.log("result", result);
