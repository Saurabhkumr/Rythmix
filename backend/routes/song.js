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
      if (songs.length === 0) {
        return res.status(404).json({ err: "No songs found for this user." });
      }
      return res.status(200).json({ data: songs });
    } catch (err) {
      return res.status(500).json({ err: "Error fetching songs." });
    }
  }
);

router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { artistId } = req.params;
      const artist = await User.findOne({ _id: artistId });
      if (!artist) {
        return res.status(404).json({ err: "Artist does not exist." });
      }
      const songs = await Song.find({ artist: artistId });
      if (songs.length === 0) {
        return res.status(404).json({ err: "No songs found for this artist." });
      }
      return res.status(200).json({ data: songs });
    } catch (err) {
      return res.status(500).json({ err: "Error fetching songs." });
    }
  }
);

router.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { songName } = req.params;
      const songs = await Song.find({ name: songName });
      if (songs.length === 0) {
        return res.status(404).json({ err: "No songs found with this name." });
      }
      return res.status(200).json({ data: songs });
    } catch (err) {
      return res.status(500).json({ err: "Error fetching songs." });
    }
  }
);

module.exports = router;
