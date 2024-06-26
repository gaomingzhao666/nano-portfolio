import comments from '~/server/models/comment'

interface updateCommentBody {
	oldComment: string
	newComment: string
}

export default defineEventHandler(async (event) => {
	const { oldComment, newComment }: updateCommentBody = await readBody(event)

	const updatedComment = await comments.findOneAndUpdate(
		{ comment: oldComment },
		{ comment: newComment },
		{ new: true }
	)

	if (updatedComment) {
		setResponseStatus(event, 200)
		return <updateCommentPut>{
			status: true,
			data: {
				message: 'Comment updated.',
			},
		}
	} else {
		return <errorType>{
			status: false,
			data: {
				message: 'Failed to update comment',
			},
		}
	}
})
