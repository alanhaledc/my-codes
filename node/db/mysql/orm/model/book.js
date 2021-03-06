/*
 * @Author: Hale
 * @Description: Book 模块
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const util = require("util");
const axios = require("axios");
const { Sequelize, Model, Op } = require("sequelize");
const { sequelize } = require("..");
const { detailUrl, keywordUrl } = require("../config").yushu;
const { Favor } = require("./favor");

class Book extends Model {
  static async getDetail(id) {
    const url = util.format(detailUrl, id);
    const detail = await axios.get(url);
    return detail.data;
  }

  static async getSearchInfo(q, count = 20, start = 1, summary = 1) {
    const url = util.format(keywordUrl, q, count, start, summary);
    console.log(url);
    const result = await axios.get(url);
    return result.data;
  }

  static async getMyFavorBookCount(uid) {
    const count = await Favor.count({
      where: {
        type: 400,
        uid,
      },
    });
    return count;
  }
}

Book.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    fav_nums: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "book",
  }
);

module.exports = { Book };
