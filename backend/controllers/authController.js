const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  User.createUser(username, email, hashedPassword, (err) => {
    if (err) return res.status(500).send("Error registering user.");
    res.send("User registered successfully.");
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findUserByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(404).send("User not found.");
    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send("Invalid password.");
    const token = jwt.sign({ id: user.id }, "jwt-secret", { expiresIn: 86400 });
    res.json({ token, user: { id: user.id, username: user.username } });
  });
};
