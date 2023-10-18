// models/LibraryItem.js
const mongoose = require('mongoose');

const libraryItemSchema = new mongoose.Schema({
  uploadThumbnail: String,
  LibraryCategory: String,
  CourseName: String,
  title: String,
  authorName: String,
  description: String,
  keywords: String,
  externalLinks: String,
});

module.exports = mongoose.model('LibraryItem', libraryItemSchema);
