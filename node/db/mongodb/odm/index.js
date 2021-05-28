/*
 * @Author: Hale
 * @Description: 数据库连接
 * @Date: 2019/03/01
 * @LastEditTime: 2020/02/21
 */

const mongoose = require("mongoose");
const Goods = require("./models/goods");
const { user, password, host, port, dbName } = require("./config").mongoDB;

// example: mongodb://user:password@127.0.0.1:3306/shop
// const DB_URL = `mongodb://${user}:${password}@${host}:${port}/${dbName}`

const DB_URL = `mongodb://${host}:${port}/${db}`; // 无用户名和密码

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb server connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

// 初始化数据库数据
const initDatabase = async () => {
  try {
    const goods = await Goods.find();
    if (goods.length === 0) {
      require("./init");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  mongoose,
  initDatabase: initDatabase(),
};
