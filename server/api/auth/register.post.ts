import accountInfo from '~/server/models/accountInfo'
import { hashPassword } from '~/server/utils/hashPassword'

export default defineEventHandler(async (event) => {
	try {
		const { username, password } = await readBody(event)

		// Check if user already exists
		const userExist = await accountInfo.findOne({ username })
		if (userExist) {
			return <registerPost>{
				status: false,
				data: {
					message: 'User already exists.',
				},
			}
		}

		// Hash the password
		const hashedPassword: string = hashPassword(password)

		// Create a new user in database
		const userCount: number = await accountInfo.countDocuments()
		const userId: string = (userCount + 1).toString()
		const newUser = new accountInfo({
			userId: userId,
			username: username,
			password: hashedPassword,
			createTime: Date.now(),
		})
		newUser.save()

		setResponseStatus(event, 200)
		return <registerPost>{
			status: true,
			data: {
				message: `Register Successfully, welcome ${username}!`,
			},
		}
	} catch (error) {
		console.log('Error in register module')
		console.log(error)
	}
})
