/*
 * @Author: Hale
 * @Description: User 模块
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const bcrypt = require("bcrypt");
const { sequelize } = require("..");
const { Sequelize, Model } = require("sequelize");
const { NotFound, AuthFailed } = require("../../core/http-exception");

class User extends Model {
  static async verifyEmailAndPassword(email, plainPassword) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFound("账号不存在");
    }

    const isPasswordCorrect = bcrypt.compareSync(plainPassword, user.password);

    if (!isPasswordCorrect) {
      throw new AuthFailed("密码不正确");
    }

    return user;
  }

  static async getUserByOpenid(openid) {
    const user = await User.findOne({
      where: {
        openid,
      },
    });
    return user;
  }

  static async registerByOpenid(openid) {
    const user = await User.create({ openid });
    return user;
  }
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      set(val) {
        const salt = bcrypt.genSaltSync(10);
        const pwd = bcrypt.hashSync(val, salt);
        this.setDataValue("password", pwd);
      },
    },
    openid: {
      type: Sequelize.STRING(64),
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "user", // 自定义表格名称
  }
);

module.exports = { User };
