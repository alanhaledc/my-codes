/*
 * @Author: Hale
 * @Description: Favor 模块
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const { sequelize } = require("..");
const { Sequelize, Model, Op } = require("sequelize");
const {
  LikeError,
  DisLikeError,
  NotFound,
} = require("../../core/http-exception");
const { Art } = require("./art");

class Favor extends Model {
  static async like(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid,
      },
    });

    if (favor) {
      throw new LikeError();
    }

    // 返回事务
    return sequelize.transaction(async (t) => {
      await Favor.create(
        {
          art_id,
          type,
          uid,
        },
        { transaction: t }
      );
      const art = await new Art(art_id, type).getData(false);
      await art.increment("fav_nums", { by: 1, transaction: t });
    });
  }

  static async dislike(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid,
      },
    });

    if (!favor) {
      throw new DisLikeError();
    }

    return sequelize.transaction(async (t) => {
      await favor.destroy({
        force: true, // 物理删除
        transaction: t,
      });
      const art = await new Art(art_id, type).getData(false);
      await art.decrement("fav_nums", { by: 1, transaction: t });
    });
  }

  static async isUserLikeIt(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid,
      },
    });

    return favor ? true : false;
  }

  static async getMyClassicFavors(uid) {
    const arts = await Favor.findAll({
      where: {
        uid,
        type: {
          [Op.not]: 400,
        },
      },
    });

    if (!arts) {
      throw new NotFound();
    }

    return await Art.getList(arts);
  }

  static async getBookFavor(uid, book_id) {
    const favorNums = await Favor.count({
      where: {
        art_id: book_id,
        type: 400,
      },
    });

    const myFavor = await Favor.findOne({
      where: {
        art_id: book_id,
        uid,
        type: 400,
      },
    });

    return {
      fav_nums: favorNums,
      like_status: myFavor ? 1 : 0,
    };
  }
}

Favor.init(
  {
    uid: Sequelize.INTEGER,
    art_id: Sequelize.INTEGER,
    type: Sequelize.INTEGER,
  },
  {
    sequelize,
    tableName: "favor",
  }
);

module.exports = { Favor };
