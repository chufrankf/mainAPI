import { Course } from "../../mongoose/courseModel";

export const courseTypeDefs = `
  input demo_CourseInput {
    id: Int
    title: String
    author: String
    description: String
    topic : String
    url: String
  }

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
    demo_addCourse(course: demo_CourseInput!): demo_Course
    demo_removeAllCourse: Boolean
  }
`;

export const courseResolvers = {
  Query: {
    demo_getAllCourses: () => {
      return Course.find( {} ).populate("students");
    },
    demo_getCourseById: (root, {courseId}) => {
      return Course.find({ id: courseId }).populate("students");
    }
  },
  Mutation: {
    demo_addCourse: (root, {course}) => {
      Course.create(course);
      return course;
    },
    demo_removeAllCourse: (root, args) => {
      Course.remove({});
      return true;
    }
  }
};
