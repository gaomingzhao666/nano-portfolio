import comments from '~/server/models/comment'

interface deleteCommentBody {
	username: string
	comment: string
}

export default defineEventHandler(async (event) => {
	const { username, comment }: deleteCommentBody = await getQuery(event)

	if (!getCookie(event, 'token')) {
		setResponseStatus(event, 401)
		return <delCommentDelete>{
			status: false,
			data: {
				message: 'You are not logged in',
			},
		}
	}
	if (getCookie(event, 'username') !== username) {
		setResponseStatus(event, 401)
		return <delCommentDelete>{
			status: false,
			data: {
				message: 'You are not allowed to delete this comment',
			},
		}
	}

	const deletedComment = await comments.findOneAndDelete({
		username: username,
		comment: comment,
	})

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
