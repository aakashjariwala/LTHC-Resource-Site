import handle from '../../../util/handle'
import { User } from '../../schema'

export const getUser = async (username) => {
  const [res, error] = await handle(User.findOne({ username }))
  if (error) console.error(error)
  return res
}

export const createUser = async (username, password) => {
  try {
    const exists = await getUser(username)
    if (exists) return null
    const user = new User({ username, password })
    await user.save()
    return [user.id, undefined]
  } catch (error) {
    console.error(error)
    return null
  }
}
