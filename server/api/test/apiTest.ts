import accountInfo from '@/server/models/accountInfo'

export default defineEventHandler(async (event) => {
  try {
    return {
      message: 'test api success!!!!!',
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error in TEST module',
    })
  }
})
