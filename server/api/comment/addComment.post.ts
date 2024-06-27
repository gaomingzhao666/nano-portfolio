import comments from '~/server/models/comment'

interface addCommentBody {
	username: string
	comment: string
	device: string
}
export default defineEventHandler(async (event) => {
	const { username, comment, device }: addCommentBody = await readBody(event)

	const newComment = new comments({
		username: username,
		comment: comment,
		device: device,
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
