import {Schema, model} from 'mongoose'

const courseSchema = new Schema({
  id: Number,
  title: String,
  author: String,
  description: String,
  topic: String,
  url: String,
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

export var Course = model('Course', courseSchema);
