/*
 * @Author: Hale
 * @Description: Rename Variable 变量改名（重命名）-> 简单示例 2
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  let tpHd = "untitled";
  result += `<h1>${tpHd}</h1>`;
  tpHd = obj["articleTitle"];
}

{
  let _title = "untitled";

  function getTitle() {
    return _title;
  }

  function setTitle(arg) {
    _title = arg;
  }
}
