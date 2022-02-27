import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({})

const client = new ApolloClient({
  cache,
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/graphql'
      : process.env.REACT_APP_API_URL,
})

export default client
