import jwt from 'jsonwebtoken'

export const verifyToken = (token: string) => {
	try {
		jwt.verify(token, 'secretByNano')
	} catch (error) {
		console.error('Token verification failed:', error)
		return false
	}

	return true
}
