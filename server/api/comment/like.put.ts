import comments from '@/server/models/comment'

interface addCommentBody {
	username: string
	comment: string
}
export default defineEventHandler(async (event) => {
	const { username, comment }: addCommentBody = await readBody(event)

	// validate the user login condition
	if (!getCookie(event, 'token'))
		return <addCommentPost>{
			status: false,
			data: {
				message: 'You are not logged in',
			},
		}

	// check if the comment exists
	const commentToUpdate = await comments.findOne({
		username: username,
		comment: comment,
	})
	if (!commentToUpdate)
		return <addCommentPost>{
			status: false,
			data: {
				message: 'Comment not found',
			},
		}

	// update the comment like count
	const updatedComment = await comments.findOneAndUpdate(
		{ username: username, comment: comment },
		{ $set: { like: commentToUpdate.like + 1 } },
		{ new: true }
	)

	// return the condition message
	if (updatedComment) {
		setResponseStatus(event, 200)
		return <addCommentPost>{
			status: true,
			data: {
				message: 'Like added.',
			},
		}
	} else
		return <errorType>{
			status: false,
			data: {
				message: 'Failed to add like',
			},
		}
})
