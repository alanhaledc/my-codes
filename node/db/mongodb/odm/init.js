/*
 * @Author: Hale
 * @Description: 导入数据到数据库
 * @Date: 2019/03/01
 * @LastEditTime: 2019/10/18
 */

const User = require("./models/user");
const Goods = require("./models/goods");
const Ship = require("./models/ship");

const goodsData = require("../data/goods");
const userData = require("../data/users");
const shipData = require("../data/ship");

Goods.insertMany(goodsData, (err) => {
  if (err) throw err;
  console.log("goods数据导入成功");
});

User.insertMany(userData, (err) => {
  if (err) throw err;
  console.log("user数据导入成功");
});

Ship.insertMany(shipData, (err) => {
  if (err) throw err;
  console.log("ship数据导入成功");
});
