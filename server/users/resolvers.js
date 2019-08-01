const { User } = require("./User");

const resolvers = {
    Query: {
        users: () => User.all(),
        user: (_, { id }) => User.findOne(id),
    },
};

module.exports = {
    resolvers,
};