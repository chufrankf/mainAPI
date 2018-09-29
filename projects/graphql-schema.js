import { mergeSchemas } from 'graphql-tools'
import { courseSchema } from './tutorial-course/graphql/schema';
import { studentSchema } from './tutorial-student/graphql/schema';

export const schema =  mergeSchemas({
  schemas: [
    courseSchema, studentSchema
  ]
});
