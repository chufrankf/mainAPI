import { makeExecutableSchema } from 'graphql-tools'
import { courseResolvers, courseTypeDefs } from './types/course';
import { studentResolvers, studentTypeDefs } from './types/student';

export const schema = makeExecutableSchema({
  typeDefs: [studentTypeDefs, courseTypeDefs],
  resolvers: [studentResolvers, courseResolvers]
});