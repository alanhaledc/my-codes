/*
 * @Author: Hale
 * @Description: Date 的使用
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/04
 */

let dt = new Date();
console.log(dt); // 2018-01-25T09:59:13.288Z
console.log(dt.getTime()); // 1516845553555
console.log(dt.getFullYear()); // 2018
console.log(dt.getMonth()); // 0 -> 月份从 0 开始
console.log(dt.getDate()); // 25
console.log(dt.getDay()); // 4  星期
console.log(dt.getHours()); // 9
console.log(dt.getMinutes()); // 59
console.log(dt.getSeconds()); // 13

console.log(`${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`); // 2018-1-25

let dt1 = Date.now();
console.log(dt1); // 1516845553555

{
  // 创建一个函数格式化 类似的 2018-01-02 的日期
  function formatDate(dt) {
    if (!dt) {
      dt = new Date();
    }

    const year = dt.getFullYear();
    let mouth = dt.getMonth() + 1;
    let day = dt.getDate();

    // mouth = mouth < 10 ? '0' + mouth : mouth
    mouth = mouth < 10 ? String(mouth).padStart(2, "0") : mouth;
    // day = day < 10 ? '0' + day : day
    day = day < 10 ? String(day).padStart(2, "0") : day;

    return `${year}-${mouth}-${day}`;
  }

  let dt = new Date();
  let date = formatDate(dt);
  console.log(date);
}
