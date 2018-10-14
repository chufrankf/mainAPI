import { makeExecutableSchema } from "graphql-tools";
import { courseResolvers, courseTypeDefs } from "./types/course";
import { studentResolvers, studentTypeDefs } from "./types/student";

import { courseData } from "../data/courseData";
import { studentData } from "../data/studentData";
import { Course } from "../mongoose/courseModel";
import { Student } from "../mongoose/studentModel";

const mainTypeDefs = `
  extend type Mutation {
    demo_restoreDefaults: Boolean
  }
`;

const mainResolvers = {
  Mutation: {
    demo_restoreDefaults: (root, args) => {
      // Empty the course and student collections
      return Course.deleteMany({ }, (error) => {
        return !error ?
          Student.deleteMany({ }, (error) => {
            return !error ? true : false;
          }) : false;
      });
    }
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [studentTypeDefs, courseTypeDefs, mainTypeDefs],
  resolvers: [studentResolvers, courseResolvers, mainResolvers]
});