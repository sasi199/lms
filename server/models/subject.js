// subject.js
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const topicSchema = new mongoose.Schema({
  title: String,
  contents: [contentSchema],
});

const sectionSchema = new mongoose.Schema({
  title: String,
  topics: [topicSchema],
});

const subjectSchema = new mongoose.Schema({
  subjectName: String,
  subjectCode: String,
  facultyName: String,
  sections: [sectionSchema],
});

module.exports = mongoose.model('Subject', subjectSchema);
