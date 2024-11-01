const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const passport = require("passport");
const User = require("./models/User");

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zsvzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((err) => {
    console.error("Error while connecting to MongoDB:", err.message);
  });

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "thisissecretkey",
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ id: jwt_payload.sub });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
