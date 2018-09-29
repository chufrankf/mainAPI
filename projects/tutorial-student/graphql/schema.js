import {studentData} from '../data/data';
import {makeExecutableSchema} from 'graphql-tools';
import Student from '../mongoose/model';

const typeDefs = `
  type Student {
    id: Int
    name: String
    nickname: String
    grade: String
    address: String
  }

  type Query {
    allStudents: [Student]
    student(id: Int!): Student
  }

  type Mutation {
    addStudent(id: Int!, name: String!): Student
    addTutorialStudent: [Student]
  }
`;

const resolvers = {
  Query: {
   allStudents: () => {
     return Student.find( (error, data) => {
       return data;
     });
   },
   student: (root, {studentId}) => {
     return Student.find( {id: studentId }, (error, data) => {
       return data;
     });
   }
  },
  Mutation: {
    addStudent: (root, args) => {
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
    addTutorialStudent: (root, args) => {
      Student.insertMany(studentData);
      return studentData;
    }
  }
}

export const studentSchema = makeExecutableSchema({
  typeDefs, resolvers
})