/*
 * @Author: Hale
 * @Description: 事件模块
 * @Date: 2019/03/01
 * @LastEditTime: 2020/06/12
 */

const { EventEmitter } = require("events");

class Dog extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const simon = new Dog("simon");

// on 监听事件
// simon.on('bark', function(data) {
//   console.log(this.name, 'bark', data)
// })

const listener = function (data) {
  console.log(this.name, "bark", data);
};

// addListener 添加监听器 对比 on 可以取消
simon.addListener("bark", listener);

setInterval(() => {
  simon.emit("bark", 123); // 派发事件
}, 1000);

setTimeout(() => {
  // simon.removeAllListeners() // 删除所有监听器
  simon.removeListener("bark", listener); // 删除 bark 的监听
}, 5000);
