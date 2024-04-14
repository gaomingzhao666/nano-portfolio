declare interface loginPost extends index {
	data: dataType
}

interface dataType {
	accountInfo: accountInfo
	message: string
	token: string | undefined
}
