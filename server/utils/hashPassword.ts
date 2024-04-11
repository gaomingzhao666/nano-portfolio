import crypto from 'node:crypto'

export const hashPassword = (password: string): string => {
	const salt: string = crypto.randomBytes(16).toString('hex')

	// return hashedPassword
	return <string>(
		crypto.createHmac('sha256', salt).update(password).digest('hex')
	)
}
