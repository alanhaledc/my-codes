/*
 * @Author: Hale
 * @Description: 常用正则例子
 * @Date: 2019/01/11
 * @LastEditTime: 2019/10/17
 */

{
  // 匹配 16 进制颜色值
  const reg = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
  const test = "#ffbbcc #fc01df #FF01Da #FFF #F01".match(reg);
  console.log("test: ", test); // [ '#ffbbcc', '#fc01df', '#FF01Da', '#FFF', '#F01' ]
}

{
  // 匹配 24 小时进制
  const reg = /^([01][0-9]|[2][0-3]):[05][0-9]$/;
  const test = reg.test("23:59");
  console.log("test: ", test); // true
  const test2 = reg.test("02:07");
  console.log("test2: ", test2); // true

  const reg3 = /^(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])$/; // 匹配去 0 的数字
  const test3 = reg3.test("7:9");
  console.log("test3: ", test3); // true
}

{
  // 匹配日期
  const reg = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/;
  const test1 = reg.test("2017-11-22");
  console.log("test1: ", test1); // true
  const test2 = reg.test("2017-01-05");
  console.log("test2: ", test2); // true
  const test3 = reg.test("2017-1-5");
  console.log("test3: ", test3); // true
}

{
  // 匹配 window 操作系统文件路径
  // [^\\:*<>|"?\r\n/] 文件名不能含特殊符号
  const reg = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
  const test1 = reg.test(
    "F:\\study\\javascript\\regex\\regular expression.pdf"
  );
  console.log("test1: ", test1); // true
  const test2 = reg.test("F:\\study\\javascript\\regex");
  console.log("test2: ", test2); // true
  const test3 = reg.test("F:\\study\\javascript");
  console.log("test3: ", test3); // true
  const test4 = reg.test("F:\\");
  console.log("test4: ", test4); // true
}

{
  // 不匹配任何东西的正则
  const reg = /.^/;
  const test = reg.test("Aa1_");
  console.log("test: ", test); // false
}

{
  // 数字千位分隔符
  const reg = /(?!^)(?=(\d{3})+$)/g;
  const test = "123456789".replace(reg, ",");
  console.log("test: ", test); // 123,456,789

  const reg2 = /(?!\b)(?=(\d{3})+\b)/g; // ^ $ 换成单词边界符 \b
  const test2 = "123456789 987654321".replace(reg2, ",");
  console.log("test2: ", test2); // 123,456,789 987,654,321

  const reg3 = /(?!^)(?=(\d{3})+$)/g;
  const test3 = "123456789".replace(reg3, ",").replace(/^/, "$$"); // 前面加 $ 符号
  console.log("test3: ", test3); // $123,456,789
}

{
  // 验证密码 长度 6-12 位，由数字和小写字母、大写字母组成，至少包含 2 种字符
  const reg = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9a-zA-Z]{6,12}$/g;
  const test1 = reg.test("1234567");
  console.log("test1: ", test1); // false
  const test2 = reg.test("abcdef");
  console.log("test2: ", test2); // false
  const test3 = reg.test("ABCDEF");
  console.log("test3: ", test3); // false
  const test4 = reg.test("abc12");
  console.log("test4: ", test4); // false
  const test5 = reg.test("abcAB123");
  console.log("test5: ", test5);
  reg.lastIndex = 0; // 重置全局匹配后的lastIndex值
  const test6 = reg.test("adc123");
  console.log("test6: ", test6);

  // 取反，不能全部为数字，小写字母，大写字母 注意不能有 | 符号
  const regexp = /((?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$))^[0-9a-zA-Z]{6,12}$/g;
  const test7 = regexp.test("1234567");
  console.log("test7: ", test7); // false
  const test8 = regexp.test("abcdef");
  console.log("test8: ", test8); // false
  const test9 = regexp.test("ABCDEF");
  console.log("test9: ", test9); // false
  const test10 = regexp.test("abc12");
  console.log("test10: ", test10); // false
  const test11 = regexp.test("abcAB123");
  console.log("test11: ", test11);
  regexp.lastIndex = 0; // 重置全局匹配后的lastIndex值
  const test12 = regexp.test("adc123");
  console.log("test12: ", test12);
}

