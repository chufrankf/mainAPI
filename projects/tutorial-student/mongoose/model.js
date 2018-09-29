import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  nickname: String,
  grade: Number,
  address: String
});

module.exports = mongoose.model('Student', studentSchema);
