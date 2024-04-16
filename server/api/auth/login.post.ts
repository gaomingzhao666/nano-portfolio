import jwt from 'jsonwebtoken'

import accountInfo from '~/server/models/accountInfo'
import { hashPassword } from '~/server/utils/hashPassword'

export default defineEventHandler(async (event) => {
	try {
		const { username, password } = await readBody(event)

		// Find the user in database by username
		const user = await accountInfo.findOne({ username })
		if (!user) {
			return <loginPost>{
				status: false,
				data: {
					message: 'User not existed',
				},
			}
		}

		// Compare the password
		const isValid: boolean =
			hashPassword(password) === hashPassword(user.password) ? true : false
		if (!isValid) {
			return <loginPost>{
				status: false,
				data: {
					message: 'Invalid or incorrect password',
				},
			}
		}

		// Generate a JWT token
		const token: string | void = jwt.sign(
			user.userId,
			'secretByNano',
			{
				expiresIn: '7d',
			},
			(err, token) => {
				console.log(token)
			}
		)

		setResponseStatus(event, 200)
		return <loginPost>{
			status: true,
			data: {
				accountInfo: user,
				message: `Login Successfully, welcome ${username}!`,
				token: token,
			},
		}
	} catch (error) {
		console.log('Error in login module')
		console.log(error)
	}
})
