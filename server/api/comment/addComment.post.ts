import comments from '~/server/models/comment'

interface addCommentBody {
	username: string
	comment: string
	device: string
}
export default defineEventHandler(async (event) => {
	const { username, comment, device }: addCommentBody = await readBody(event)

	// validate the user login condition
	if (!getCookie(event, 'token')) {
		return <errorType>{
			status: false,
			data: {
				message: 'You are not logged in.',
			},
		}
	}
	// validate the user permission
	if (getCookie(event, 'username') !== username) {
		return <errorType>{
			status: false,
			data: {
				message: 'You are not allowed to add comment.',
			},
		}
	}

	// check if the comment already exists, this system(nano-portfolio) is not allow users to publish the same comment multiple times
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

	// add the comment to the database
	const newComment = await comments.create({
		username: username,
		comment: comment,
		device: device,
	})

	// return the condition message
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
