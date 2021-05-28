/*
 * @Author: Hale
 * @Description: koa 使用 redis 存储 session
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const koa = require("koa");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");
const { host, port } = require("./config").redis;

const app = new koa();

app.keys = ["sWdsi8jd#_34@"];
app.use(
  session({
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
    // 连接数据库
    store: redisStore({
      all: `${host}:${port}`,
    }),
  })
);

app.use(async (ctx) => {
  ctx.session.name = "hale";
  ctx.body = "hello koa redis";
});

app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});
