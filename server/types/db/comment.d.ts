declare interface comment {
	userId: string
	username: string

	comment: string
	childComment: [comment]

	addTime: Date
}
