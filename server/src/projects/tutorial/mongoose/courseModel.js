import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  description: String,
  topic: String,
  url: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Course', courseSchema);
