import comments from '~/server/models/comment'

interface addCommentBody {
	comment: string
}

export default defineEventHandler(async (event) => {
	const { comment }: addCommentBody = await readBody(event)

	const newComment = new comments({ comment })
	await newComment.save()

	if (newComment) {
		setResponseStatus(event, 200)
		return <addCommentPost>{
			status: true,
			data: {
				message: 'Comment added.',
			},
		}
	} else
		return <errorType>{
			status: false,
			data: {
				message: 'Failed to add comment',
			},
		}
})
