import { getWholeDoc } from '../../../store'

const resolver = {
  Query: {
    getDoc: async (_, __, context) => {
      if (context.username) {
        const [doc, error] = await getWholeDoc()
        if (error) {
          return { success: false, error: 1, errorMessage: error }
        }
        return { success: true, data: doc }
      }
      return { success: false, error: 401, errorMessage: 'Unauthorized' }
    },
  },
}

export default resolver
