import { ApolloServer } from 'apollo-server'
import { config } from 'dotenv'
import schema from './graphql/schema'
import MongoConnection from './database/config/connection'
import { createSession, validateSession, deleteSession } from './graphql/auth'

const init = async () => {
  try {
    await MongoConnection()

    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({
        createSession: (username) => createSession(username, res),
        validateSession: () => validateSession(req),
        deleteSession: () => deleteSession(res),
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
