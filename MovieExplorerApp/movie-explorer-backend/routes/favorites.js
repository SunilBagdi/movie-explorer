const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect } = require("../middleware/auth");

router.use(protect);

router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      favorites: user.favorites,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { movieId, title, poster, rating, year, genre } = req.body;

    const user = await User.findById(req.user._id);

    // Check karo kya pehle se favorite hai
    const alreadyFavorite = user.favorites.find(
      (fav) => fav.movieId === movieId
    );

    if (alreadyFavorite) {
      return res.status(400).json({
        success: false,
        message: "This movie is already in favorites!",
      });
    }

    // Add karo
    user.favorites.push({ movieId, title, poster, rating, year, genre });
    await user.save();

    res.status(200).json({
      success: true,
      message: `"${title}"Add favorites!`,
      favorites: user.favorites,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

router.delete("/:movieId", async (req, res) => {
  try {
    const movieId = parseInt(req.params.movieId);
    const user = await User.findById(req.user._id);

    user.favorites = user.favorites.filter((fav) => fav.movieId !== movieId);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Remove favorites.",
      favorites: user.favorites,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

module.exports = router;
