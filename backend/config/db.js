const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root123", 
  database: "blogging_platform",
  port:3306
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

module.exports = connection;
