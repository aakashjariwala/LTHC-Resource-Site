import { getUser, createUser } from '../../../store'

// NOTE: if this resolver gets too long, find someway to break it down into diff files and merge objects back together?
const resolver = {
  Mutation: {
    login: async (_, { username, password }, context) => {
      if (context.username) {
        return { success: false, error: 3, errorMessage: 'Already logged in!' }
      }
      const [user, error] = await getUser(username)
      if (user) {
        if (user.validatePassword(password)) {
          context.createToken(username)
          return { success: true, data: user }
        }
        return { success: false, error: 1, errorMessage: 'Incorrect Password' }
      }
      return {
        success: false,
        error: 2,
        errorMessage: error,
      }
    },
    createUser: async (_, { username, password }, context) => {
      if (context.username) {
        return { success: false, error: 3, errorMessage: 'Already logged in!' }
      }
      const [user, error] = await getUser(username)
      if (error) {
        return { success: false, error: 1, errorMessage: error }
      }
      if (user) {
        return { success: false, error: 2, errorMessage: 'User already exists' }
      }
      const [newUser, createError] = await createUser(username, password)
      if (newUser) {
        context.createToken(username)
        return { success: true, data: newUser }
      }
      return { success: false, error: 1, errorMessage: createError }
    },
    logout: async (_, __, context) => {
      if (context.username) {
        context.deleteToken()
        return { success: true }
      }
      return { success: false, errorMessage: 'Invalid token' }
    },
    validate: async (_, __, context) => {
      if (context.username) {
        const [user, error] = await getUser(context.username)
        if (user) {
          return { success: true, data: user }
        }
        return {
          success: false,
          error: 1,
          errorMessage: error || 'User could not be found',
        }
      }
      return { success: false, error: 2, errorMessage: 'Invalid token' }
    },
    addSection: async (_, { section }, context) => {},
    editSection: async (_, { sectionId, section }, context) => {},
    removeSection: async (_, { sectionId }, context) => {},
  },
}

export default resolver
