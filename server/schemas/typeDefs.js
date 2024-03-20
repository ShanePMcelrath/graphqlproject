const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        id: ID
        username: String
        email: String
    }
`;



module.exports = typeDefs;