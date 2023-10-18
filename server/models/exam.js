// models/section.js
const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  title: String,
  topics: [String],
});

module.exports = mongoose.model('Section', sectionSchema);
