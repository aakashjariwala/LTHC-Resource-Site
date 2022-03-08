import { sign, verify } from 'jsonwebtoken'

export const verifyJwt = (token) => {
  const secret = process.env.JWT_SECRET || ''
  if (!secret) {
    console.error('No JWT signage secret!')
    return false
  }
  return verify(token, secret)
}

export const generateJwt = (payload) => {
  const secret = process.env.JWT_SECRET || ''
  if (!secret) {
    console.error('No JWT signage secret!')
    return false
  }
  return sign(payload, secret, { expiresIn: '1y' })
}
