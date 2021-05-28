/*
 * @Author: Hale
 * @Description: SQL 删除
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

const sql = "DELETE FROM websites where id=6"; // 删除命令

connection.query(sql, (err, results) => {
  if (err) {
    console.log("[DELETE ERROR] - ", err.message);
    return;
  }

  console.log("--------------------------DELETE----------------------------");
  console.log("DELETE affectedRows: ", results.affectedRows);
  console.log("--------------------------------------------------------\n\n");
});
