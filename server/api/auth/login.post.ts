import jwt from 'jsonwebtoken'
import accountInfo from '~/server/models/accountInfo'
import { hashPassword, comparePassword } from '~/server/utils/hashPassword'

interface bodyType {
	username: string
	password: string
}

export default defineEventHandler(async (event) => {
	const { username, password }: bodyType = await readBody(event)

	// Find the user in database by username
	const user = await accountInfo.findOne({ username: username })
	if (!user) {
		return <errorType>{
			status: false,
			data: {
				message: 'User not existed',
			},
		}
	}

	// Compare the password
	const isValid: boolean = comparePassword(password, user.password)
	if (!isValid) {
		return <errorType>{
			status: false,
			data: {
				message: 'Invalid or incorrect password',
			},
		}
	}

	// Generate a JWT token
	const token: string | void = jwt.sign(
		{
			id: user.userId,
		},
		'secretByNano',
		{
			// 7 days
			expiresIn: 60 * 60 * 24 * 7,
		}
	)

	setResponseStatus(event, 200)
	setCookie(event, 'token', token)
	setCookie(event, 'username', user.username)
	return <loginPost>{
		status: true,
		data: {
			accountInfo: user,
			message: `Login Successfully, welcome ${username}!`,
			token: token,
		},
	}
})
