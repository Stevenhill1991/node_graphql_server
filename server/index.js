require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');


const typeDef = `
  type Query
`;

const users = require("./users");

const schema = makeExecutableSchema({
  typeDefs: [typeDef, users.typeDef],
  resolvers: [users.resolvers],
});

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});