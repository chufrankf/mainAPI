import { makeExecutableSchema } from "graphql-tools";
import { courseResolvers, courseTypeDefs } from "./types/course";
import { studentResolvers, studentTypeDefs } from "./types/student";
import * as mongoose from "mongoose";

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
      // Empty the course collections
      return Course.deleteMany({ }, (error) => {
        // Empty the student collection
        return !error ? Student.deleteMany({ }, (error) => {
          // Add the courses
          return !error ? Course.insertMany( courseData, (error, insertedCourses) => {
            // For each student
            if ( !error ) {
              studentData.forEach( (student) => {
                // Generate an _id for the student
                const studentId = new mongoose.Types.ObjectId();
                // Get list of course ids
                const courseList = student.courseIds.map( (value) => insertedCourses.find( (element) => element.id == value )._id);
                // Save the student
                Student.create({
                  _id: studentId,
                  id: student.id,
                  name: student.name,
                  nickname: student.nickname,
                  grade: student.grade,
                  address: student.address,
                  courses: courseList
                }, (err) => error = err || error);
                // Update each course to contain the student _id
                Course.updateMany( { _id : {$in : courseList}}, { $push: { students : studentId }}, (err) => error = err || error );
              });
              return !error;
            } else {
              return false;
            }
          }) : false;
        }) : false;
      });
    }
  }
};

export const schema = makeExecutableSchema({
  typeDefs: [studentTypeDefs, courseTypeDefs, mainTypeDefs],
  resolvers: [studentResolvers, courseResolvers, mainResolvers]
});