import { ApolloServer } from 'apollo-server'
import { config } from 'dotenv'
import schema from './graphql/schema'
import MongoConnection from './store/config/connection'
import { createToken, validateToken, deleteToken } from './graphql/auth'

const init = async () => {
  try {
    await MongoConnection()

    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({
        createToken: (username) => createToken(username, res),
        validateToken: () => validateToken(req),
        deleteToken: () => deleteToken(res),
      }),
    })
    const { url } = await server.listen()
    console.log(`Server running at ${url}`)
  } catch (e) {
    console.error(e)
  }
}

config()
init()
