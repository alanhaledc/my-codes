/*
 * @Author: Hale
 * @Description: SQL 修改
 * @Date: 2019/03/01
 * @LastEditTime: 2019/10/18
 */

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

connection.connect();

const sql = "UPDATE websites SET name = ?,url = ? WHERE Id = ?"; // 修改命令
const sqlParams = ["菜鸟移动站", "http://c.runoob.com", 6]; // 修改参数

connection.query(sql, sqlParams, function (err, result) {
  if (err) {
    console.log("[UPDATE ERROR] - ", err.message);
    return;
  }
  console.log("--------------------------UPDATE----------------------------");
  console.log("UPDATE affectedRows", result.affectedRows);
  console.log("--------------------------------------------------------\n\n");
});
