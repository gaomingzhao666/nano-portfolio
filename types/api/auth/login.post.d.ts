declare interface loginPost extends index {
	data: {
		accountInfo?: accountInfo
		message: string
		token?: string | undefined
	}
}
