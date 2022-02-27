import handle from '../../../util/handle'
import { User } from '../../schema'

export const getUser = async (username) => {
  // TODO: should probably change return type to obj instead of arr
  const [res, error] = await handle(User.findOne({ username }))
  if (error) {
    console.error(error)
    return [undefined, error]
  }
  return [res, undefined]
}

export const createUser = async (username, password) => {
  try {
    const user = new User({ username, password })
    await user.save()
    return [user, undefined]
  } catch (error) {
    return [undefined, error]
  }
}
