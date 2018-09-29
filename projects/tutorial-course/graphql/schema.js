import {coursesData} from '../data/data'
import {makeExecutableSchema} from 'graphql-tools';
import Course from '../mongoose/model';

const typeDefs = `
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }

  type Query {
    allCourses: [Course]
    course(id: Int!): Course
  }

  type Mutation {
    addCourse(id: Int!, title: String!): Course
    addTutorialCourses: [Course]
  }
`;

const resolvers = {
  Query: {
    allCourses: () => {
      return Course.find((error, data) => {
        return data;
      });
    },
    course: (root, {courseId}) => {
      return Course.find({ id: courseId }, (error, data) => {
        return data;
      });
    }
  },
  Mutation: {
    addCourse: (root, args) => {
      const course = {
        id: args.id,
        title: args.title,
        author: args.author,
        description: args.description,
        topic: args.topic,
        url: args.url
      };
      Course.create(course);
      return course;
    },
    addTutorialCourses: (root, args) => {
      Course.insertMany(coursesData);
      return coursesData
    }
  }
}

export const courseSchema = makeExecutableSchema({
  typeDefs, resolvers
})