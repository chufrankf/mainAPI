import studentData from '../../data/studentData';
import Student from '../../mongoose/studentModel';

export const studentTypeDefs = `
  type demo_Student {
    id: Int
    name: String
    nickname: String
    grade: String
    address: String
  }

  type Query {
    demo_getAllStudents: [demo_Student]
    demo_getStudentById(id: Int!): demo_Student
  }

  type Mutation {
    demo_addStudent(id: Int!, name: String!): demo_Student
    demo_addDefaultStudents: [demo_Student]
  }
`;

export const studentResolvers = {
  Query: {
   demo_getAllStudents: () => {
     return Student.find( (error, data) => {
       return data;
     });
   },
   demo_getStudentById: (root, {studentId}) => {
     return Student.find( {id: studentId }, (error, data) => {
       return data;
     });
   }
  },
  Mutation: {
    demo_addStudent: (root, args) => {
      const student = {
        id: args.id,
        name: args.name,
        nickname: args.nickname,
        grade: args.grade,
        address: args.address
      }
      Student.create(student);
      return student;
    },
    demo_addDefaultStudents: (root, args) => {
      Student.insertMany(studentData);
      return studentData;
    }
  }
}