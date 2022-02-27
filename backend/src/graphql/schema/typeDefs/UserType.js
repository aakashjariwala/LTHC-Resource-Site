import { gql } from 'graphql-tag'

const typeDefs = gql`
  type User {
    username: String!
  }

  type UserResponse implements BaseResponse {
    success: Boolean!
    data: User
    error: Int
    errorMessage: String
  }

  extend type Mutation {
    login(username: String!, password: String!): UserResponse!
    createUser(username: String!, password: String!): UserResponse!
    logout: Boolean!
    validate: UserResponse!
  }
`

export default typeDefs
