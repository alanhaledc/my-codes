/*
 * @Author: Hale
 * @Description: SQL 查询
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

const sql = "SELECT * FROM websites"; // 查询命令

connection.query(sql, (err, results) => {
  if (err) {
    console.log("[SELECT ERROR] - ", err.message);
    return;
  }

  console.log("--------------------------SELECT----------------------------");
  console.log(results);
  console.log("--------------------------------------------------------\n\n");
});
