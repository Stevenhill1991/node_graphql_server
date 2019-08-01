const typeDef = `
    type User  {
        id: Int!
        username: String
        firstName: String
        lastName: String
        email: String
    }

    extend type Query {
        users: [User],
        user(id: Int!): User
    }
`;

module.exports = {
    typeDef,
};