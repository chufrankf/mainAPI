import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './projects/graphql-schema';
import { config } from './config';
import mongoose from 'mongoose';

//Initialize Variables
const app = express();
const server = new ApolloServer({ schema: schema });
const mode = 'dev';

//Setup DB
mongoose.connect( config(mode).mongo, { useNewUrlParser: true } );
var db = mongoose.connection;
db.on( 'error', (error) => console.error(`MongoDB connection error ${error}`) );
db.once( 'open', () => console.log(`Successfully connected to ${config(mode).mongo}`) );

//Setup Graphql
server.applyMiddleware({ app });

//Listen at Port 3000
app.listen({ port: config(mode).port }, () => 
  console.log(`Server ready at http://localhost:${config(mode).port}${server.graphqlPath}`)
);

