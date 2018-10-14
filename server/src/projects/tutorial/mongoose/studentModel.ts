import {Schema, model} from 'mongoose'

const studentSchema = new Schema({
  id: Number,
  name: String,
  nickname: String,
  grade: Number,
  address: String,
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

export var Student = model('Student', studentSchema);
