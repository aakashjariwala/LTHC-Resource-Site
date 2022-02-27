import { getUser, createUser } from '../../../database'

// NOTE: if this resolver gets too long, find someway to break it down into diff files and merge objects back together?
const resolver = {
  Mutation: {
    login: async (_, { username, password }, context) => {
      const user = await getUser(username)
      if (user && user.validatePassword(password)) {
        if (!context.validateSession()) context.createSession()
        return true
      }
      return false
    },
    createUser: async (_, { username, password }, context) => {
      const user = await createUser(username, password)
      if (user) {
        context.createSession()
        return true
      }
      return false
    },
    logout: async (_, __, context) => {
      if (context.validateSession()) {
        context.deleteSession()
        return true
      }
      return false
    },
    validate: async (_, __, context) => {
      return context.validateSession()
    },
  },
}

export default resolver
