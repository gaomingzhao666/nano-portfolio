import comments from '@/server/models/comment'

interface deleteCommentBody {
	username: string
	comment: string
}

export default defineEventHandler(async (event) => {
	const { username, comment }: deleteCommentBody = await getQuery(event)

	// validate the user login condition
	if (!getCookie(event, 'token'))
		return <delCommentDelete>{
			status: false,
			data: {
				message: 'You are not logged in',
			},
		}

	// check if the user is allowed to delete the comment
	if (getCookie(event, 'username') !== username)
		return <delCommentDelete>{
			status: false,
			data: {
				message: 'You are not allowed to delete this comment',
			},
		}

	// delete the comment from the database
	const deletedComment = await comments.findOneAndDelete({
		username: username,
		comment: comment,
	})

	// return the condition message
	if (deletedComment) {
		setResponseStatus(event, 200)
		return <delCommentDelete>{
			status: true,
			data: {
				message: 'Comment deleted.',
			},
		}
	} else
		return <errorType>{
			status: false,
			data: {
				message: 'Failed to delete comment',
			},
		}
})
