/*
 * @Author: Hale
 * @Description: Movie Sentence Music 模块
 * @Date: 2019/06/10
 * @LastEditTime: 2019/10/18
 */

const { sequelize } = require("..");
const { Sequelize, Model } = require("sequelize");

const classicFields = {
  image: Sequelize.STRING,
  content: Sequelize.STRING,
  pubdate: Sequelize.DATEONLY,
  fav_nums: { type: Sequelize.INTEGER, defaultValue: 0 },
  title: Sequelize.STRING,
  type: Sequelize.TINYINT,
};

class Movie extends Model {}

Movie.init(classicFields, { sequelize, tableName: "movie" });

class Sentence extends Model {}

Sentence.init(classicFields, { sequelize, tableName: "sentence" });

class Music extends Model {}

const musicFields = Object.assign(classicFields, { url: Sequelize.STRING });

Music.init(musicFields, { sequelize, tableName: "music" });

module.exports = { Movie, Sentence, Music };
