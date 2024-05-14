import accountInfo from '~/server/models/accountInfo'

interface queryType {
	token: string
}

export default defineEventHandler(async (event) => {
	try {
		const { token }: queryType = getQuery(event)
		if (!token)
			return <errorType>{
				status: false,
				data: {
					message: 'Token does not exist',
				},
			}

		const decode: any = verifyToken(token)
		const userInfo: userInfo | null = await accountInfo.findOne({
			userId: decode.id,
		})
		return <userInfoGet>{
			status: true,
			data: userInfo,
		}
	} catch (error) {
		console.log('Error in userInfoGet module')
		console.log(error)
	}
})
