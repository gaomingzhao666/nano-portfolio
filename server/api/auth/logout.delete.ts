interface bodyType {
	token: string
}

export default defineEventHandler(async (event) => {
	const { token }: bodyType = await getQuery(event)

	// Validate the token
	if (!token)
		return <errorType>{
			status: false,
			data: {
				message: 'Token does not exist',
			},
		}

	// Clear the cookies related to login condition
	setCookie(event, 'token', '', { maxAge: 0 })
	setCookie(event, 'username', '', { maxAge: 0 })

	setResponseStatus(event, 200)
	return <logoutDelete>{
		status: true,
		data: {
			message: 'Logout Successfully',
		},
	}
})
