const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String, // could also be ObjectId if linked to User model
      default: "Anonymous",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
