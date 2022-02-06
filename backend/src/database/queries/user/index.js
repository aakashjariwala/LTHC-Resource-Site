import handle from '../../../util/handle'
import { User } from '../../schema'

export const getUser = async (username) => {
  const [res, error] = await handle(User.findOne({ username }).lean())
  if (error) console.error(error)
  return res
}

export const createUser = async (username, password) => {
  try {
    const exists = await getUser(username)
    if (exists) return null
    // TODO: encrypt password
    const user = new User({ username, password })
    await user.save()
    return user.id
  } catch (error) {
    console.error(error)
    return error
  }
}
