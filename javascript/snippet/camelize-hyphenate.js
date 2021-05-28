/*
 * @Author: Hale
 * @Description: 驼峰和连字符互转，参考 Vue 的工具函数
 * @Date: 2019/03/24
 * @LastEditTime: 2019/10/18
 */

// 连字符转驼峰
const camelizeRE = /-(\w)/g;
const camelize = (str) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
};

// 驼峰转连字符
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
};

// test
const str = "hale-deng";

const str1 = camelize(str);
console.log(str1); // haleDeng

const str2 = hyphenate(str1);
console.log(str2); // hale-deng
