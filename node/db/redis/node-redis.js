/*
 * @Author: Hale
 * @Description: 使用 redis 库操作 redis
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const redis = require("redis");
const { port, host } = require("./config").redis;

const redisClient = redis.createClient(port, host); // 创建连接

redisClient.on("error", (err) => {
  console.error(err);
});

// 设置 key
redisClient.set("name", "hale", redis.print);

// 获取 key
redisClient.get("name", (err, val) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("val", val);

  redisClient.quit();
});
