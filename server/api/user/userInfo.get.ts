import accountInfo from '@/server/models/accountInfo'

interface userInfoBody {
  token: string
}

export default defineEventHandler(async (event) => {
  const { token }: userInfoBody = getQuery(event)

  // validate the user login condition
  if (!token)
    return <errorType>{
      status: false,
      data: {
        message: 'Token does not exist',
      },
    }

  // validate the token
  const decode: any = verifyToken(token)

  const userInfo: accountInfo | null = await accountInfo.findOne({
    userId: decode.id,
  })
  return <userInfoGet>{
    status: true,
    data: userInfo,
  }
})
