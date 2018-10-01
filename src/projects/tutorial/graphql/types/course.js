import coursesData from '../../data/courseData'
import Course from '../../mongoose/courseModel';

export const courseTypeDefs = `
  type demo_Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
    students: [demo_Student]
  }

  extend type Query {
    demo_getAllCourses: [demo_Course]
    demo_getCourseById(id: Int!): demo_Course
  }

  extend type Mutation {
    demo_addCourse(id: Int!, title: String!): demo_Course
    demo_addDefaultCourses: [demo_Course]
  }
`;

export const courseResolvers = {
  Query: {
    demo_getAllCourses: () => {
      return Course.find((error, data) => {
        return data;
      });
    },
    demo_getCourseById: (root, {courseId}) => {
      return Course.find({ id: courseId }, (error, data) => {
        return data;
      });
    }
  },
  Mutation: {
    demo_addCourse: (root, args) => {
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
    demo_addDefaultCourses: (root, args) => {
      Course.insertMany(coursesData);
      return coursesData
    }
  }
}
