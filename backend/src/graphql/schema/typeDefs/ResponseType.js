import { gql } from 'graphql-tag'

const typeDefs = gql`
  interface BaseResponse {
    success: Boolean!
    error: Int
    errorMessage: String
  }
`

export default typeDefs
