import {
  getUser,
  createUser,
  addSection,
  editSection,
  removeSection,
} from '../../../store'

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
      return { success: false, error: 1, errorMessage: 'Invalid token' }
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
    addSection: async (_, { section, docId }, context) => {
      if (context.username) {
        const [newSection, error] = await addSection(section, docId)
        if (error) {
          return { success: false, error: 1, errorMessage: error }
        }
        return { success: true, data: newSection }
      }
      return { success: false, error: 401, errorMessage: 'Unauthorized' }
    },
    editSection: async (_, { sectionId, section }, context) => {
      if (context.username) {
        const [edited, error] = await editSection(sectionId, section)
        if (error) {
          return { success: false, error: 1, errorMessage: error }
        }
        return { success: true, data: edited }
      }
      return { success: false, error: 401, errorMessage: 'Unauthorized' }
    },
    removeSection: async (_, { sectionId }, context) => {
      if (context.username) {
        const [removed, error] = await removeSection(sectionId)
        if (error) {
          return { success: false, error: 1, errorMessage: error }
        }
        return { success: true }
      }
      return { success: false, error: 401, errorMessage: 'Unauthorized' }
    },
  },
}

export default resolver
