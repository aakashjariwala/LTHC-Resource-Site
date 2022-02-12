import { gql } from 'graphql-tag'

const typeDefs = gql`
  type User {
    username: String!
    password: String!
  }

  extend type Mutation {
    login(username: String!, password: String!): Boolean!
    createUser(username: String!, password: String!): Boolean!
  }
`

export default typeDefs
