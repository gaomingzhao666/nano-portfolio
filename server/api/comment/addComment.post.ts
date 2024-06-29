import comments from '~/server/models/comment'

interface addCommentBody {
	username: string
	comment: string
	device: string
}
export default defineEventHandler(async (event) => {
	const { username, comment, device }: addCommentBody = await readBody(event)

	if (!getCookie(event, 'token')) {
		return <errorType>{
			status: false,
			data: {
				message: 'You are not logged in.',
			},
		}
	}
	const isExistComment = await comments.findOne({
		username: username,
		comment: comment,
	})
	if (isExistComment)
		return <errorType>{
			status: false,
			data: {
				message: 'Comment already exists, do not publish it again.',
			},
		}

	const newComment = await comments.create({
		username: username,
		comment: comment,
		device: device,
	})

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
