const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helper");

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(403)
        .json({ error: "A user with this email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUserData = {
      email,
      password: hashPassword,
      firstName,
      lastName,
      username,
    };
    const newUser = await User.create(newUserData);

    const token = await getToken(email, newUser);

    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(403).json({ error: "Invalid credentials" });
    }

    if (!user.password) {
      return res
        .status(400)
        .json({ error: "Password data missing in database" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ error: "Invalid credentials" });
    }

    const token = await getToken(email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
