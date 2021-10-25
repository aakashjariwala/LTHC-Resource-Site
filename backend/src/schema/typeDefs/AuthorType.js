import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Author {
    name: String
    books: [Book]
  }

  extend type Query {
    author(id: ID): Author
  }
`

export default typeDefs
