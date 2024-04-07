import crypto from 'node:crypto'
import jwt, { JsonWebTokenError, Jwt, JwtPayload } from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
	const { token } = await readBody(event)

	// verify token condition
	jwt.verify(token, 'secretByNano', (err: any) => {
		if (err) {
			return <JsonWebTokenError>{
				message: err.message,
			}
		}
	})
})