{
  // 正则去字符串前后空格
  const reg1 = /(^\s+|\s+$)/g;
  const test1 = "  test  ".replace(reg1, "");
  console.log("test1: ", test1, test1.length); // test 4
  const reg2 = /^\s+(.*?)\s+$/;
  const test2 = "  test  ".replace(reg2, "$1");
  console.log("test2: ", test2, test2.length); // test 4
}

{
  // 每个单词的首字母转换为大写
  const reg = /(^|\s)\w/g;
  const test = "i am Hale Deng"
    .toLowerCase()
    .replace(reg, ($1) => $1.toUpperCase());
  console.log("test: ", test); // I Am Hale Deng
}

{
  // 驼峰化
  const reg = /[-_\s]+(.)?/g;
  const test = "-webkit-transform".replace(reg, (match, $1) =>
    $1 ? $1.toUpperCase() : ""
  );
  console.log("test: ", test, test.length); // WebkitTransform 15
}

{
  // 大驼峰转连字符
  const test = "WebkitTransform"
    .replace(/([A-Z])/g, "-$1")
    .replace(/[-_\s]+/g, "-")
    .toLowerCase();
  console.log("test: ", test); // -webkit-transform
}

{
  // HTML 转义
  function escapeHTML(str) {
    const escapeChars = {
      "<": "lt",
      ">": "gt",
      '"': "quot",
      "&": "amp",
      "'": "#39",
    };
    return str.replace(
      new RegExp("[" + Object.keys(escapeChars).join("") + "]", "g"),
      (match) => "&" + escapeChars[match] + ";"
    );
  }
  console.log(escapeHTML("<div>Blah blah blah</div>")); // &lt;div&gt;Blah blah blah&lt;/div&gt;

  // HTML 反转义
  function unescapeHTML(str) {
    const htmlEntities = {
      nbsp: " ",
      lt: "<",
      gt: ">",
      quot: '"',
      amp: "&",
      apos: "'",
    };
    return str.replace(/\&([^;]+);/g, (match, key) => {
      if (key in htmlEntities) {
        return htmlEntities[key];
      }
      return match;
    });
  }
  console.log(unescapeHTML("&lt;div&gt;Blah blah blah&lt;/div&gt;")); // <div>Blah blah blah</div>
}

{
  // 匹配成对标签
  const reg = /<([^>]+)>[\d\D]*<\/\1>/;
  const test1 = reg.test("<title>regular expression</title>");
  console.log("test1: ", test1); // true
  const test2 = reg.test("<p>hello regex</p>");
  console.log("test2: ", test2); // true
  const test3 = reg.test("<title>wrong!</p>");
  console.log("test3: ", test3); // false
}

{
  // 身份证 15位数字 17位数字 +xX 或者 18位数字
  const reg = /^(\d{15}|\d{17}[\dxX])$/;
  const test1 = reg.test("440223199810291");
  console.log("test1: ", test1); // true
  const test2 = reg.test("44022319981029222x");
  console.log("test2: ", test2); // true
}

{
  // IPV4 地址正则表达式分析
  const reg = /^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/;
  // => ((…)\.){3}(…)
  // 3位数.3位数.3位数.3位数
  // (…) => (0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])
  //  0{0,2}\d，匹配一位数，包括 "0" 补齐的。比如，"9"、"09"、"009"；
  //  0?\d{2}，匹配两位数，包括 "0" 补齐的，也包括一位数；
  //  1\d{2}，匹配 "100" 到 "199";
  //  2[0-4]\d，匹配 "200" 到 "249"；
  //  25[0-5]，匹配 "250" 到 "255"
}
