/*
 * @Author: Hale
 * @Description: WebSocket
 * @Date: 2019/01/11
 * @LastEditTime: 2020/06/06
 */

// WebSocket 协议在 2008 年诞生，2011 年成为国际标准。所有现代浏览器都已经支持了。

// 它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，
// 是真正的双向平等对话，属于[服务器推送技术](https://en.wikipedia.org/wiki/Push_technology)的一种。

// - 建立在 TCP 协议之上，服务器端的实现比较容易。
// - 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
// - 数据格式比较轻量，性能开销小，通信高效
// - 可以发送文本，也可以发送二进制数据。
// - 没有同源限制，客户端可以与任意服务器通信。
// - 协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。
// ws://example.com:80/some/path

var ws = new WebSocket("wss://echo.websocket.org");

ws.addEventListener("open", function () {
  ws.send("Hello WebSocket");
});

ws.addEventListener("message", function (event) {
  console.log(event.data);
  ws.close();
});

ws.addEventListener("close", function () {
  console.log("Connection closed");
});
