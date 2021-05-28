/*
 * @Author: Hale
 * @Description: Buffer 类型
 * @Date: 2019/03/01
 * @LastEditTime: 2020/02/21
 */

const str = "hello nodejs";
const buf = Buffer.from(str, "utf-8");

console.log(buf);
console.log(buf.toString("utf-8"));
console.log(buf.toString("base64"));
