const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    releaseYear: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
