const db = require("../config/db");

exports.createUser = (username, email, password, callback) => {
  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, password], callback);
};

exports.findUserByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], callback);
};
