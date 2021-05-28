/*
 * @Author: Hale
 * @Description: ship 模块
 * @Date: 2019/03/01
 * @LastEditTime: 2019/10/18
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shipSchema = new Schema({
  ship: String,
  cost: Number,
  isChecked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Ship", shipSchema);
