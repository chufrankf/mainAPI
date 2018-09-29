import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  description: String,
  topic: String,
  url: String
});

module.exports = mongoose.model('Course', courseSchema);
