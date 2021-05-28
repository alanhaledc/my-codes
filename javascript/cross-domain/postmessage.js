/*
 * @Author: Hale
 * @Description: postMessage
 * @Date: 2019/01/11
 * @LastEditTime: 2020/06/06
 */

// HTML5 新增 postMessage 方法，postMessage 可以实现跨文档消息传输。
// postMessage 方法是通过绑定 window 的 message 事件来监听发送跨文档消息传输内容。

// 窗口 A (http://A.com) 向跨域的窗口 B (http://B.com) 发送信息
window.postMessage("data", "http://B.com");

// 在窗口 B 中监听 message 事件
window.addEventListener(
  "message",
  function (event) {
    console.log(event.origin); // http://A.com 消息源的 URI
    console.log(event.source); // AWindow 消息源
    console.log(event.data); // data 数据
  },
  false
);

// 如果是窗口 B 向窗口 A 发送消息呢，原理也是一样的。
