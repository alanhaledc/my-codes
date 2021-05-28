/*
 * @Author: Hale
 * @Description: child process 子进程
 * @Date: 2019/03/01
 * @LastEditTime: 2019/10/18
 */

const cp = require("child_process");
const path = require("path");

const n = cp.fork(path.join(__dirname, "./child-process")); // 启动子进程

// 监听子进程的 message 事件
n.on("message", function (msg) {
  console.log("parent got message", msg);
});

// 发送消息到子进程
n.send({ hello: "world" });
