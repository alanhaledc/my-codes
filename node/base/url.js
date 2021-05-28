/*
 * @Author: Hale
 * @Description: url 模块
 * @Date: 2019/03/01
 * @LastEditTime: 2020/02/21
 */

const http = require("http");
const url = require("url");
const qs = require("querystring");

http
  .createServer((req, res) => {
    const urlData = url.parse(req.url); // 把 url 解析成对象
    console.log(urlData);

    const query = urlData.query; // 获取 query 值
    console.log(query);

    const parseQuery = qs.parse(query); // 把 query 值解析成对象
    console.log(parseQuery);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`query:${query}, parseQuery:${JSON.stringify(parseQuery)}`);
    res.end();
  })
  .listen(3000);
