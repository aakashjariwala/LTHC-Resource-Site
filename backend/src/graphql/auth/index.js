import { generateJwt, verifyJwt } from './jwt'

const cookieOptions = {
  httpOnly: true,
  // use secure flag in production to send only via encrypted connections
  // secure: true,
}

// Creates a JWT token
export const createToken = (username, res) => {
  res.cookie('token', generateJwt({ username }), cookieOptions)
}

// If session is valid, return the username associated with JWT. Else, return undefined
export const validateToken = (req) => {
  if (!req.headers.cookie) return false
  const token = req.headers.cookie.split('=')[1]
  if (token === undefined || token === '') return false
  return verifyJwt(token)
}

// Deletes token from cookie
export const deleteToken = (res) => {
  res.clearCookie('token')
}
