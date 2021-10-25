import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Book {
    name: String
    author: Author
  }
`

export default typeDefs
