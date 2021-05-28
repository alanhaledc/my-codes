/*
 * @Author: Hale
 * @Description: pipe 和 stream
 * @Date: 2019/03/01
 * @LastEditTime: 2020/06/14
 */

const http = require("http");
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream(path.join(__dirname, "./file1.txt"));
    res.writeHead(200, { "Content-Type": "application/x-gzip" });
    readStream.pipe(zlib.createGzip()).pipe(res);
  })
  .listen(3000);

// 读取流才能设置 pipe 流入
// xxx.pipe(yyy) xxx 通过 pipe 流入到 yyy
// xxx -> yyy 记忆: 流入括号里面
