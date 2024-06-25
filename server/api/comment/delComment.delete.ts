import comments from '~/server/models/comment'

interface deleteCommentQuery {
	commentId: string
}

export default defineEventHandler(async (event) => {
	const { commentId }: deleteCommentQuery = getQuery(event)

	if (!commentId) {
		return <errorType>{
			status: false,
			data: {
				message: 'Comment ID is required',
			},
		}
	}

	const deletedComment = await comments.findByIdAndDelete(commentId)

	if (deletedComment) {
		setResponseStatus(event, 200)
		return <delCommentDelete>{
			status: true,
			data: {
				message: `Comment ${deletedComment} has been deleted.`,
			},
		}
	} else {
		return <errorType>{
			status: false,
			data: {
				message: 'Failed to delete comment',
			},
		}
	}
})
