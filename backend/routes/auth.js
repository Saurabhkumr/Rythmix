const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("./register", (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;
  const user = User.findone({ email: email });
  if (user) {
    res.json();
  }
});
