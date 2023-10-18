const express = require('express');
const router = express.Router();
const Section = require('../models/section'); // Import your Section model

// Create a new section
router.post('/sections', async (req, res) => {
  try {
    const section = new Section(req.body);
    await section.save();
    res.status(201).json(section);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all sections
router.get('/sections', async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a section by ID
router.patch('/sections/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSection = await Section.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSection) {
      return res.status(404).json({ message: 'Section not found' });
    }
    res.status(200).json(updatedSection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a section by ID
router.delete('/sections/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSection = await Section.findByIdAndRemove(id);
    if (!deletedSection) {
      return res.status(404).json({ message: 'Section not found' });
    }
    res.status(204).json(); // Respond with a 204 status code for successful deletion
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
