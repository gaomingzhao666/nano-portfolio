import comments from '~/server/models/comment'

interface updateCommentBody {
	commentId: string
	comment: string
}

export default defineEventHandler(async (event) => {
	const { commentId, comment }: updateCommentBody = await readBody(event)

	if (!commentId || !comment) {
		return <errorType>{
			status: false,
			data: {
				message: 'Comment ID and new comment text are required',
			},
		}
	}

	const updatedComment = await comments.findByIdAndUpdate(
		commentId,
		{ comment },
		{ new: true }
	)

	if (updatedComment) {
		setResponseStatus(event, 200)
		return <updateCommentPut>{
			status: true,
			data: {
				message: `Comment ${updatedComment} has been updated.`,
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
