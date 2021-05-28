/*
 * @Author: Hale
 * @Description: Flow 模块
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const { sequelize } = require("..");
const { Sequelize, Model } = require("sequelize");

class Flow extends Model {}

Flow.init(
  {
    index: Sequelize.INTEGER,
    art_id: Sequelize.INTEGER,
    type: Sequelize.INTEGER,
  },
  {
    sequelize,
    tablaName: "flow",
  }
);

module.exports = { Flow };
