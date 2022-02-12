import { generateJwt, verifyJwt } from './jwt'

const cookieOptions = {
  httpOnly: true,
  // use secure flag in production to send only via encrypted connections
  // secure: true,
}

export const createSession = (username, res) => {
  res.cookie('session', generateJwt({ username }), cookieOptions)
}

export const validateSession = (req) => {
  if (!req.headers.cookie) return false
  const token = req.headers.cookie.split('=')[1]
  if (token === undefined || token === '') return false
  return verifyJwt(token)
}

export const deleteSession = (res) => {
  res.clearCookie('session')
}
