import { ApolloServer } from 'apollo-server'
import { config } from 'dotenv'
import schema from './graphql/schema'
import MongoConnection from './database/config/connection'

const init = async () => {
  try {
    await MongoConnection()

    const server = new ApolloServer({ schema })
    const { url } = await server.listen()
    console.log(`Server running at ${url}`)
  } catch (e) {
    console.error(e)
  }
}

config()
init()
