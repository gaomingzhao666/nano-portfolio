import crypto from 'node:crypto'
import jwt from 'jsonwebtoken'

import accountInfo from '~/server/models/accountInfo'
import { hashPassword } from '~/server/utils/hashPassword'
import { NuxtConfig } from 'nuxt/schema'

export default defineEventHandler(async (event) => {
	try {
		const { username, password } = await readBody(event)

		// Find the user in database by username
		const user = await accountInfo.findOne({ username })
		if (!user) {
			throw <Error>createError({
				statusCode: 401,
				statusMessage: 'Username already exists',
			})
		}

		// Compare the password
		const isValid: boolean =
			hashPassword(password) === hashPassword(user.password) ? true : false
		if (!isValid) {
			throw <Error>createError({
				statusCode: 401,
				statusMessage: 'Invalid or incorrect password',
			})
		}

		// Generate a JWT token
		const token = jwt.sign(
			user,
			'secretByNano',
			{
				expiresIn: '7d',
			},
			(err, token) => {
				console.log(token)
			}
		)

		return {
			accountInfo: user,
			token,
		}
	} catch (error) {
		throw <Error>createError({
			statusCode: 500,
			statusMessage: 'Error in login module',
		})
	}
})
