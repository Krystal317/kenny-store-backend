const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

// @desc    Create a new movie
// @route   POST /api/movies
router.post("/movie", async (req, res) => {
  try {
    const { title, genre, rating, releaseYear } = req.body;

    const movie = await Movie.create({ title, genre, rating, releaseYear });

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all movies
// @route   GET /api/movies
router.get("/display-movie", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get movie by ID
// @route   GET /api/movies/:id
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update movie
// @route   PUT /api/movies/:id
router.put("/:id", async (req, res) => {
  try {
    const { title, genre, rating, releaseYear } = req.body;

    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { title, genre, rating, releaseYear },
      { new: true, runValidators: true }
    );

    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete movie
// @route   DELETE /api/movies/:id
router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
