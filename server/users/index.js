const { data } = require("./data");
const { User } = require("./User");
const { resolvers } = require("./resolvers");
const { typeDef } = require("./typeDef");

module.exports = {
    data,
    User,
    resolvers,
    typeDef,
};