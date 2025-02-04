import jwt from 'jsonwebtoken'

export const verifyToken = (token: string) =>
  // validate token
  jwt.verify(token, 'secretByNano')
