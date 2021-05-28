/*
 * @Author: Hale
 * @Description: 驼峰转换其他类型
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/18
 */

const fromCamelCase = (str, separator = "_") =>
  str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLocaleLowerCase();

// test
console.log(fromCamelCase("Some1ADatabaseFieldName", " ")); // some1 a database field name
console.log(fromCamelCase("SomeDatabaseFieldName", "-")); // some-database-field-name
console.log(fromCamelCase("someADatabaseFieldName", "_")); // some_a_database_field_name
