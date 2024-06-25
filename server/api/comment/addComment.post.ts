import comments from '~/server/models/comment'
import accountInfo from '~/server/models/accountInfo'

interface addCommentBody {
	from: string
	to?: string
	comment: string
	addTime: string
}

export default defineEventHandler(async (event) => {
	const { from, to, comment, addTime }: addCommentBody = await readBody(event)

	// if this comment is a reply
	if (to)
		await comments.findOneAndUpdate(
			{ from: to },
			{ $push: { replies: { from, to, comment, addTime } } }
		)
	// if this comment is a new comment
	else {
		const newComment = new comments({
			from,
			to,
			comment,
			addTime,
		})
		await newComment.save()

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
	}
})
