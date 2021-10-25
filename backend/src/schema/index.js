import { gql } from 'graphql-tag'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { Authors, Books } from './resolvers'
import { AuthorType, BookType } from './typeDefs'

const Query = gql`
  type Query {
    _empty: String
  }
`

export default makeExecutableSchema({
  typeDefs: [Query, AuthorType, BookType],
  resolvers: { ...Authors, ...Books },
})
