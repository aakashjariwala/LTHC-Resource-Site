import { getUser, createUser } from '../../../database'

// NOTE: if this resolver gets too long, find someway to break it down into diff files and merge objects back together?
const resolver = {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await getUser(username)
      return user && user.password === password
    },
    createUser: async (_, { username, password }) => {
      const user = await createUser(username, password)
      return user != null
    },
  },
}

export default resolver
