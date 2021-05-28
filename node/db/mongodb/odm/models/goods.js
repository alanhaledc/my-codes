/*
 * @Author: Hale
 * @Description: goods 模块
 * @Date: 2019/03/01
 * @LastEditTime: 2019/10/18
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goodsSchema = new Schema({
  productId: String,
  productName: String,
  salePrice: Number,
  productImage: String,
  productUrl: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

// 保存前操作
goodsSchema.pre("save", function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
});

module.exports = mongoose.model("Goods", goodsSchema);
