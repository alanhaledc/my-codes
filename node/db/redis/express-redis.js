/*
 * @Author: Hale
 * @Description: express 使用 redis 存储 session
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const redis = require("redis");
const { port, host } = require("./config").redis;
const redisClient = redis.createClient(port, host); // 连接数据库

redisClient.on("err", (err) => console.error(err));

const app = express();

app.use(
  session({
    secret: "sWdsi8jd#_34@",
    // 实际开放下面 2 项建议设置为 false
    resave: true, // false 不重复保存，即不会重置 val 的值
    saveUninitialized: true, // false 不保存未初始化的值，登录后才保存 session
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
    store: new RedisStore({
      client: redisClient,
    }),
  })
);

app.use((req, res) => {
  req.session.name = "hale";
  res.json("hello express redis");
});

app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});
