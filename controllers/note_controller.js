const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// @desc    Create a new note
// @route   POST /api/notes
router.post("/add-notes", async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const note = await Note.create({ title, content, author });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all notes
// @route   GET /api/notes
router.get("/show-notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get single note by ID
// @route   GET /api/notes/:id
// router.get("/:id", async (req, res) => {
//   try {
//     const note = await Note.findById(req.params.id);
//     if (!note) return res.status(404).json({ message: "Note not found" });

//     res.json(note);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// @desc    Update note
// @route   PUT /api/notes/:id
router.put("/:id", async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, author },
      { new: true, runValidators: true }
    );

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete note
// @route   DELETE /api/notes/:id
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
