import crypto from 'node:crypto'

export const hashPassword = (password: string): string => {
  const secret: string = 'secretByNano'

  // return hashedPassword
  return <string>(
    crypto.createHmac('sha256', secret).update(password).digest('hex')
  )
}

export const comparePassword = (
  password: string,
  hashedPassword: string
): boolean => (hashPassword(password) === hashedPassword ? true : false)
