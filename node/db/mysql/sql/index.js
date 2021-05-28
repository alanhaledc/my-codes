/*
 * @Author: Hale
 * @Description: SQL 操作
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

connection.query("SELECT 1 + 1 AS solution", (err, results, fields) => {
  if (err) throw err;
  console.log("The solution is", results[0].solution); // The solution is 2
});
