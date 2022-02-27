import { makeExecutableSchema } from '@graphql-tools/schema'
import { gql } from 'graphql-tag'
import { MutationRes, QueryRes, UserRes } from './resolvers'
import { UserType } from './typeDefs'

const Query = gql`
  type Query {
    _empty: String
  }
`
const Mutation = gql`
  type Mutation {
    _empty: String
  }
`

export default makeExecutableSchema({
  typeDefs: [Query, Mutation, UserType],
  resolvers: { ...QueryRes, ...UserRes, ...MutationRes },
})
