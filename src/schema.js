import {gql} from "apollo-server";

const typeDefs = gql`
  type User {
    username: String!
    password: String!
    name: String!
    role: String!
    attendanceCount: Int!
    id: ID!
  }

  type Query {
    allUsers(role: String!): [User]
    getUser(username: String!): User
    me: User
  }

  type Token {
    value: String!
    user: User!
  }

  type Mutation {
    addUser(
      username: String!
      password: String!
      name: String!
      role: String!
    ): Token
    login(
      username: String!
      password: String!
    ): Token
    attended(
      username: String!
    ): User
  }
`;

export default typeDefs;
