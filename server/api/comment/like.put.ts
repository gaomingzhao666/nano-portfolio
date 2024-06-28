import comments from '~/server/models/comment'

interface addCommentBody {
	username: string
	comment: string
}
export default defineEventHandler(async (event) => {
	const { username, comment }: addCommentBody = await readBody(event)

	if (!getCookie(event, 'token')) {
		setResponseStatus(event, 401)
		return <addCommentPost>{
			status: false,
			data: {
				message: 'You are not logged in',
			},
		}
	}

	const commentToUpdate = await comments.findOne({
		username: username,
		comment: comment,
	})
	if (!commentToUpdate) {
		setResponseStatus(event, 404)
		return <addCommentPost>{
			status: false,
			data: {
				message: 'Comment not found',
			},
		}
	}

	const updatedComment = await comments.findOneAndUpdate(
		{ username: username, comment: comment },
		{ $set: { like: commentToUpdate.like + 1 } },
		{ new: true }
	)

	if (updatedComment) {
		setResponseStatus(event, 200)
		return <addCommentPost>{
			status: true,
			data: {
				message: 'Like added.',
			},
		}
	} else {
		return <errorType>{
			status: false,
			data: {
				message: 'Failed to add like',
			},
		}
	}
})
