/*
 * @Author: Hale
 * @Description: Remove Flag Argument 移除标记参数 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function setDimension(name, value) {
    if (name === "height") {
      this._height = value;
      return;
    }
    if (name === "width") {
      this._width = value;
      return;
    }
  }
}

{
  function setHeight(value) {
    this._height = value;
  }
  function setWidth(value) {
    this._width = value;
  }
}
