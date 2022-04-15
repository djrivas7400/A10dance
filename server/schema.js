const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    username: String!
    password: String!
    name: String!
    role: String!,
    attendanceCount: Int!
    id: ID!
  }

  type Query {
    allUsers: [User]
    getUser(username: String!): User
  }

  type SessionInfo {
    token: String!
    username: String!
    name: String!
  }

  type Mutation {
    addUser(
      username: String!
      password: String!
      name: String!
      role: String!
    ): User
    login(
      username: String!
      password: String!
    ): SessionInfo
    attended(
      username: String!
    ): User
  }
`;

module.exports = typeDefs;
