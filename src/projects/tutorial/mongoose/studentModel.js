import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  nickname: String,
  grade: Number,
  address: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

module.exports = mongoose.model('Student', studentSchema);
