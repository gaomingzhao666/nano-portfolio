import comments from '~/server/models/comment'

interface deleteCommentBody {
	comment: string
}

export default defineEventHandler(async (event) => {
	const { comment }: deleteCommentBody = await readBody(event)

	const deletedComment = await comments.findOneAndDelete({ comment })

	if (deletedComment) {
		setResponseStatus(event, 200)
		return <delCommentDelete>{
			status: true,
			data: {
				message: 'Comment deleted.',
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
