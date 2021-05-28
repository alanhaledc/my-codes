/*
 * @Author: Hale
 * @Description: SQL 插入
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

const sql =
  "INSERT INTO websites(ID, name,url,alexa,country) VALUE (0,?,?,?,?)"; // 插入命令
const sqlParams = ["菜鸟工具", "http://c.runoob.com", "23453", "CN"]; // 插入的数据

connection.query(sql, sqlParams, (err, results) => {
  if (err) {
    console.log("[INSERT ERROR] - ", err.message);
    return;
  }

  console.log("--------------------------INSERT----------------------------");
  console.log("INSERT ID:", results);
  console.log("--------------------------------------------------------\n\n");
});
