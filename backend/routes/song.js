const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res
        .status(400)
        .json({ err: "Insufficient details to create song." });
    }
    try {
      const artist = req.user._id;
      const songDetails = { name, thumbnail, track, artist };
      const createSong = await Song.create(songDetails);
      return res.status(200).json(createSong);
    } catch (err) {
      return res.status(500).json({ err: "Error creating song." });
    }
  }
);

router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const songs = await Song.find({ artist: req.user._id });
      return res.status(200).json({ data: songs });
    } catch (err) {
      return res.status(500).json({ err: "Error fetching songs." });
    }
  }
);

router.get(
  "/get/artist",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { artistId } = req.body;
      const artist = await User.find({ _id: artistId });
      if (!artist) {
        return res.status(301).json({ err: "Artist does not exist" });
      }
      const songs = await Song.find({ artist: artistId });
      return res.status(200).json({ data: songs });
    } catch (err) {
      return res.status(500).json({ err: "Error fetching songs." });
    }
  }
);

router.get(
  "/get/songname",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { songName } = req.body;
      const songs = await Song.find({ name: songName });
      return res.status(200).json({ data: songs });
    } catch (err) {
      return res.status(500).json({ err: "Error fetching songs." });
    }
  }
);

module.exports = router;
