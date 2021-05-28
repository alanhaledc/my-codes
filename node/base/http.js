/*
 * @Author: Hale
 * @Description: HTTP 模块
 * @Date: 2019/03/01
 * @LastEditTime: 2020/02/21
 */

const http = require("http");

http
  .createServer((req, res) => {
    const method = req.method.toLowerCase();
    console.log(req.headers);
    const contentType = req.headers["content-type"];

    if (method === "get") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>hello world</h1>");
      res.end();
    }

    if (method === "post") {
      if (contentType === "application/x-www-form-urlencoded") {
      }

      if (contentType === "application/json") {
        let data = "";

        req.on("data", (chunk) => {
          data += chunk.toString();
        });

        req.on("end", () => {
          data = JSON.parse(data);
          res.writeHead(200, { "Content-type": "application/json" });
          res.write(JSON.stringify(data));
          res.end();
        });
      }
    }
  })
  .listen(3000);
