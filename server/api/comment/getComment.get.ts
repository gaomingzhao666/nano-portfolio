import comments from '@/server/models/comment'

export default defineEventHandler(async (event) => {
  const allComments = await comments.find().lean()

  if (allComments) {
    setResponseStatus(event, 200)
    return <getCommentGet>{
      status: true,
      data: { comments: allComments },
    }
  } else
    return <errorType>{
      status: false,
      data: {
        message: 'Failed to get comments',
      },
    }
})
