import crypto from 'node:crypto'
import jwt from 'jsonwebtoken'

import accountInfo from '~/server/models/accountInfo'
import { hashPassword } from '~/server/utils/hashPassword'

export default defineEventHandler(async (event) => {
	try {
		const { username, password } = await readBody(event)

		// Check if user already exists
		const userExist = await accountInfo.findOne({ username })
		if (userExist) {
			throw createError({
				statusCode: 400,
				statusMessage: 'User already exists',
			})
		}

		// Hash the password
		const hashedPassword: string = hashPassword(password)

		// Create a new user in database
		const userCount: number = await accountInfo.countDocuments()
		const userId: string = (userCount + 1).toString()
		const newUser = new accountInfo({
			userId: userId,
			username: username,
			password: password,
			createTime: Date.now(),
		})
		newUser.save()

		return {
			message: `Register Successfully, welcome ${username}!`,
		}
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Error in register module',
		})
	}
})
