// Import necessary modules
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const LibraryItem = require("../models/libraryItem"); // Assuming you have a libraryItem model

// Define the storage engine for Multer
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Create the Multer upload instance
const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
router.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// POST endpoint to save a new library item
router.post("/library-items", upload.single("uploadThumbnail"), async (req, res) => {
  try {
    const {
      LibraryCategory,
      CourseName,
      title,
      authorName,
      description,
      keywords,
      externalLinks,
    } = req.body;

    const uploadThumbnail = req.file ? req.file.filename : "";
    console.log(uploadThumbnail)
    const libraryItem = new LibraryItem({
      uploadThumbnail,
      LibraryCategory,
      CourseName,
      title,
      authorName,
      description,
      keywords,
      externalLinks,
    });

    await libraryItem.save();

    res.json({ message: "Library item saved successfully" });
  } catch (error) {
    console.error("Error saving library item:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the data." });
  }
});

// GET endpoint to retrieve all library items
router.get("/library-items", async (req, res) => {
  try {
    const libraryItems = await LibraryItem.find();
    res.json(libraryItems);
  } catch (error) {
    console.error("Error fetching library items:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

// GET endpoint to retrieve a specific image by filename
router.get("/uploads/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../uploads", filename);
  
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).json({ error: "File not found" });
    }
  });
});


// PUT endpoint to update a library item by ID
router.put("/library-items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const {
      LibraryCategory,
      CourseName,
      title,
      authorName,
      description,
      keywords,
      externalLinks,
    } = req.body;

    // Find the library item by its ID
    const libraryItem = await LibraryItem.findByIdAndUpdate(
      itemId,
      {
        LibraryCategory,
        CourseName,
        title,
        authorName,
        description,
        keywords,
        externalLinks,
      },
      { new: true } // Return the updated item
    );

    if (!libraryItem) {
      return res.status(404).json({ error: "Library item not found" });
    }

    res.json({ message: "Library item updated successfully", libraryItem });
  } catch (error) {
    console.error("Error updating library item:", error);
    res.status(500).json({ error: "An error occurred while updating the data." });
  }
});



// DELETE endpoint to delete a library item by ID
router.delete("/library-items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    // Find and delete the library item by its ID
    const deletedItem = await LibraryItem.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ error: "Library item not found" });
    }

    res.json({ message: "Library item deleted successfully" });
  } catch (error) {
    console.error("Error deleting library item:", error);
    res.status(500).json({ error: "An error occurred while deleting the data." });
  }
});


module.exports = router;
