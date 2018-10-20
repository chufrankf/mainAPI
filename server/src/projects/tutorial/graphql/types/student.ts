import { Student } from "../../mongoose/studentModel";

export const studentTypeDefs = `
  input demo_StudentInput {
    id: Int
    name: String
    nickname: String
    grade: String
    address: String
  }

  type demo_Student {
    id: Int
    name: String
    nickname: String
    grade: String
    address: String
    courses: [demo_Course]
  }

  type Query {
    demo_getAllStudents: [demo_Student]
    demo_getStudentById(id: Int!): demo_Student
  }

  type Mutation {
    demo_addStudent(student: demo_StudentInput!): demo_Student
  }
`;

export const studentResolvers = {
  Query: {
   demo_getAllStudents: () => {
     return Student.find( {} ).populate("courses");
   },
   demo_getStudentById: (root, {studentId}) => {
     return Student.find( {id: studentId }).populate("courses");
   }
  },
  Mutation: {
    demo_addStudent: (root, {student}) => {
      Student.create(student);
      return student;
    }
  }
};