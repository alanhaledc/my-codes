/*
 * @Author: Hale
 * @Description: CORS 跨域
 * @Date: 2019/01/11
 * @LastEditTime : 2020/02/04
 */

// 服务器代码如下, 不同后端语言写法可能不一样
// CORS 只需要在服务器端设置（设置 HTTP 响应头字段）即可，客户端不需要设置；
// 客户端只需要支持 CORS 这个功能就可以了，目前 IE10 以上的浏览器都支持。

// 必需，值若为 * 而为支持所有的域名请求，不建议这样写
response.setHeader("Access-Control-Allow-Origin", "http://a.com, http://b.com");

// 如果浏览器需要设置 Access-Control-Request-Headers 字段，则该字段必需
response.setHeader("Access-Control-Allow-Header", "X-Requested-With");

// 必需，支持请求的方法
response.setHeader(
  "Access-Control-Allow-Methods",
  "PUT,POST,GET,DELETE,OPTIONS"
);

// 可选，接受跨域的 cookie
response.setHeader("Access-Control-Allow-Credentials", "true");

// ... 其他设置
