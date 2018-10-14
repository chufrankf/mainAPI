import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './src/schema/graphql-schema';
import { getConfig } from './config';
import * as mongoose from 'mongoose';

//Initialize Variables
const app = express();
const server = new ApolloServer({ schema: schema });
const mode = 'dev';

//Setup DB
mongoose.connect( getConfig(mode).mongo, { useNewUrlParser: true } );
var db = mongoose.connection;
db.on( 'error', (error) => console.error(`MongoDB connection error ${ error }`) );
db.once( 'open', () => console.log(`Successfully connected to ${ getConfig(mode).mongo }`) );

//Setup Graphql
server.applyMiddleware({ app });

//Listen at Port 3000
app.listen({ port: getConfig(mode).port }, () => 
  console.log(`Server ready at http://localhost:${ getConfig(mode).port }${ server.graphqlPath }`)
);

