/*
 * @Author: Hale
 * @Description: 子进程
 * @Date: 2019/03/01
 * @LastEditTime: 2020/02/21
 */

process.on("message", function (msg) {
  console.log("child got message", msg);
});

process.send({ foo: "bar" });
