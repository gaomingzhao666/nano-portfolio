import comments from '@/server/models/comment'

export default defineEventHandler(async (event) => {
  try {
    const allComments = await comments.find().lean()

    setResponseStatus(event, 200)
    return {
      status: true,
      data: allComments,
    }
  } catch (error) {
    setResponseStatus(event, 500)
    return {
      status: false,
      data: {
        message: 'Failed to retrieve comments',
      },
    }
  }
})
