import comments from '~/server/models/comment'

interface addCommentBody {
	user: accountInfo
	comment: string
}

export default defineEventHandler(async (event) => {
	const { user, comment }: addCommentBody = await readBody(event)

	const newComment = new comments({
		user,
		comment,
	})
	await newComment.save()

	if (newComment) {
		setResponseStatus(event, 200)
		return <addCommentPost>{
			status: true,
			data: {
				message: 'Comment added.',
			},
		}
	} else {
		return <errorType>{
			status: false,
			data: {
				message: 'Failed to add comment',
			},
		}
	}
})
