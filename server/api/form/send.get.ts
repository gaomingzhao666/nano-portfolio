import { Resend } from 'resend'

const resend = new Resend('re_Tfk9r3V8_2s2AvNuWrhvmja7u2jprVKdD')

interface bodyType {
	username: string
	email: string
	title: string
	contents: string
}
export default defineEventHandler(async (event) => {
	const { username, email, title, contents }: bodyType = await getQuery(event)

	if (!username || !title || !contents)
		return <errorType>{
			status: false,
			data: {
				message: 'username or title or contents cannot be empty',
			},
		}

	const data = await resend.emails.send({
		from: `${username} <onboarding@resend.dev>`,
		to: ['gaomingzhao666@outlook.com'],
		subject: title,
		html: `<h3>Email Address:</h3> <p>${email}</p> 
			   <h3>content:</h3> <p>${contents}</p>`,
	})
	if (data.error === null)
		return <formSendGet>{
			status: true,
			data: {
				message: 'Send successfully',
			},
		}
	else
		return <errorType>{
			status: false,
			data: {
				message: data.error,
			},
		}
})
